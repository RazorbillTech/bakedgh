
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Delightful Cakes & Pastries
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
              Experience the magic of handcrafted cakes by Baked GH. From classic flavors to custom creations, we bake your dreams into reality.
            </p>
            <Button 
              onClick={scrollToProducts}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 text-lg"
            >
              Order Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1586788680399-2267d668bae6" 
                alt="Delicious Cakes" 
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg hidden md:block">
                <span className="font-bold text-primary text-lg">Fresh Daily</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
