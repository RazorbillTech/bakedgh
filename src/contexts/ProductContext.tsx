
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Product } from '@/types';
import { toast } from "sonner";
import { sampleProducts } from '@/data/sampleData';

interface ProductContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (productId: string) => void;
  getProduct: (productId: string) => Product | undefined;
  isLoading: boolean;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Initialize with sample data
  useEffect(() => {
    // In a real app, this would fetch from an API
    setProducts(sampleProducts);
    setIsLoading(false);
  }, []);

  const addProduct = (productData: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...productData,
      id: Date.now().toString(), // Simple ID generation
    };
    
    setProducts(prevProducts => [...prevProducts, newProduct]);
    toast.success(`Product ${newProduct.name} added successfully`);
  };

  const updateProduct = (updatedProduct: Product) => {
    setProducts(prevProducts => 
      prevProducts.map(product => 
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    toast.success(`Product ${updatedProduct.name} updated successfully`);
  };

  const deleteProduct = (productId: string) => {
    const product = products.find(p => p.id === productId);
    setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
    if (product) {
      toast.success(`Product ${product.name} deleted successfully`);
    }
  };

  const getProduct = (productId: string) => {
    return products.find(product => product.id === productId);
  };

  return (
    <ProductContext.Provider value={{ 
      products, 
      addProduct, 
      updateProduct, 
      deleteProduct,
      getProduct,
      isLoading
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};
