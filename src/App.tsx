import './styles.css'
import { useAppSelector, useAppDispatch } from "@root/store";

import { selectCount, increment, decrement } from '@store/counter'

export function App() {
    const counter = useAppSelector(selectCount)
    const dispatch = useAppDispatch()
    return (
        <>
            <div>Credentalist app</div>
            <div>{counter.value}</div>
            <button onClick={() => dispatch(increment)}>Inc</button>
            <button onClick={() => dispatch(decrement)}>Dec</button>
        </>
    );
}
