import axios from "axios"
import { useState } from "react"

export const SignupPage = () => {

    const [regData, setRegData] = useState({
        name: "", email: "", password: "", confirmPassword: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.post("http://localhost:8081/auth", regData)
        console.log(response.data);
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