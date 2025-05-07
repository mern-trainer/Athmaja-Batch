import { useState } from "react"
import { api } from "../axios"
import { cookie } from "../lib/cookie"
import { toast } from "react-toastify"
import { useNavigate } from "react-router"

export const LoginPage = () => {

    const [loginData, setLoginData] = useState({
        email: "", password: ""
    })
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await api.get("/auth", {
                params: loginData
            })
            cookie.set(data.token)
            return navigate("/")
        } catch (err) {
            return toast.error(err.response?.data.message || err.message || "Something went wrong")
        }
    }

    const handleChange = e => {
        const { name, value } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    return <div>
        <div className="d-flex align-items-center flex-column">
            <h2>SIGN UP</h2>
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-2 w-100" style={{ maxWidth: "450px" }}>
                <label>Email</label>
                <input onChange={handleChange} name="email" value={loginData.email} type="email" />
                <label>Password</label>
                <input onChange={handleChange} name="password" value={loginData.password} type="password" />
                <button className="btn btn-secondary">Sign In</button>
            </form>
        </div>
    </div>
}