import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  image: string;
  title: string;
  price: string;
  offers: string;
  brand: string;
  rating: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

// Helper function to save the cart to localStorage
const saveCartToLocalStorage = (state: CartState) => {
  try {
    localStorage.setItem('cart', JSON.stringify(state)); // Save cart to localStorage
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

// Load cart from localStorage on initial state
const loadCartFromLocalStorage = (): CartState => {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    return JSON.parse(savedCart); // Return parsed cart data from localStorage
  }
  return { items: [] }; // Return default state if no cart in localStorage
};

// Initial state, loading from localStorage if available
const initialState: CartState = loadCartFromLocalStorage();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push({ ...action.payload, quantity: action.payload.quantity });
      }
      saveCartToLocalStorage(state); // Save updated state to localStorage
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      saveCartToLocalStorage(state); // Save updated state to localStorage
    },
    clearCart: (state) => {
      state.items = [];
      saveCartToLocalStorage(state); // Save empty cart to localStorage
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1; // Increase the quantity by 1
        saveCartToLocalStorage(state); // Save updated state to localStorage
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1; // Decrease the quantity by 1 (but not below 1)
        saveCartToLocalStorage(state); // Save updated state to localStorage
      }
    },
  },
});

export const { addItem, removeItem, clearCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
