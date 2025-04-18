import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X, LogOut, Home, ShoppingBag, Package, Settings } from 'lucide-react';

const AdminHeader = () => {
  const { logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/admin" className="text-xl font-bold text-teal-500">BakedGH Admin</Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-teal-500 transition-colors flex items-center gap-1">
              <Home size={18} />
              <span>View Shop</span>
            </Link>
            <Button 
              variant="outline" 
              onClick={logout}
              className="flex items-center gap-1"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-teal-500 transition-colors flex items-center gap-2 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Home size={18} />
              <span>View Shop</span>
            </Link>
            <Button 
              variant="outline" 
              onClick={() => { logout(); setIsMobileMenuOpen(false); }}
              className="justify-start"
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default AdminHeader;
