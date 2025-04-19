import { CounterProvider } from "./context/CounterContext"
import Router from "./Routes"

const App = () => {
    return <CounterProvider>
        <Router />
    </CounterProvider>
}

export default App