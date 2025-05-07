import { createRoot } from 'react-dom/client'
import { App } from './App'
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import { Fragment } from 'react'
import { ToastContainer } from "react-toastify"

const root = createRoot(document.getElementById("root"))
root.render(<Fragment>
    <App />
    <ToastContainer />
</Fragment>)
