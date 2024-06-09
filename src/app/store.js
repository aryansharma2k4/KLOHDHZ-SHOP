import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../assets/features/cartSlice'

export const store = configureStore({
    reducer: cartReducer
})