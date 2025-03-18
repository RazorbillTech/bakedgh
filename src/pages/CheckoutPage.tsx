
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import Header from '@/components/Header';
import CheckoutForm from '@/components/CheckoutForm';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

const CheckoutPage = () => {
  const { items } = useCart();
  const navigate = useNavigate();
  
  // Redirect to home if cart is empty
  useEffect(() => {
    if (items.length === 0) {
      navigate('/');
    }
  }, [items, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="mb-4 flex items-center text-gray-600 hover:text-purple-500"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shopping
          </Button>
          
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
          
          <CheckoutForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
