import { Product, Order } from '@/types';

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Chocolate Layer Cake',
    description: 'Rich chocolate sponge layered with ganache and buttercream frosting',
    price: 150,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
    category: 'Layer Cakes',
    stock: 20,
    featured: true
  },
  {
    id: '2',
    name: 'Vanilla Bean Cheesecake',
    description: 'Creamy vanilla cheesecake on a buttery graham cracker base',
    price: 120,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad',
    category: 'Cheesecakes',
    stock: 15
  },
  {
    id: '3',
    name: 'Red Velvet Dream',
    description: 'Classic red velvet cake with cream cheese frosting',
    price: 140,
    image: 'https://images.unsplash.com/photo-1586788680399-2935da75f521',
    category: 'Layer Cakes',
    stock: 10,
    featured: true
  },
  {
    id: '4',
    name: 'Lemon Drizzle Cake',
    description: 'Light sponge cake with zesty lemon glaze',
    price: 90,
    image: 'https://images.unsplash.com/photo-1560180474-e8563fd75bab',
    category: 'Loaf Cakes',
    stock: 20
  },
  {
    id: '5',
    name: 'Carrot Cake',
    description: 'Spiced carrot cake with walnuts and cream cheese frosting',
    price: 110,
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729',
    category: 'Layer Cakes',
    stock: 12
  },
  {
    id: '6',
    name: 'Blueberry Muffins',
    description: 'Fresh blueberry muffins with streusel topping',
    price: 45,
    image: 'https://images.unsplash.com/photo-1607478900766-efe13248b125',
    category: 'Pastries',
    stock: 30,
    featured: true
  },
  {
    id: '7',
    name: 'Strawberry Shortcake',
    description: 'Light vanilla sponge with fresh strawberries and cream',
    price: 130,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777',
    category: 'Layer Cakes',
    stock: 8
  },
  {
    id: '8',
    name: 'Chocolate Chip Cookies',
    description: 'Classic chocolate chip cookies, baked fresh daily',
    price: 25,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e',
    category: 'Cookies',
    stock: 50
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
        productName: 'Chocolate Layer Cake',
        price: 150,
        quantity: 1
      },
      {
        productId: '2',
        productName: 'Vanilla Bean Cheesecake',
        price: 120,
        quantity: 2
      }
    ],
    total: 390,
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
        productName: 'Red Velvet Dream',
        price: 140,
        quantity: 1
      }
    ],
    total: 140,
    date: '2023-09-16T14:45:00Z',
    status: 'processing',
    payment: {
      type: 'cash'
    },
    specialInstructions: 'Please add birthday message'
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
