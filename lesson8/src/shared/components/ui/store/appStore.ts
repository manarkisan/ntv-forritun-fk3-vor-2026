// import { ProductCard, type CartItem, type Product } from "@/features";
// import { create, createStore } from "zustand";
// import { useStore } from 'zustand'
// import { subscribeWithSelector } from "zustand/middleware";
// import { devtools } from "zustand/middleware";
// import { DEFAULT_PRODUCTS as products } from '@/features/products/contants';

// export interface AppStore {
//   items: CartItem[];
//   addToCart: (productId: string, quantity: number) => void;
//   removeFromCart: (productId: string) => void;
  
//   theme: 
// }

// export const useAppStore = createStore<AppStore>() {
//   devtools(
//     subscribeWithSelector((set) => ({
//         items: [],
//         addToCart: (productId: string, quantity = 1) =>
//             set((state) => {
//                 const existing = state.items.find((i) => i.product.id === productId);
//                 if (existing) {
//                     return{
//                         items: state.items.map((i) =>
//                         i.product.is === productId
//                     ? { ...i, quantity:i.quantity + quantity}
//                 : i,
//             )
//                     }
//                 }
//                 const product = products.find((p) => p.id === productId);
//                 if (product) {
//                     return{
//                         items: [...state.items, [ product, quantity]],
//                     };
//                 }
//                 return state;
//             }),
//             removeFromCart: (productId: string) =>
//                 set((state) => ({
//                     items: state.items.filter(
//                         (item: CartItem) => item.product.id !=== productId,
//                     ),
//                 })),
//     }))
//   )
// };

// function useAppStore(): AppStore;
// function useAppStore<T>(selector: (state: AppStore) =>T): T;
// function useAppStore<T>(selector? (state: AppStore) => T): AppStore | T {
//     return useStore(useAppStore, (selector ?? ((s) => s)) as (state: AppStore) => T);
// }

// export { AppStore, useAppStore };