import { BrowserRouter, Route, Routes } from "react-router"
import TodoPage from "./pages/TodoPage"
import Header from "./components/Header"
import DynamicRoute from "./pages/DynamicRoute"
import SingleTodo from "./pages/SingleTodo"
import ParentComponent from "./pages/ParentComponent"

//props -> Attributes -> Properties

const App = () => {
    return <BrowserRouter>
        <Routes>
            {/* <Route path="/" element={<div><Header /><h1>Home Page</h1></div>} />
            <Route path="/todo" Component={TodoPage} />
            <Route path="/todo/view" Component={SingleTodo} />
            <Route path="/dynamic/:id?" Component={DynamicRoute} />
            <Route path="*" element={<div><Header /><h1>404 | Page Not Found</h1></div>} /> */}
            <Route path="/">
                <Route  path="" element={<div><Header /><h1>Home Page</h1></div>} />
                <Route path="todo">
                    <Route path="" Component={TodoPage} />
                    <Route path="view" Component={SingleTodo} />
                </Route>
                <Route path="/props" Component={ParentComponent} />
            </Route>
            <Route path="*" element={<div><Header /><h1>404 | Page Not Found</h1></div>} />
        </Routes>
    </BrowserRouter>
}

export default App