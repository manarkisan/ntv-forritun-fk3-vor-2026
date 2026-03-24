import { renderHook, act } from '@testing-library/react';
import { CartProvider } from './context/CartContext.tsx';
import { useCart } from './context/useCart';
import type { Product } from '@/features/products/types';

const mockProductOne: Product = { id: "1", name: "test0", price: 10, quantity: 1};


test('Add Product to set quantity 2', () => {
    const { result } = renderHook(() => useCart(),{
        wrapper: CartProvider,
    });
    act(() => {
        result.current.addToCart(mockProductOne);
        result.current.addToCart(mockProductOne);
       
    })

    expect(result.current.items[0].quantity).toBe(2);
})
test('Add Product to set quantity 1', () => {
    const { result } = renderHook(() => useCart(),{
        wrapper: CartProvider,
    });
    act(() => {
        result.current.addToCart(mockProductOne);
    })

    expect(result.current.items[0].quantity).toBe(1);
})
test('Remove Product to set quantity to 0', () => {
  const { result } = renderHook(() => useCart(),{
        wrapper: CartProvider,
    });
     act(() => {
        result.current.addToCart(mockProductOne);
        result.current.removeItem(mockProductOne.id);
    })

    expect(result.current.items).toHaveLength(0);
})