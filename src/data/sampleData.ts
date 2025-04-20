import { Product, Order } from '@/types';

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Classic Red Velvet Cake',
    description: 'Luxurious red velvet cake with cream cheese frosting, perfect for special occasions',
    price: 150,
    image: 'https://images.unsplash.com/photo-1586788680399-2267d668bae6',
    category: 'Classic Cakes',
    stock: 20,
    featured: true
  },
  {
    id: '2',
    name: 'Chocolate Fudge Cake',
    description: 'Rich chocolate layers with dark chocolate ganache and chocolate shavings',
    price: 145,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
    category: 'Classic Cakes',
    stock: 15
  },
  {
    id: '3',
    name: 'Vanilla Bean Celebration Cake',
    description: 'Light and fluffy vanilla cake with buttercream frosting and rainbow sprinkles',
    price: 130,
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3',
    category: 'Classic Cakes',
    stock: 10,
    featured: true
  },
  {
    id: '4',
    name: 'Carrot Cake Cupcakes',
    description: 'Moist carrot cake cupcakes with cream cheese frosting and walnut topping',
    price: 45,
    image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7',
    category: 'Cupcakes',
    stock: 30
  },
  {
    id: '5',
    name: 'Strawberry Cheesecake',
    description: 'Creamy New York style cheesecake with fresh strawberry topping',
    price: 160,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd5107340c',
    category: 'Cheesecakes',
    stock: 12
  },
  {
    id: '6',
    name: 'Birthday Funfetti Cake',
    description: 'Colorful vanilla cake filled with sprinkles and topped with rainbow buttercream',
    price: 140,
    image: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec',
    category: 'Special Occasions',
    stock: 15,
    featured: true
  },
  {
    id: '7',
    name: 'Chocolate Truffle Cupcakes',
    description: 'Dark chocolate cupcakes filled with chocolate ganache and topped with chocolate curls',
    price: 50,
    image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce',
    category: 'Cupcakes',
    stock: 25
  },
  {
    id: '8',
    name: 'Lemon Blueberry Cake',
    description: 'Zesty lemon cake with fresh blueberries and lemon cream cheese frosting',
    price: 135,
    image: 'https://images.unsplash.com/photo-1592861956120-e524fc739696',
    category: 'Classic Cakes',
    stock: 18
  }
];

export const sampleOrders: Order[] = [
  {
    id: 'ORD-123456',
    customer: {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+233 55 123 4567',
      address: 'Accra, Ghana'
    },
    items: [
      {
        productId: '1',
        productName: 'Jollof Rice',
        price: 50,
        quantity: 1
      },
      {
        productId: '7',
        productName: 'Kelewele',
        price: 20,
        quantity: 3
      }
    ],
    total: 70,
    date: '2023-09-15T10:30:00Z',
    status: 'delivered',
    payment: {
      type: 'momo',
      details: {
        phoneNumber: '+233 55 123 4567',
        transactionId: 'MOMO-12345'
      }
    }
  },
  {
    id: 'ORD-123457',
    customer: {
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+233 24 987 6543',
      address: 'Kumasi, Ghana'
    },
    items: [
      {
        productId: '3',
        productName: 'Fufu with Light Soup',
        price: 55,
        quantity: 1
      }
    ],
    total: 55,
    date: '2023-09-16T14:45:00Z',
    status: 'processing',
    payment: {
      type: 'cash'
    },
    specialInstructions: 'Please deliver to my office at 4pm'
  },
  {
    id: 'ORD-123458',
    customer: {
      name: 'Kwame Asante',
      email: 'kwame@example.com',
      phone: '+233 20 555 7777',
      address: 'Takoradi, Ghana'
    },
    items: [
      {
        productId: '6',
        productName: 'Kenkey with Fried Fish',
        price: 35,
        quantity: 1
      },
      {
        productId: '8',
        productName: 'Boiled Yam with Garden Egg Stew',
        price: 30,
        quantity: 6
      }
    ],
    total: 125,
    date: '2023-09-17T09:15:00Z',
    status: 'pending',
    payment: {
      type: 'momo',
      details: {
        phoneNumber: '+233 20 555 7777'
      }
    }
  },
  {
    id: 'ORD-123459',
    customer: {
      name: 'Abena Mensah',
      email: 'abena@example.com',
      phone: '+233 27 333 9999',
      address: 'Tema, Ghana'
    },
    items: [
      {
        productId: '2',
        productName: 'Waakye',
        price: 45,
        quantity: 1
      },
      {
        productId: '4',
        productName: 'Banku with Grilled Tilapia',
        price: 60,
        quantity: 1
      }
    ],
    total: 105,
    date: '2023-09-18T16:20:00Z',
    status: 'shipped',
    payment: {
      type: 'momo',
      details: {
        phoneNumber: '+233 27 333 9999',
        transactionId: 'MOMO-67890'
      }
    }
  },
  {
    id: 'ORD-123460',
    customer: {
      name: 'Kofi Boateng',
      email: 'kofi@example.com',
      phone: '+233 50 444 1111',
      address: 'Cape Coast, Ghana'
    },
    items: [
      {
        productId: '5',
        productName: 'Red Red',
        price: 40,
        quantity: 1
      },
      {
        productId: '7',
        productName: 'Kelewele',
        price: 20,
        quantity: 4
      }
    ],
    total: 100,
    date: '2023-09-19T11:05:00Z',
    status: 'pending',
    payment: {
      type: 'cash'
    },
    specialInstructions: 'Please deliver after 4pm'
  }
];
