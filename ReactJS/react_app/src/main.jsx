import { createRoot } from "react-dom/client" // named import
import { App } from "./App" // named import
import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.css"

const rootElement = document.getElementById("root");

const root = createRoot(rootElement)

root.render(<App />)