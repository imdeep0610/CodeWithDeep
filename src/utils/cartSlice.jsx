import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        //mutating(modifying) the state here 
        addItem:(state,action)=>{
           state.items.push(action.payload);
        },
        /*but earlier we are not allowed to mutate the state in Vanilla Redux(older) , we copied the state in new variable
        newState=[...state]
        newState.items.push(action.payload);
        return newState (returning was important)*/

        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0; //this is the righy way to mutate the state or even return empty array return {items : []}
        }
    }
})

export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;