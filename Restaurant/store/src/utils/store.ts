import {CartType, ActionType} from '@/types/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const INITIAL_STATE = {
    products: [],
    totalItems: 0,
    totalPrice: 0
}

export const useCartStore = create(persist<CartType & ActionType>((set, get) => ({
    products: INITIAL_STATE.products,
    totalItems: INITIAL_STATE.totalItems,
    totalPrice: INITIAL_STATE.totalPrice,
    addToCart(item) {
        const products = get().products;
        const productInState = products.find(
            (product) => product.id === item.id
        );

        if (productInState) {
            const updatedProducts = products.map((product) => 
                product.id === productInState.id 
                    ? { 
                        ...product, 
                        quantity: item.quantity + product.quantity,
                        price: item.price + product.price
                      } 
                    : item
            );
            set((state) => ({
                products: updatedProducts,
                totalItems: state.totalItems + item.quantity,
                totalPrice: state.totalPrice + item.price,
            }));
        } else {
            set((state) => ({
                products: [...state.products, item],
                totalItems: state.totalItems + item.quantity,
                totalPrice: state.totalPrice + item.price,
            }));
        }
    },
    removeFromCart(item) {
        const products = get().products;
        const productInState = products.find(
            (product) => product.id === item.id
        );

        if (!productInState) return;

        if (productInState.quantity >1) {
            const updatedProducts = products.map((product) =>
                product.id === productInState.id
                    ? {
                        ...product,
                        quantity: product.quantity - 1,
                        price: product.price - item.price / item.quantity
                        }
                    : product
            );
            set((state) => ({
                products: updatedProducts,
                totalItems: state.totalItems - 1,
                totalPrice: state.totalPrice - item.price / item.quantity,
            }));
        } else {
            set((state) => ({
                products: state.products.filter((product) => product.id !== item.id),
                totalItems: state.totalItems - item.quantity,
                totalPrice: state.totalPrice - item.price,
            }));
        }
    },
}), {name: "cart", skipHydration: true})); 