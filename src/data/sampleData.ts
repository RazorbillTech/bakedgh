import { Product, Order } from '@/types';

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Jollof Rice',
    description: 'A beloved West African rice dish cooked in a flavorful tomato-based sauce, served with fried plantains, salad, and chicken',
    price: 50,
    image: 'https://images.unsplash.com/photo-1624154504737-c0b54715b4dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Main Dishes',
    stock: 20,
    featured: true
  },
  {
    id: '2',
    name: 'Waakye',
    description: 'Traditional combination of rice and beans, with spaghetti, boiled eggs, fried plantains, shito, and assorted meats',
    price: 45,
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8444?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Main Dishes',
    stock: 15
  },
  {
    id: '3',
    name: 'Fufu with Light Soup',
    description: 'Pounded cassava and plantain dough served with tomato-based soup and goat meat',
    price: 55,
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Main Dishes',
    stock: 10,
    featured: true
  },
  {
    id: '4',
    name: 'Banku with Grilled Tilapia',
    description: 'Fermented corn and cassava dough balls with spicy grilled tilapia and pepper sauce',
    price: 60,
    image: 'https://images.unsplash.com/photo-1639324973125-0d7fdf306d5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Main Dishes',
    stock: 8
  },
  {
    id: '5',
    name: 'Red Red',
    description: 'Hearty bean stew cooked in palm oil, served with fried ripe plantains and gari',
    price: 40,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Main Dishes',
    stock: 12
  },
  {
    id: '6',
    name: 'Kenkey with Fried Fish',
    description: 'Fermented corn dough dumplings with fried fish, shito, and sliced onions',
    price: 35,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Main Dishes',
    stock: 15,
    featured: true
  },
  {
    id: '7',
    name: 'Kelewele',
    description: 'Spicy fried plantain cubes seasoned with ginger, garlic, and chili',
    price: 20,
    image: 'https://images.unsplash.com/photo-1543340904-0b1d843bccda?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'Sides & Snacks',
    stock: 30
  },
  {
    id: '8',
    name: 'Boiled Yam with Garden Egg Stew',
    description: 'Slices of boiled yam with stew made from garden eggs, tomatoes, and spices',
    price: 30,
    image: 'https://images.unsplash.com/photo-1604329756574-bda01e1b3745?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
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
