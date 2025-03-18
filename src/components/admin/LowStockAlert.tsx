
import { useNavigate } from 'react-router-dom';
import { useProducts } from '@/contexts/ProductContext';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { PackageOpen } from 'lucide-react';

const LowStockAlert = () => {
  const { products } = useProducts();
  const navigate = useNavigate();
  
  const lowStockProducts = products
    .filter(product => product.stock < 5) // Consider low stock threshold
    .sort((a, b) => a.stock - b.stock); // Sort by lowest stock first

  if (lowStockProducts.length === 0) {
    return null; // Don't show if no low stock products
  }

  return (
    <Card className="mt-6 border-yellow-200 bg-yellow-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-yellow-700">
          <PackageOpen className="h-5 w-5" />
          Low Stock Alert
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {lowStockProducts.slice(0, 3).map((product) => (
            <Alert key={product.id} variant="outline" className="bg-white border-yellow-200">
              <AlertTitle className="font-medium text-yellow-800 flex justify-between">
                {product.name}
                <span className={product.stock === 0 ? "text-red-500" : "text-yellow-500"}>
                  {product.stock === 0 ? "Out of Stock" : `${product.stock} left`}
                </span>
              </AlertTitle>
              <AlertDescription className="text-gray-600 text-sm">
                This product is running low on inventory and needs to be restocked.
              </AlertDescription>
            </Alert>
          ))}
          
          {lowStockProducts.length > 3 && (
            <p className="text-sm text-yellow-700 pt-2">
              +{lowStockProducts.length - 3} more products with low stock
            </p>
          )}
          
          <Button 
            variant="outline" 
            className="w-full border-yellow-300 text-yellow-700 hover:bg-yellow-100 hover:text-yellow-800"
            onClick={() => navigate('/admin/products')}
          >
            Manage Inventory
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LowStockAlert;
