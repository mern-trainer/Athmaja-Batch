import { createRoot } from "react-dom/client"
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import { ToastContainer } from "react-toastify"
import { Provider } from "react-redux"
import store from "./Redux/store"

createRoot(document.getElementById("root")).render(<Provider store={store}>
    <App />
    <ToastContainer autoClose="2000" position="bottom-right"/>
</Provider>)