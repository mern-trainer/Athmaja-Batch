import { useState } from "react"
import { toast } from "react-toastify"

// formik -> form handling library

export const FormHandling = () => {

    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        for (const key in formData) {
            if (formData[key] == "") {
                return toast.error(`${key} is required`)
            }
        }
        if(formData.name.length < 4 || formData.name.length > 20) {
            return toast.error("Name should be between 4 and 20 characters")
        }
        if (formData.username.length < 4 || formData.username.length > 20) {
            return toast.error("Username should be between 4 and 20 characters")
        }
        if (!formData.email.includes("@") || !formData.email.includes(".")) {
            return toast.error("Email should be valid")
        }
        if(formData.password.length < 8 || formData.password.length > 16) {
            return toast.error("Password should be between 8 and 16 characters")
        }
        if(formData.password !== formData.confirmPassword) {
            return toast.error("Password and Confirm Password should be same")
        }
        toast.success("Form submitted successfully")
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={formData.name} type="text" name="name" placeholder="Enter Name" />
            <input onChange={handleChange} value={formData.username} type="text" name="username" placeholder="Enter Username" />
            <input onChange={handleChange} value={formData.email} type="text" name="email" placeholder="Enter Email" />
            <input onChange={handleChange} value={formData.password} type="password" name="password" placeholder="Enter Password" />
            <input onChange={handleChange} value={formData.confirmPassword} type="password" name="confirmPassword" placeholder="Confirm Password" />
            <button type="submit">Submit</button>
        </form>
    </div>
}