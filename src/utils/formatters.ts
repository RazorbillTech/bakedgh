
/**
 * Format a number as Ghanaian Cedis
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-GH', {
    style: 'currency',
    currency: 'GHS',
    currencyDisplay: 'symbol',
  }).format(amount);
};

/**
 * Format a date to a readable string
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-GH', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }).format(date);
};

/**
 * Format order status with appropriate color class
 */
export const getStatusColorClass = (status: string): string => {
  switch (status) {
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'processing':
      return 'bg-blue-100 text-blue-800';
    case 'shipped':
      return 'bg-purple-100 text-purple-800';
    case 'delivered':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

/**
 * Get stock level status
 */
export const getStockStatus = (stockLevel: number): { text: string; colorClass: string } => {
  if (stockLevel <= 0) {
    return { text: 'Out of Stock', colorClass: 'text-red-500' };
  } else if (stockLevel < 5) {
    return { text: 'Low Stock', colorClass: 'text-yellow-500' };
  } else {
    return { text: 'In Stock', colorClass: 'text-green-500' };
  }
};
