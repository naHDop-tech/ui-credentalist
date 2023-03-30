import Button from '@mui/material/Button';

import './styles.css'

import { useAppSelector, useAppDispatch } from "@root/store";
import { selectCount, incrementBy, decrementBy, counterSlice } from '@store/counter'
import { Layout } from "@components/Layout/Layout";

export function App() {
    const counter = useAppSelector(selectCount)
    const dispatch = useAppDispatch()

    return (
        <Layout>
            <div>Credentalist app</div>
            <div>{counter}</div>
            <Button variant="contained" onClick={() => dispatch(counterSlice.actions.increment())}>Inc</Button>
            <Button variant="outlined" onClick={() => dispatch(counterSlice.actions.decrement())}>Dec</Button>
            <div><hr/></div>
            <Button variant="contained" onClick={() => dispatch(incrementBy(1))}>AsyncInc</Button>
            <Button variant="outlined" onClick={() => dispatch(decrementBy(1))}>AsyncDec</Button>
        </Layout>
    );
}
