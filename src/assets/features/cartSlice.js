import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: []
}

export const cartSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        addItemCart: (state, action) => {
            const exsistingItem = state.cartItems.find(item => item.id === action.payload.id)
            if(exsistingItem){
                exsistingItem.rating.count+=1
            }
            else{
                state.cartItems.push(action.payload)
            }
            
        },
        removeItemCart: (state, action) => {
            const idToRemove = action.payload.id
            console.log(idToRemove);
            state.cartItems = state.cartItems.filter((item) => item.id!==idToRemove)
        },
        addItemToCart: (state,action) => {
            const exsistingItem = state.cartItems.find(item => item.id === action.payload.id)
            exsistingItem.rating.count += 1
        },
        remItemToCart: (state, action) => {
            const exsistingItem = state.cartItems.find(item => item.id===action.payload.id)
            exsistingItem.rating.count -= 1
        }
    }
})

export const {addItemCart, removeItemCart, addItemToCart, remItemToCart} = cartSlice.actions

export default cartSlice.reducer