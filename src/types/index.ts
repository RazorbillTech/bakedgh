
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  featured?: boolean;
}

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered';

export interface PaymentMethod {
  type: 'momo' | 'cash';
  details?: {
    phoneNumber?: string;
    transactionId?: string;
  };
}

export interface Customer {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  customer: Customer;
  items: OrderItem[];
  total: number;
  date: string;
  status: OrderStatus;
  payment: PaymentMethod;
  specialInstructions?: string;
}

export interface DashboardStats {
  totalSales: number;
  totalOrders: number;
  pendingOrders: number;
  lowStockItems: number;
}
