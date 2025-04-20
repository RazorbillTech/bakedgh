
import { Product } from '@/types';
import { formatCurrency, getStockStatus } from '@/utils/formatters';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const stockStatus = getStockStatus(product.stock);

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {product.featured && (
          <Badge className="absolute top-2 right-2 bg-purple-500 hover:bg-purple-600">
            Featured
          </Badge>
        )}
      </div>
      <CardContent className="pt-4">
        <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="price-tag font-bold text-lg">{formatCurrency(product.price)}</span>
          <span className={`text-xs ${stockStatus.colorClass}`}>{stockStatus.text}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-purple-600 hover:bg-purple-700 text-white"
          onClick={() => addToCart(product)}
          disabled={product.stock <= 0}
        >
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
