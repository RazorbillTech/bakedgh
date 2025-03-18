
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useOrders } from '@/contexts/OrderContext';
import { formatCurrency, formatDate } from '@/utils/formatters';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, MapPin, Phone, Mail, AlertCircle } from 'lucide-react';
import AdminHeader from '@/components/admin/AdminHeader';
import Sidebar from '@/components/admin/Sidebar';
import OrderStatusUpdate from '@/components/admin/OrderStatusUpdate';
import MoMoVerification from '@/components/admin/MoMoVerification';

const OrderDetailsPage = () => {
  const { isAuthenticated } = useAuth();
  const { orderId } = useParams<{ orderId: string }>();
  const { getOrder } = useOrders();
  const navigate = useNavigate();
  
  const [order, setOrder] = useState(orderId ? getOrder(orderId) : undefined);
  
  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
  
  // Get order details
  useEffect(() => {
    if (orderId) {
      const orderDetails = getOrder(orderId);
      setOrder(orderDetails);
      
      if (!orderDetails && isAuthenticated) {
        navigate('/admin/orders');
      }
    }
  }, [orderId, getOrder, navigate, isAuthenticated]);

  if (!isAuthenticated || !order) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <Button 
            variant="ghost" 
            className="mb-4 flex items-center text-gray-600"
            onClick={() => navigate('/admin/orders')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Orders
          </Button>
          
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold">Order #{order.id}</h1>
              <p className="text-gray-600">Placed on {formatDate(order.date)}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between py-2">
                        <div>
                          <span className="font-medium">{item.productName}</span>
                          <span className="text-gray-600 block text-sm">
                            Quantity: {item.quantity} × {formatCurrency(item.price)}
                          </span>
                        </div>
                        <span className="price-tag font-medium">
                          {formatCurrency(item.price * item.quantity)}
                        </span>
                      </div>
                    ))}
                    
                    <Separator className="my-4" />
                    
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span className="price-tag">{formatCurrency(order.total)}</span>
                    </div>
                    
                    {order.specialInstructions && (
                      <div className="mt-6 p-4 bg-purple-50 rounded-md border border-purple-100">
                        <h3 className="font-medium text-purple-800 mb-1">Special Instructions</h3>
                        <p className="text-sm text-gray-700">{order.specialInstructions}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Customer Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h3 className="font-medium">Contact Details</h3>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="flex-shrink-0 mt-0.5">
                            <Mail className="h-4 w-4 text-gray-500" />
                          </span>
                          <div>
                            <p className="text-sm text-gray-700">{order.customer.email}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="flex-shrink-0 mt-0.5">
                            <Phone className="h-4 w-4 text-gray-500" />
                          </span>
                          <div>
                            <p className="text-sm text-gray-700">{order.customer.phone}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="font-medium">Shipping Address</h3>
                      <div className="flex items-start gap-2">
                        <span className="flex-shrink-0 mt-0.5">
                          <MapPin className="h-4 w-4 text-gray-500" />
                        </span>
                        <div>
                          <p className="text-sm text-gray-700 font-medium">{order.customer.name}</p>
                          <p className="text-sm text-gray-700">{order.customer.address}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <OrderStatusUpdate 
                    orderId={order.id} 
                    currentStatus={order.status} 
                    onStatusUpdate={() => setOrder(getOrder(order.id))}
                  />
                </CardContent>
              </Card>
              
              {order.payment.type === 'momo' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <MoMoVerification 
                      orderId={order.id}
                      phoneNumber={order.payment.details?.phoneNumber}
                      transactionId={order.payment.details?.transactionId}
                    />
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
