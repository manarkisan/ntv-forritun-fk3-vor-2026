import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from './useLocalStorage';

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('returns initial value when nothing is in localStorage', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'default'));
    expect(result.current[0]).toBe('default');
  });

  it('returns persisted value when key already exists in localStorage', () => {
    localStorage.setItem('test-key', JSON.stringify('saved value'));
    const { result } = renderHook(() => useLocalStorage('test-key', 'default'));
    expect(result.current[0]).toBe('saved value');
  });

  it('updates the value when setter is called', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'default'));
    act(() => {
      result.current[1]('new value');
    });
    expect(result.current[0]).toBe('new value');
  });

  it('persists the new value to localStorage when setter is called', async () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'default'));
    act(() => {
      result.current[1]('new value');
    });
    expect(JSON.parse(localStorage.getItem('test-key')!)).toBe('new value');
  });
});