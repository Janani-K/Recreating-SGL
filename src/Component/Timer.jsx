import { Typography } from "@mui/material"
import { useEffect, useState } from "react";

const Timer = () => {
    const [counter, setCounter] = useState(60);

    useEffect(() => {
        counter > 0 ? setTimeout(() => setCounter(counter - 1), 1000) : setCounter(60);
    }, [counter])
    return (
        <Typography variant="body2" fontSize='11px'>next: {counter}</Typography>
    )
}

export default Timer;