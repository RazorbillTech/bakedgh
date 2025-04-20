import { useOrders } from '@/contexts/OrderContext';
import { useProducts } from '@/contexts/ProductContext';
import { formatCurrency } from '@/utils/formatters';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BarChart, 
  CreditCard, 
  ShoppingCart, 
  PackageOpen 
} from 'lucide-react';

const DashboardOverview = () => {
  const { orders, getTotalSales } = useOrders();
  const { products } = useProducts();
  
  const totalSales = getTotalSales();
  const totalOrders = orders.length;
  const pendingOrders = orders.filter(order => order.status === 'pending').length;
  const lowStockProducts = products.filter(product => product.stock < 5).length;
  
  const thisMonth = new Date().getMonth();
  const thisYear = new Date().getFullYear();
  const salesThisMonth = orders
    .filter(order => {
      const orderDate = new Date(order.date);
      return orderDate.getMonth() === thisMonth && orderDate.getFullYear() === thisYear;
    })
    .reduce((sum, order) => sum + order.total, 0);
  
  const stats = [
    {
      title: "Total Sales",
      value: formatCurrency(totalSales),
      icon: <CreditCard className="h-5 w-5 text-purple-500" />,
      description: `${formatCurrency(salesThisMonth)} this month`
    },
    {
      title: "Total Orders",
      value: totalOrders,
      icon: <ShoppingCart className="h-5 w-5 text-purple-500" />,
      description: `${pendingOrders} pending`
    },
    {
      title: "Low Stock Items",
      value: lowStockProducts,
      icon: <PackageOpen className="h-5 w-5 text-purple-500" />,
      description: "Needs restock"
    },
    {
      title: "Products",
      value: products.length,
      icon: <BarChart className="h-5 w-5 text-purple-500" />,
      description: "Active products"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              {stat.title}
            </CardTitle>
            {stat.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardOverview;
