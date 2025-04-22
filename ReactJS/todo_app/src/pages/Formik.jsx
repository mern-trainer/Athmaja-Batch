import { useFormik } from "formik"
import { object, ref, string } from "yup"

export const Formik = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        onSubmit: (values) => {
            console.log(values)
        },
        // validate: (values) => {
        //     if (values.name == "") {
        //         return {
        //             name: "Name is required"
        //         }
        //     }
        // }
        validationSchema: object().shape({
            name: string().required("Name is required.").min(4, "Name should be 4 characters long.").max(20, "Name should be 20 characters long."),
            username: string().required("Username is required.").min(4, "Username should be 4 characters long.").max(20, "Username should be 20 characters long."),
            email: string().required("Email is required").email("Email should be valid"),
            password: string().required("Password is required").min(8, "Password should be 8 characters long.").max(16, "Password should be 16 characters long."),
            confirmPassword: string().required("Confirm Password is required").oneOf([ref("password")], "Password and Confirm Password should be same")
        })
    })

    return <div>
        <form onSubmit={formik.handleSubmit}>
            <input onChange={formik.handleChange} value={formik.values.name} type="text" name="name" placeholder="Enter Name" />
            <span>{formik.errors.name}</span>
            <input onChange={formik.handleChange} value={formik.values.username} type="text" name="username" placeholder="Enter Username" />
            <span>{formik.errors.username}</span>
            <input onChange={formik.handleChange} value={formik.values.email} type="text" name="email" placeholder="Enter Email" />
            <span>{formik.errors.email}</span>
            <input onChange={formik.handleChange} value={formik.values.password} type="password" name="password" placeholder="Enter Password" />
            <span>{formik.errors.password}</span>
            <input onChange={formik.handleChange} value={formik.values.confirmPassword} type="password" name="confirmPassword" placeholder="Confirm Password" />
            <span>{formik.errors.confirmPassword}</span>
            <button type="submit">Submit</button>
        </form>
    </div>
}