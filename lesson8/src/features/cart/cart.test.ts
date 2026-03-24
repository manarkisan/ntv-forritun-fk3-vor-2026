import type { Product } from '@/features/products/types'
import { useCart } from './context/useCart';

test('1 + 1 equals 2', () => {
  expect(1 + 1).toBe(2);
});

const mockProduct: Product = { id: "1", name: "test", price: 10 };

test('Add Product to set wuantity', () => {
  const { result } = renderHook(() => useCart(),{
    wrapper: CartProvider,
  });
})

function renderHook(arg0: () => any, p0: { wrapper: any; }): { result: any; } {
  throw new Error('Function not implemented.');
}
