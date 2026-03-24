import { create } from 'zustand'

type AppStoreState = {
  productId: number,
  addToCart: () => void
  removeFromCart: () => void
}

export const useAppStore = create<AppStoreState>((set) => ({
  productId: 0,
  addToCart: () => set((state) => ({ productId: state.productId + 1 })),
  removeFromCart: () => set({ productId: 0 })
}))