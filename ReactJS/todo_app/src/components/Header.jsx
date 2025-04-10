import { Link, useNavigate } from "react-router"

// Link Component -> Navigation b/w pages
// useNavigate -> for navigation -> Conditional navigations

const Header = () => {

    const navigate = useNavigate()
    const a = false

    const goTo = path => {
        if (!a) {
            navigate(path)
        }
    }

    return <div className="d-flex justify-content-center gap-4">
        {/* <Link to="/">Home</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/dfgdfg">404</Link> */}
        <button onClick={() => goTo("/")}>Home</button>
        <button onClick={() => goTo("/todo")}>Todo</button>
        <button onClick={() => goTo("/sdf")}>404</button>
    </div>
}

export default Header