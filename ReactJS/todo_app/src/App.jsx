import { BrowserRouter, Route, Routes } from "react-router"
import TodoPage from "./pages/TodoPage"
import Header from "./components/Header"
import DynamicRoute from "./pages/DynamicRoute"

const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<div><Header /><h1>Home Page</h1></div>} />
            <Route path="/todo" Component={TodoPage} />
            <Route path="/dynamic/:id?" Component={DynamicRoute} />
            <Route path="*" element={<div><Header /><h1>404 | Page Not Found</h1></div>} />
        </Routes>
    </BrowserRouter>
}

export default App