import { create} from 'zustand'

interface AppStore {
    count: number;
    increment: () => void
    decrement: () => void
    reset: () => void
}

export const useAppStore = create<AppStore>((set) => ({
    count: Number,
    items: [],
    increment: () => set((state) => ({}))
    decrement: () => set((state) => ({}))
}));