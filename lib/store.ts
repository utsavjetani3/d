import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string | number;
  title: string;
  price: string | number;
  category: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string | number) => void;
  updateQuantity: (id: string | number, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((i) => i.id === item.id);
        if (existingItem) {
          set({
            items: currentItems.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          });
        } else {
          set({ items: [...currentItems, { ...item, quantity: 1 }] });
        }
      },
      removeItem: (id) =>
        set({ items: get().items.filter((i) => i.id !== id) }),
      updateQuantity: (id, quantity) =>
        set({
          items: get().items.map((i) =>
            i.id === id ? { ...i, quantity: Math.max(1, quantity) } : i
          ),
        }),
      clearCart: () => set({ items: [] }),
      getTotal: () => {
        return get().items.reduce((acc, item) => {
          const price = typeof item.price === 'string' 
            ? parseFloat(item.price.replace('$', '')) 
            : item.price;
          return acc + price * item.quantity;
        }, 0);
      },
    }),
    {
      name: 'datavault-cart',
    }
  )
);
export interface User {
  name: string;
  phone: string;
  isAdmin: boolean;
}

interface UserStore {
  user: User | null;
  login: (name: string, phone: string) => void;
  logout: () => void;
}

export const useUser = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      login: (name, phone) => {
        const isAdmin = phone === "3344334434";
        set({ user: { name, phone, isAdmin } });
      },
      logout: () => set({ user: null }),
    }),
    {
      name: 'datavault-user',
    }
  )
);
