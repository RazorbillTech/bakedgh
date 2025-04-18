import { Product, Order } from '@/types';

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Jollof Rice',
    description: 'A beloved West African rice dish cooked in a flavorful tomato-based sauce, served with fried plantains, salad, and chicken',
    price: 50,
    image: 'images/jollof.jpeg',
    category: 'Main Dishes',
    stock: 20,
    featured: true
  },
  {
    id: '2',
    name: 'Waakye',
    description: 'Traditional combination of rice and beans, with spaghetti, boiled eggs, fried plantains, shito, and assorted meats',
    price: 45,
    image: 'images/waakye.jpeg',
    category: 'Main Dishes',
    stock: 15
  },
  {
    id: '3',
    name: 'Fufu with Light Soup',
    description: 'Pounded cassava and plantain dough served with tomato-based soup and goat meat',
    price: 55,
    image: 'images/fufu.jpeg',
    category: 'Main Dishes',
    stock: 10,
    featured: true
  },
  {
    id: '4',
    name: 'Boiled Plantain with Garden Egg Stew',
    description: 'Slices of boiled plantain with stew made from garden eggs, tomatoes, and spices',
    price: 30,
    image: 'images/brodie.jpeg',
    category: 'Sides & Snacks',
    stock: 20
  },
  {
    id: '5',
    name: 'Agwa mo',
    description: 'Hearty bean stew cooked in palm oil, served with fried ripe plantains and gari',
    price: 40,
    image: 'images/rice.jpeg',
    category: 'Main Dishes',
    stock: 12
  },
  {
    id: '6',
    name: 'Tuo Zaafi',
    description: 'Fermented corn dough dumplings with fried fish, shito, and sliced onions',
    price: 35,
    image: 'images/tuo.jpeg',
    category: 'Main Dishes',
    stock: 15,
    featured: true
  },
  {
    id: '7',
    name: 'Kelewele',
    description: 'Spicy fried plantain cubes seasoned with ginger, garlic, and chili',
    price: 20,
    image: 'images/kelewele.png',
    category: 'Sides & Snacks',
    stock: 30
  },
  {
    id: '8',
    name: 'Boiled Plantain with Garden Egg Stew',
    description: 'Slices of boiled plantain with stew made from garden eggs, tomatoes, and spices',
    price: 30,
    image: 'images/brodie.jpeg',
    category: 'Sides & Snacks',
    stock: 20
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
