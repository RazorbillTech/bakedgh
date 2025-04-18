
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useOrders } from '@/contexts/OrderContext';
import { toast } from 'sonner';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

interface MoMoVerificationProps {
  orderId: string;
  phoneNumber?: string;
  transactionId?: string;
}

const MoMoVerification = ({ orderId, phoneNumber, transactionId }: MoMoVerificationProps) => {
  const { updateOrderStatus } = useOrders();
  const [txnId, setTxnId] = useState(transactionId || '');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(!!transactionId);
  
  const handleVerifyPayment = () => {
    if (!txnId.trim()) {
      toast.error('Please enter a transaction ID');
      return;
    }
    
    setIsVerifying(true);
    
    // In a real app, this would make an API call to verify the MTN MoMo payment
    // For this demo, we'll simulate the verification
    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
      toast.success('Payment verified successfully');
      
      // Update the order status if it's pending
      updateOrderStatus(orderId, 'processing');
    }, 1500);
  };

  return (
    <div className="space-y-4">
      <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3">
        <div className="flex items-start gap-2">
          {isVerified ? (
            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
          ) : (
            <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
          )}
          <div>
            <h4 className="font-medium text-gray-800">
              {isVerified ? 'Payment Verified' : 'Payment Verification Required'}
            </h4>
            <p className="text-sm text-gray-600">
              {isVerified 
                ? 'MTN Mobile Money payment has been verified.' 
                : 'Please verify the MTN Mobile Money payment for this order.'}
            </p>
            {phoneNumber && !isVerified && (
              <p className="text-sm text-gray-600 mt-1">
                Customer MoMo Number: <span className="font-medium">{phoneNumber}</span>
              </p>
            )}
          </div>
        </div>
      </div>
      
      {!isVerified && (
        <div className="space-y-3">
          <div>
            <Label htmlFor="transactionId">MTN MoMo Transaction ID</Label>
            <Input
              id="transactionId"
              value={txnId}
              onChange={(e) => setTxnId(e.target.value)}
              placeholder="Enter transaction ID"
            />
          </div>
          
          <Button 
            onClick={handleVerifyPayment} 
            className="w-full bg-teal-500 hover:bg-teal-600 text-white"
            disabled={isVerifying}
          >
            {isVerifying ? 'Verifying...' : 'Verify Payment'}
          </Button>
        </div>
      )}
    </div>
  );
};

export default MoMoVerification;
