
import { useCart } from '@/contexts/CartContext';
import { formatCurrency } from '@/utils/formatters';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const OrderSummary = () => {
  const { items, cartTotal } = useCart();
  
  // Calculate subtotal, delivery fee and total
  const subtotal = cartTotal;
  const deliveryFee = subtotal > 0 ? 25 : 0; // Free delivery above certain amount could be implemented
  const total = subtotal + deliveryFee;

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
      
      <ScrollArea className="max-h-[300px] pr-4 mb-4">
        {items.map((item) => (
          <div key={item.product.id} className="flex justify-between py-2">
            <div>
              <span className="font-medium">{item.product.name}</span>
              <span className="text-gray-600 block text-sm">
                Quantity: {item.quantity}
              </span>
            </div>
            <span className="price-tag">{formatCurrency(item.product.price * item.quantity)}</span>
          </div>
        ))}
      </ScrollArea>
      
      <Separator className="my-4" />
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Delivery Fee</span>
          <span>{formatCurrency(deliveryFee)}</span>
        </div>
        
        <Separator className="my-2" />
        
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span className="price-tag">{formatCurrency(total)}</span>
        </div>
      </div>
      
      <div className="mt-6 text-sm text-gray-500">
        <p>All prices are in Ghana Cedis (₵)</p>
        <p className="mt-2">By completing your purchase, you agree to our Terms of Service.</p>
      </div>
    </div>
  );
};

export default OrderSummary;
