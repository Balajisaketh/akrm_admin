import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '../redux/Store'

// Define a type for the slice state
interface CounterState {
  value:any
}

// Define the initial state using that type
const initialState: CounterState = {
  value: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    userdata:(state,action)=>{
        const { bookingid} = action.payload;
        console.log(bookingid,"here in redux!");
        const productIndex = state.value.findIndex((user:any) => user.bookingid ===bookingid);
        if (productIndex == -1) {
         
            console.log(action.payload,"i m action")
            state.value.push(action.payload)
           
        }
       
    }
    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const {userdata } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type


export default counterSlice.reducer