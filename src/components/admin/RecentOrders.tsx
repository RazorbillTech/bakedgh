import { useNavigate } from 'react-router-dom';
import { useOrders } from '@/contexts/OrderContext';
import { formatCurrency, formatDate, getStatusColorClass } from '@/utils/formatters';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Eye } from 'lucide-react';

const RecentOrders = () => {
  const { getRecentOrders } = useOrders();
  const navigate = useNavigate();
  
  const recentOrders = getRecentOrders(5);

  if (recentOrders.length === 0) {
    return (
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">No orders yet.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer.name}</TableCell>
                <TableCell>{formatDate(order.date)}</TableCell>
                <TableCell>{formatCurrency(order.total)}</TableCell>
                <TableCell>
                  <Badge 
                    variant="outline" 
                    className={`${getStatusColorClass(order.status)} capitalize`}
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => navigate(`/admin/orders/${order.id}`)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-4 text-right">
          <Button 
            variant="link" 
            className="text-teal-500" 
            onClick={() => navigate('/admin/orders')}
          >
            View All Orders
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentOrders;
