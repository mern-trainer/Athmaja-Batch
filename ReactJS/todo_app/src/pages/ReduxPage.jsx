import { useDispatch, useSelector } from "react-redux"
import { toggleName } from "../Redux/sample.slice"
import { increment } from "../Redux/counter.slice"

const ReduxPage = () => {

    const { age, name } = useSelector((state) => state.sample)
    const { count } = useSelector((state) => state.counter)

    const dispatch = useDispatch()

    const handleClick = () => {
        // dispatch(toggleName(name == "Alex" ? "Harsha" : "Alex"))
        dispatch(increment({ num: 20 }))
    }

    return <div>
        <h1>Redux Page</h1>
        <p>Count: {count}</p>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <button onClick={handleClick}>Toggle Name</button>
    </div>
}

export default ReduxPage