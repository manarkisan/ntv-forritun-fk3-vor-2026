import { create } from 'zustand'

type AppStoreState = {
  productId: number,
  addToCart: () => void
  removeItem: () => void
}

export const useAppStore = create<AppStoreState>((set) => ({
  productId: 0,
  addToCart: () => set((state) => ({ productId: state.productId + 1 })),
  removeItem: () => set({ productId: -1 })
}))