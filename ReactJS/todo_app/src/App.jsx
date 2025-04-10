import { BrowserRouter, Route, Routes } from "react-router"
import TodoPage from "./pages/TodoPage"
import Header from "./components/Header"

const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<div><Header /><h1>Home Page</h1></div>} />
            <Route path="/todo" Component={TodoPage} />
            <Route path="*" element={<div><Header /><h1>404 | Page Not Found</h1></div>} />
        </Routes>
    </BrowserRouter>
}

export default App