
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Ayewamu by Jane</h3>
            <p className="text-gray-600 text-sm">
              Experience authentic Ghanaian cuisine with our delicious local dishes. From Banku and Okro Soup to Garden Egg Stew, we serve the best local dishes in Achimota.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-600 hover:text-purple-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-purple-500 transition-colors">About Us</a></li>
              <li><a href="#products" className="text-gray-600 hover:text-purple-500 transition-colors">Products</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-purple-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-sm text-gray-600 space-y-2">
              <p>Amoakohene Ave</p>
              <p>Achimota, Accra, Ghana</p>
              <p>Email: info@ayewamubyjane.com</p>
              <p>Phone: +233 59 303 3898</p>
            </address>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-purple-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Ayewamu by Jane. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
