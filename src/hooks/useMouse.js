import {useState} from "react";

export function useMouse() {

    const [pos, setPos] = useState({x: 0 ,y: 0});

    const handleMouseMove = (event) => {
        setPos({
            x: event.clientX,
            y: event.clientY
        });
    }

    return {
        pos,
        handleMouseMove
    }
}