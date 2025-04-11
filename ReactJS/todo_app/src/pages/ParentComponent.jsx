import { useState } from "react"
import ChildComponent from "./ChildComponent"

const ParentComponent = () => { // parent component
    const [counter, setCounter] = useState(0)
    return <div>
        <button onClick={() => setCounter(counter + 1)}>Increment From Parent</button>
        <ChildComponent counter={counter} setCounter={setCounter}/> {/* child component */}
    </div>
}

export default ParentComponent