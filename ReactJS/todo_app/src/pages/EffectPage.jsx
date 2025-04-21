// useEffect -> Life cycle handle
// mounting -> called when the component is first rendered
// updating -> called when the component is updated
// unmounting -> called when the component is removed from the DOM -> cleanup function

import { useEffect, useState } from "react"

export const EffectPage = () => {

    const [counter, setCounter] = useState(0)
    const [timer, setTimer] = useState(0)

    // useEffect(() => {
    //     console.log("Component mounted")
    // }, []) // mounting

    // useEffect(() => {
    //     console.log(counter)
    // }, [counter]) // updating

    // useEffect(() => {
    //     console.log("Component updated");
    //     return () => {
    //         console.log("Component unmounted");
    //     }
    // }, [counter]) // updating and unmounting

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTimer(state => state + 1)
    //     }, 1000)
    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, [counter]) // updating

    return <div>
        <h2>useEffect Hook</h2>
        <div>{counter} - {timer}</div>
        <button className="btn btn-success" onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
}