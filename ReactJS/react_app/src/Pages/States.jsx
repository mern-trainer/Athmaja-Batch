// states -> Object that stores data.
// Hooks -> Functions that let you use state and other React features without writing a class
// useState() -> A hook that lets you add React state to a function component

import { useState } from "react";

const States = () => {
    
    // let a = 10 // render issues
    const [counter, setCounter] = useState(20)
    const [counters, setCounters] = useState({ one: 0, two: 0 })

    // const updateA = () => {
    //     a++
    //     console.log(a);
    // }
    return <div className="d-flex justify-content-center align-items-center mt-5 flex-column">
        {/* <div>{a}</div> */}
        <div>{counter}</div>
        <div>
            <div>1: {counters.one}</div>
            <div>2: {counters.two}</div>
        </div>
        <button className="btn btn-success mt-4" onClick={() => setCounter(counter + 1)}>Update State</button>
        <button className="btn btn-success mt-4" onClick={() => setCounters({...counters, one: counters.one + 1})}>Update 1</button>
        <button className="btn btn-success mt-4" onClick={() => setCounters({...counters, two: counters.two + 1})}>Update 2</button>
    </div>
}

export default States