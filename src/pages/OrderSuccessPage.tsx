
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useOrders } from '@/contexts/OrderContext';
import { formatCurrency, formatDate } from '@/utils/formatters';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Check, AlertCircle, Home, ShoppingBag } from 'lucide-react';

const OrderSuccessPage = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { getOrder } = useOrders();
  const [order, setOrder] = useState(orderId ? getOrder(orderId) : undefined);
  
  useEffect(() => {
    if (orderId) {
      setOrder(getOrder(orderId));
    }
  }, [orderId, getOrder]);
  
  if (!order) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-16">
          <div className="container mx-auto px-4 text-center">
            <AlertCircle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-4">Order Not Found</h1>
            <p className="text-gray-600 mb-8">
              We couldn't find the order you're looking for.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/">
                <Button className="bg-purple-500 hover:bg-purple-600 text-white">
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
            <p className="text-gray-600">
              Thank you for your order. We've received your payment and will start processing your order.
            </p>
          </div>
          
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="font-semibold text-lg">Order #{order.id}</h2>
                  <p className="text-gray-500 text-sm">Placed on {formatDate(order.date)}</p>
                </div>
                <div className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  {order.status}
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-4">
                <h3 className="font-medium">Items Ordered</h3>
                <div className="space-y-3">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <div>
                        <span className="font-medium">{item.productName}</span>
                        <span className="text-gray-500 text-sm block">
                          Quantity: {item.quantity}
                        </span>
                      </div>
                      <span className="price-tag">{formatCurrency(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-2" />
                
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span className="price-tag">{formatCurrency(order.total)}</span>
                </div>
                
                {order.specialInstructions && (
                  <div className="mt-4 p-3 bg-gray-50 rounded">
                    <h3 className="font-medium mb-1">Special Instructions</h3>
                    <p className="text-gray-600 text-sm">{order.specialInstructions}</p>
                  </div>
                )}
              </div>
              
              <Separator className="my-4" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-1">Shipping Details</h3>
                  <address className="not-italic text-gray-600 text-sm">
                    <p>{order.customer.name}</p>
                    <p>{order.customer.address}</p>
                    <p>{order.customer.phone}</p>
                  </address>
                </div>
                
                <div>
                  <h3 className="font-medium mb-1">Payment Method</h3>
                  <p className="text-gray-600 text-sm capitalize">
                    {order.payment.type === 'momo' ? 'MTN Mobile Money' : 'Cash on Delivery'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button 
                variant="outline" 
                className="w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <Home className="h-4 w-4" />
                Return to Home
              </Button>
            </Link>
            <Link to="/">
              <Button 
                className="w-full sm:w-auto bg-purple-500 hover:bg-purple-600 text-white flex items-center justify-center gap-2"
              >
                <ShoppingBag className="h-4 w-4" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderSuccessPage;
