import { BrowserRouter, Route, Routes } from "react-router"
import { HomePage } from "./pages/HomePage"
import { SignupPage } from "./pages/SignupPage"
import { LoginPage } from "./pages/LoginPage"

export const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route path="" Component={HomePage} />
                <Route path="signup" Component={SignupPage} />
                <Route path="login" Component={LoginPage}/>
            </Route>
        </Routes>
    </BrowserRouter>
}