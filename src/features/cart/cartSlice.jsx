import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        amount: 0,
        totalAmount: 0,
        totalPrice: 0,
    },
    reducers: {
        addToCart(state, action) {
            const item = action.payload;
            const existingItem = state.cart.find(cartItem => cartItem.id === item.id);

            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                state.cart.push({ ...item, quantity: item.quantity });
            }

            state.amount += 1;
            state.totalAmount += item.quantity;
            state.totalPrice += item.price * item.quantity;
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.cart.find(cartItem => cartItem.id === id);

            if (existingItem) {
                state.amount -= 1;
                state.totalAmount -= existingItem.quantity;
                state.totalPrice -= existingItem.price * existingItem.quantity;
                state.cart = state.cart.filter(cartItem => cartItem.id !== id);
            }
        }
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
