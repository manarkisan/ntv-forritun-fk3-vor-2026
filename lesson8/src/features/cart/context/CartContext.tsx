import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import type { Product } from "@/features/products/types";
import type { CartItem } from "../types";
import { useAppStore } from "@/shared/components/ui/store/appStore";

type CartContextValue = {
  items: CartItem[];
  addToCart: (product: Product) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

// export const AppStoreState = () => {
//   // const productId = useAppStore((state) => state.productId);
//   // const addToCart = useAppStore((state) => state.addToCart);
//   // const removeFromCart = useAppStore((state) => state.removeFromCart);
//   const { productId, addToCart, removeFromCart } = useAppStore();
//   return (
//     <div>
      
//       <p>items: {productId}</p>
//       <button onClick={addToCart}>add item</button>
//       <button onCanPlay={removeFromCart}>remove item</button>
//     </div>
//   );
// };

export function AppStoreState({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((product: Product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setItems((prev) =>
      prev
        .map((i) => (i.product.id === productId ? { ...i, quantity } : i))
        .filter((i) => i.quantity > 0),
    );
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  }, []);

  return (
    <CartContext.Provider
      value={{ items, addToCart, updateQuantity, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
