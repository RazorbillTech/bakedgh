
import { Product, Order } from '@/types';

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Chocolate Fudge Cake',
    description: 'Rich chocolate cake with a decadent fudge frosting',
    price: 150,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Cakes',
    stock: 10,
    featured: true
  },
  {
    id: '2',
    name: 'Red Velvet Cake',
    description: 'Classic red velvet cake with cream cheese frosting',
    price: 170,
    image: 'https://images.unsplash.com/photo-1586788680434-30d324626f4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Cakes',
    stock: 8
  },
  {
    id: '3',
    name: 'Vanilla Birthday Cake',
    description: 'Light vanilla sponge with buttercream and sprinkles',
    price: 120,
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Cakes',
    stock: 15,
    featured: true
  },
  {
    id: '4',
    name: 'Carrot Cake',
    description: 'Moist carrot cake with cream cheese frosting and walnuts',
    price: 140,
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Cakes',
    stock: 7
  },
  {
    id: '5',
    name: 'Lemon Drizzle Cake',
    description: 'Zesty lemon cake with a tangy lemon drizzle',
    price: 130,
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Cakes',
    stock: 9
  },
  {
    id: '6',
    name: 'Strawberry Cheesecake',
    description: 'Creamy cheesecake with fresh strawberry topping',
    price: 180,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Cheesecakes',
    stock: 6,
    featured: true
  },
  {
    id: '7',
    name: 'Chocolate Cupcakes',
    description: 'Moist chocolate cupcakes with chocolate buttercream',
    price: 25,
    image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Cupcakes',
    stock: 24
  },
  {
    id: '8',
    name: 'Vanilla Cupcakes',
    description: 'Classic vanilla cupcakes with colorful sprinkles',
    price: 20,
    image: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Cupcakes',
    stock: 36
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
        productName: 'Chocolate Fudge Cake',
        price: 150,
        quantity: 1
      },
      {
        productId: '7',
        productName: 'Chocolate Cupcakes',
        price: 25,
        quantity: 3
      }
    ],
    total: 225,
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
        productName: 'Vanilla Birthday Cake',
        price: 120,
        quantity: 1
      }
    ],
    total: 120,
    date: '2023-09-16T14:45:00Z',
    status: 'processing',
    payment: {
      type: 'cash'
    },
    specialInstructions: 'Please write "Happy Birthday Emma" on the cake'
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
        productName: 'Strawberry Cheesecake',
        price: 180,
        quantity: 1
      },
      {
        productId: '8',
        productName: 'Vanilla Cupcakes',
        price: 20,
        quantity: 6
      }
    ],
    total: 300,
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
        productName: 'Red Velvet Cake',
        price: 170,
        quantity: 1
      },
      {
        productId: '4',
        productName: 'Carrot Cake',
        price: 140,
        quantity: 1
      }
    ],
    total: 310,
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
        productName: 'Lemon Drizzle Cake',
        price: 130,
        quantity: 1
      },
      {
        productId: '7',
        productName: 'Chocolate Cupcakes',
        price: 25,
        quantity: 4
      }
    ],
    total: 230,
    date: '2023-09-19T11:05:00Z',
    status: 'pending',
    payment: {
      type: 'cash'
    },
    specialInstructions: 'Please deliver after 4pm'
  }
];
