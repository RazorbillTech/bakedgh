
import { useCart } from '@/contexts/CartContext';
import { formatCurrency } from '@/utils/formatters';
import { Button } from '@/components/ui/button';
import { X, Minus, Plus, ShoppingBag, AlertCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useNavigate } from 'react-router-dom';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  const { items, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>Your Cart</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        {items.length === 0 ? (
          <div className="py-6 flex flex-col items-center justify-center text-center">
            <ShoppingBag className="h-12 w-12 text-gray-300 mb-4" />
            <h3 className="text-lg font-medium mb-1">Your cart is empty</h3>
            <p className="text-sm text-gray-500 mb-4">Add some delicious cakes to get started</p>
            <Button onClick={onClose} className="bg-purple-500 hover:bg-purple-600 text-white">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="max-h-[50vh] pr-4">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <div className="w-20 h-20 rounded overflow-hidden">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h4 className="font-medium">{item.product.name}</h4>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => removeFromCart(item.product.id)}
                          className="h-6 w-6 text-gray-400 hover:text-red-500"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{formatCurrency(item.product.price)}</p>
                      <div className="flex items-center">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="h-7 w-7"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="mx-2 min-w-8 text-center">{item.quantity}</span>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="h-7 w-7"
                          disabled={item.quantity >= item.product.stock}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <Separator className="my-4" />
            
            <div className="space-y-4">
              <div className="flex justify-between items-center font-medium">
                <span>Total</span>
                <span className="price-tag">{formatCurrency(cartTotal)}</span>
              </div>
              
              {items.some(item => item.quantity > item.product.stock) && (
                <div className="flex items-center gap-2 p-2 bg-yellow-50 rounded text-sm text-yellow-700">
                  <AlertCircle className="h-4 w-4" />
                  <span>Some items have exceeded available stock</span>
                </div>
              )}
              
              <div className="flex flex-col gap-2">
                <Button 
                  onClick={handleCheckout}
                  className="bg-purple-500 hover:bg-purple-600 text-white"
                >
                  Proceed to Checkout
                </Button>
                <Button 
                  variant="outline" 
                  onClick={onClose}
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CartModal;
