import { createContext } from 'react';
import type { Product } from '@/features/products/types';
import type { CartItem } from '../types';

export type CartContextValue = {
  removeFromCart(mockProduct: Product): unknown;
  items: CartItem[];
  addToCart: (product: Product) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
};

export const CartContext = createContext<CartContextValue | null>(null);