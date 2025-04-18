
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gradient-to-b from-teal-50 to-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Authentic Ghanaian Cuisine
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
              Experience the rich flavors of Ghana with Ayewamu by Jane. From Jollof Rice to Fufu, we serve the best local dishes.
            </p>
            <Button 
              onClick={scrollToProducts}
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 text-lg"
            >
              Order Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1624154504737-c0b54715b4dd" 
                alt="Delicious Jollof Rice" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg hidden md:block">
                <span className="font-bold text-teal-600 text-lg">100% Authentic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
