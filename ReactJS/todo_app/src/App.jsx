import { createContext } from "react"
import Router from "./Routes"

export const SampleContext = createContext()

const App = () => {
    return <SampleContext.Provider value="Hi">
        <Router />
    </SampleContext.Provider>
}

export default App