
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { useOrders } from '@/contexts/OrderContext';
import { formatCurrency } from '@/utils/formatters';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Customer, OrderItem, PaymentMethod } from '@/types';
import { toast } from 'sonner';
import OrderSummary from './OrderSummary';

const initialCustomerState: Customer = {
  name: '',
  email: '',
  phone: '',
  address: ''
};

const CheckoutForm = () => {
  const navigate = useNavigate();
  const { items, cartTotal, clearCart } = useCart();
  const { addOrder } = useOrders();
  
  const [customer, setCustomer] = useState<Customer>(initialCustomerState);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'momo' | 'cash'>('momo');
  const [momoNumber, setMomoNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  if (items.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-6">Add some products to your cart before checking out</p>
        <Button 
          onClick={() => navigate('/')}
          className="bg-purple-500 hover:bg-purple-600 text-white"
        >
          Return to Shop
        </Button>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCustomer(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simple validation
    if (!customer.name || !customer.email || !customer.phone || !customer.address) {
      toast.error('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }
    
    if (paymentMethod === 'momo' && !momoNumber) {
      toast.error('Please enter your MTN MoMo number');
      setIsSubmitting(false);
      return;
    }
    
    // Create order items from cart items
    const orderItems: OrderItem[] = items.map(item => ({
      productId: item.product.id,
      productName: item.product.name,
      price: item.product.price,
      quantity: item.quantity
    }));
    
    // Create payment method object
    const payment: PaymentMethod = paymentMethod === 'momo' 
      ? { type: 'momo', details: { phoneNumber: momoNumber } }
      : { type: 'cash' };
    
    try {
      // Add order using context
      const orderId = addOrder({
        customer,
        items: orderItems,
        total: cartTotal,
        payment,
        specialInstructions: specialInstructions || undefined
      });
      
      // Clear cart
      clearCart();
      
      // Redirect to success page
      navigate(`/order-success/${orderId}`);
    } catch (error) {
      console.error('Error creating order:', error);
      toast.error('There was an error processing your order. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <div className="lg:col-span-3">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={customer.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={customer.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={customer.phone}
                  onChange={handleInputChange}
                  placeholder="+233 55 123 4567"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="address">Delivery Address *</Label>
                <Input
                  id="address"
                  name="address"
                  value={customer.address}
                  onChange={handleInputChange}
                  placeholder="123 Main St, Accra"
                  required
                />
              </div>
            </div>
          </div>
          
          <div>
            <Label htmlFor="specialInstructions">Special Instructions</Label>
            <Textarea
              id="specialInstructions"
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="Any special requirements for your order"
              rows={3}
            />
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Payment Method</h3>
            
            <RadioGroup value={paymentMethod} onValueChange={(value: 'momo' | 'cash') => setPaymentMethod(value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="momo" id="momo" />
                <Label htmlFor="momo">MTN Mobile Money</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cash" id="cash" />
                <Label htmlFor="cash">Cash on Delivery</Label>
              </div>
            </RadioGroup>
            
            {paymentMethod === 'momo' && (
              <div>
                <Label htmlFor="momoNumber">MTN MoMo Number *</Label>
                <Input
                  id="momoNumber"
                  value={momoNumber}
                  onChange={(e) => setMomoNumber(e.target.value)}
                  placeholder="+233 55 123 4567"
                  required={paymentMethod === 'momo'}
                />
                <p className="text-xs text-gray-500 mt-1">
                  You will receive a payment prompt on this number to complete your order.
                </p>
              </div>
            )}
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-purple-500 hover:bg-purple-600 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : 'Complete Order'}
          </Button>
        </form>
      </div>
      
      <div className="lg:col-span-2">
        <OrderSummary />
      </div>
    </div>
  );
};

export default CheckoutForm;
