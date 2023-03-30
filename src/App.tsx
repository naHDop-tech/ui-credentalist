import './styles.css'

import { useAppSelector, useAppDispatch } from "@root/store";
import { selectCount, increment, decrement, incrementBy, decrementBy } from '@store/counter'

export function App() {
    const counter = useAppSelector(selectCount)
    const dispatch = useAppDispatch()

    return (
        <>
            <div>Credentalist app</div>
            <div>{counter}</div>
            <button onClick={() => dispatch(increment())}>Inc</button>
            <button onClick={() => dispatch(decrement())}>Dec</button>
            <div><br/></div>
            <button onClick={() => dispatch(incrementBy(1))}>AsyncInc</button>
            <button onClick={() => dispatch(decrementBy(1))}>AsyncDec</button>
        </>
    );
}
