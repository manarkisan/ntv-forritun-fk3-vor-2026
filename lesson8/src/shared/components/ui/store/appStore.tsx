import { useAppStore } from "./appStoreState"


export function AppStore() {
  const productId = useAppStore((state) => state.productId)
  return <h1>{productId} added to cart :D</h1>
}

export function Controls() {
  const addToCart = useAppStore((state) => state.addToCart)
  return <button onClick={addToCart}>one up</button>
}


