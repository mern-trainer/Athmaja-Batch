import { useContext } from "react"
import { SampleContext } from "../App"

const Context = () => {
    const { counter, setCounter } = useContext(SampleContext)
    return <div>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
}

export default Context