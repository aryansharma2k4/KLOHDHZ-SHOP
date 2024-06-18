import { createSlice } from '@reduxjs/toolkit';

// Helper function to save cart items to local storage
const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

// Initial state loaded from local storage or defaulting to an empty array
const initialState = {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || []
};

export const cartSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        addItemCart: (state, action) => {
            const exsistingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (exsistingItem) {
                exsistingItem.rating.count += 1;
            } else {
                state.cartItems.push(action.payload);
            }
            saveCartToLocalStorage(state.cartItems);
        },
        removeItemCart: (state, action) => {
            const idToRemove = action.payload.id;
            state.cartItems = state.cartItems.filter((item) => item.id !== idToRemove);
            saveCartToLocalStorage(state.cartItems);
        },
        addItemToCart: (state, action) => {
            const exsistingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (exsistingItem) {
                exsistingItem.rating.count += 1;
            }
            saveCartToLocalStorage(state.cartItems);
        },
        remItemToCart: (state, action) => {
            const exsistingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (exsistingItem) {
                exsistingItem.rating.count -= 1;
            }
            saveCartToLocalStorage(state.cartItems);
        }
    }
});

export const { addItemCart, removeItemCart, addItemToCart, remItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
