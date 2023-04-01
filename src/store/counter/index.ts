import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '@store/init'

// Define a type for the slice state
interface CounterState {
  value: number
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
}

export const incrementBy = createAction<number>('incrementBy')
export const decrementBy = createAction<number>('decrementBy')

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: CounterState) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state: CounterState) => {
      state.value -= 1
    },
    incrementByAmount: (state: CounterState, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementBy, (state: CounterState, action) => {
      state.value += action.payload
      return state
    })
    builder.addCase(decrementBy, (state: CounterState, action) => {
      state.value -= action.payload
      return state
    })
  },
})

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer
