
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Order, OrderStatus } from '@/types';
import { toast } from "sonner";
import { sampleOrders } from '@/data/sampleData';

interface OrderContextType {
  orders: Order[];
  addOrder: (order: Omit<Order, 'id' | 'date' | 'status'>) => string;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
  getOrder: (orderId: string) => Order | undefined;
  getTotalSales: () => number;
  getRecentOrders: (limit?: number) => Order[];
  isLoading: boolean;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Initialize with sample data
  useEffect(() => {
    // In a real app, this would fetch from an API
    setOrders(sampleOrders);
    setIsLoading(false);
  }, []);

  const addOrder = (orderData: Omit<Order, 'id' | 'date' | 'status'>): string => {
    const newOrder: Order = {
      ...orderData,
      id: `ORD-${Date.now().toString().slice(-6)}`,
      date: new Date().toISOString(),
      status: 'pending',
    };
    
    setOrders(prevOrders => [newOrder, ...prevOrders]);
    toast.success(`Order ${newOrder.id} created successfully`);
    
    // Simulate sending an email notification to the shop owner
    console.log(`Email notification sent to shop owner for new order: ${newOrder.id}`);
    
    return newOrder.id;
  };

  const updateOrderStatus = (orderId: string, status: OrderStatus) => {
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.id === orderId ? { ...order, status } : order
      )
    );
    toast.success(`Order ${orderId} status updated to ${status}`);
  };

  const getOrder = (orderId: string) => {
    return orders.find(order => order.id === orderId);
  };

  const getTotalSales = () => {
    return orders.reduce((total, order) => total + order.total, 0);
  };

  const getRecentOrders = (limit: number = 5) => {
    return [...orders]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
  };

  return (
    <OrderContext.Provider value={{ 
      orders, 
      addOrder, 
      updateOrderStatus, 
      getOrder,
      getTotalSales,
      getRecentOrders,
      isLoading
    }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = (): OrderContextType => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};
