import { useState } from "react"
import { api } from "../axios"
import { cookie } from "../lib/cookie"
import { toast } from "react-toastify"
import { useNavigate } from "react-router"

export const SignupPage = () => {

    const [regData, setRegData] = useState({
        name: "", email: "", password: "", confirmPassword: ""
    })
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data, status } = await api.post("/auth", regData)
            if (status == 201) {
                toast.success("You have successfully signed up")
                return navigate("/login")
            }
            return toast.error(data.message)
        } catch (error) {
            return toast.error(error.response?.data.message || error.message || "Something went wrong")  
        }
    }

    const handleChange = e => {
        const { name, value } = e.target
        setRegData({...regData, [name]: value})
    }

    return <div>
        <div className="d-flex align-items-center flex-column">
            <h2>SIGN UP</h2>
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-2 w-100" style={{maxWidth: "450px"}}>
                <label>Name</label>
                <input onChange={handleChange} name="name" value={regData.name} type="text" />
                <label>Email</label>
                <input onChange={handleChange} name="email" value={regData.email} type="email" />
                <label>Password</label>
                <input onChange={handleChange} name="password" value={regData.password} type="password" />
                <label>Confirm Password</label>
                <input onChange={handleChange} name="confirmPassword" value={regData.confirmPassword} type="password" />
                <button className="btn btn-secondary">Sign up</button>
            </form>
        </div>
    </div>
}