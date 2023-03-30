import { Box } from "@mui/material";
import Button from '@mui/material/Button';

import './styles.css'

import { useAppSelector, useAppDispatch } from "@root/store";
import { selectCount, incrementBy, decrementBy, counterSlice } from '@store/counter'
import { ThemeToggle } from "@components/ThemeToggle/ThemeToggle";

export function App() {
    const counter = useAppSelector(selectCount)
    const dispatch = useAppDispatch()

    return (
        <Box
            sx={{
                bgcolor: 'background.default',
                color: 'text.primary',
            }}
        >
            <ThemeToggle />
            <div>Credentalist app</div>
            <div>{counter}</div>
            <Button variant="contained" onClick={() => dispatch(counterSlice.actions.increment())}>Inc</Button>
            <Button variant="outlined" onClick={() => dispatch(counterSlice.actions.decrement())}>Dec</Button>
            <div><br/></div>
            <Button variant="contained" onClick={() => dispatch(incrementBy(1))}>AsyncInc</Button>
            <Button variant="outlined" onClick={() => dispatch(decrementBy(1))}>AsyncDec</Button>
        </Box>
    );
}
