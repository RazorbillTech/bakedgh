import { useOrders } from '@/contexts/OrderContext';
import { OrderStatus } from '@/types';
import { Button } from '@/components/ui/button';
import { getStatusColorClass } from '@/utils/formatters';

interface OrderStatusUpdateProps {
  orderId: string;
  currentStatus: OrderStatus;
  onStatusUpdate?: () => void;
}

const OrderStatusUpdate = ({ orderId, currentStatus, onStatusUpdate }: OrderStatusUpdateProps) => {
  const { updateOrderStatus } = useOrders();
  
  const statusFlow: OrderStatus[] = ['pending', 'processing', 'shipped', 'delivered'];
  
  const currentStatusIndex = statusFlow.indexOf(currentStatus);
  
  const nextStatus = currentStatusIndex < statusFlow.length - 1 
    ? statusFlow[currentStatusIndex + 1] 
    : null;
  
  const handleUpdateStatus = () => {
    if (nextStatus) {
      updateOrderStatus(orderId, nextStatus);
      if (onStatusUpdate) {
        onStatusUpdate();
      }
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-col space-y-1">
        <span className="text-sm text-gray-500">Current Status</span>
        <div className={`text-sm px-2 py-1 rounded-md inline-block w-fit capitalize ${getStatusColorClass(currentStatus)}`}>
          {currentStatus}
        </div>
      </div>
      
      {nextStatus && (
        <Button 
          onClick={handleUpdateStatus} 
          className="w-full bg-purple-600 hover:bg-purple-700 text-white"
        >
          Mark as {nextStatus}
        </Button>
      )}
      
      {!nextStatus && (
        <p className="text-sm text-gray-500">
          This order has been completed.
        </p>
      )}
    </div>
  );
};

export default OrderStatusUpdate;
