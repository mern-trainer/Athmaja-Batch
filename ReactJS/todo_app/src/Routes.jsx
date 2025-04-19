import { BrowserRouter, Route, Routes } from "react-router"
import Header from "./components/Header"
import TodoPage from "./pages/TodoPage"
import SingleTodo from "./pages/SingleTodo"
import ProductListing from "./pages/ProductListing"
import ParentComponent from "./pages/ParentComponent"
import Context from "./pages/Context"

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route path="/context" Component={Context} />
                <Route  path="" element={<div><Header /><h1>Home Page</h1></div>} />
                <Route path="todo">
                    <Route path="" Component={TodoPage} />
                    <Route path="view" Component={SingleTodo} />
                </Route>
                <Route path="products" Component={ProductListing} />
                <Route path="/props" Component={ParentComponent} />
            </Route>
            <Route path="*" element={<div><Header /><h1>404 | Page Not Found</h1></div>} />
        </Routes>
    </BrowserRouter>
} 

export default Router