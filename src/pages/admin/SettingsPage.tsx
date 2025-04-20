import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import AdminHeader from '@/components/admin/AdminHeader';
import Sidebar from '@/components/admin/Sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { Save, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const SettingsPage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const initialBusinessInfo = {
    name: "Baked GH",
    address: "Achimota, Accra",
    phone: "+233 12 345 6789",
    email: 'info@bakedgh.com',
    description: 'Delightful bakery offering a wide variety of fresh cakes and pastries, from classic recipes to custom creations.',
    logoUrl: "/placeholder-logo.png",
  };
  
  const [businessInfo, setBusinessInfo] = useState(initialBusinessInfo);
  
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    newOrderNotifications: true,
    lowStockNotifications: true,
    notificationEmail: 'info@bakedgh.com'
  });
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  const handleBusinessInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBusinessInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setNotificationSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const saveBusinessInfo = () => {
    console.log('Saving business info:', businessInfo);
    toast.success('Business information saved successfully');
  };

  const saveNotificationSettings = () => {
    console.log('Saving notification settings:', notificationSettings);
    toast.success('Notification settings saved successfully');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Settings</h1>
            <p className="text-gray-600">Manage your store settings</p>
          </div>
          
          <div className="space-y-6">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Demo Mode</AlertTitle>
              <AlertDescription>
                This is a demo page. In a real application, these settings would be saved to a backend.
              </AlertDescription>
            </Alert>
            
            <Card>
              <CardHeader>
                <CardTitle>Business Information</CardTitle>
                <CardDescription>
                  Update your store's basic information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Business Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={businessInfo.name}
                        onChange={handleBusinessInfoChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Business Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={businessInfo.email}
                        onChange={handleBusinessInfoChange}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Business Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={businessInfo.phone}
                        onChange={handleBusinessInfoChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Business Address</Label>
                      <Input
                        id="address"
                        name="address"
                        value={businessInfo.address}
                        onChange={handleBusinessInfoChange}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Business Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={businessInfo.description}
                      onChange={handleBusinessInfoChange}
                      rows={3}
                    />
                  </div>
                  
                  <Button 
                    onClick={saveBusinessInfo}
                    className="bg-purple-500 hover:bg-purple-600 text-white"
                  >
                    <Save className="mr-2 h-4 w-4" />
                    Save Information
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>
                  Configure how you want to receive notifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="notificationEmail">Notification Email</Label>
                    <Input
                      id="notificationEmail"
                      name="notificationEmail"
                      type="email"
                      value={notificationSettings.notificationEmail}
                      onChange={handleNotificationChange}
                    />
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Email Notifications</h4>
                        <p className="text-sm text-gray-500">
                          Enable/disable all email notifications
                        </p>
                      </div>
                      <div className="flex items-center h-5">
                        <input
                          id="emailNotifications"
                          name="emailNotifications"
                          type="checkbox"
                          checked={notificationSettings.emailNotifications}
                          onChange={handleNotificationChange}
                          className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pl-6">
                      <div>
                        <h4 className="font-medium">New Order Notifications</h4>
                        <p className="text-sm text-gray-500">
                          Receive notifications for new orders
                        </p>
                      </div>
                      <div className="flex items-center h-5">
                        <input
                          id="newOrderNotifications"
                          name="newOrderNotifications"
                          type="checkbox"
                          checked={notificationSettings.newOrderNotifications}
                          onChange={handleNotificationChange}
                          className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pl-6">
                      <div>
                        <h4 className="font-medium">Low Stock Notifications</h4>
                        <p className="text-sm text-gray-500">
                          Receive notifications when products are low in stock
                        </p>
                      </div>
                      <div className="flex items-center h-5">
                        <input
                          id="lowStockNotifications"
                          name="lowStockNotifications"
                          type="checkbox"
                          checked={notificationSettings.lowStockNotifications}
                          onChange={handleNotificationChange}
                          className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={saveNotificationSettings}
                    className="bg-purple-500 hover:bg-purple-600 text-white"
                  >
                    <Save className="mr-2 h-4 w-4" />
                    Save Notification Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;
