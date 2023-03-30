import { createAction, createSlice, PayloadAction} from '@reduxjs/toolkit'
import { RootState } from '@store/init'

// Define a type for the slice state
interface CounterState {
    value: number
}

// Define the initial state using that type
const initialState: CounterState = {
    value: 0
}

export const incrementBy = createAction<number>('incrementBy')
export const decrementBy = createAction<number>('decrementBy')

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            // @ts-ignore
            state.value += 1
        },
        decrement: state => {
            // @ts-ignore
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            // @ts-ignore
            state.value += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(incrementBy, (state, action) => {
            // @ts-ignore
            state.value += action.payload
            return state
        })
        builder.addCase(decrementBy, (state, action) => {
            // @ts-ignore
            state.value -= action.payload
            return state
        })
    },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
// @ts-ignore
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer