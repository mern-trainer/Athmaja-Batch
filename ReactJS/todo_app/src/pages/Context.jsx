import { useCounter } from "../context/CounterContext"

const Context = () => {
    const { counter, setCounter} = useCounter()
    return <div>
        {counter}
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
}

export default Context