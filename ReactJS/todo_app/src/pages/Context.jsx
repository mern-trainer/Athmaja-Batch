import { useContext } from "react"
import { SampleContext } from "../App"

const Context = () => {
    const value = useContext(SampleContext)
    return <div>{value}</div>
}

export default Context