import { Button, ButtonGroup, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { decrement, increment } from "./counterSlice";


export default function ContactPage() {
    const dispatch = useAppDispatch();
    const { data, title } = useAppSelector(state => state.counter)

    return (
        <>
            <Typography variant="h2">{title}</Typography>
            <Typography variant="h5">{data}</Typography>
            <ButtonGroup>
                <Button variant="contained" onClick={() => dispatch(decrement(1))} color="error">Decrement</Button>
                <Button variant="contained" onClick={() => dispatch(increment(1))} color="primary">Increment</Button>
                <Button variant="contained" onClick={() => dispatch(increment(5))} color="secondary">Increment by 5</Button>
            </ButtonGroup>
        </>
    )
}