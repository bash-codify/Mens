import { create } from 'zustand';

export const CartToggleClose = create((set) => ({
  cartClose: false,
 
  setCartClose: () => set((state) => ({ cartClose: state.cartClose })),
  
}))
export const CartToggleOpen = create((set) => ({
  cartOpen: true,
 
  setCartOpen: () => set((state) => ({ cartOpen: state.cartOpen })),
  
}))