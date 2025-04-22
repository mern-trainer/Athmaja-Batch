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

    return <div className="vw-100 gap-3 d-flex justify-content-center">
        <form onSubmit={formik.handleSubmit} className="w-100 d-flex flex-column mt-4" style={{maxWidth: "500px"}}>
            <input onChange={formik.handleChange} className="w-100 p-2 rounded-0 border border-2" value={formik.values.name} type="text" name="name" placeholder="Enter Name" />
            <p className="text-danger">{formik.errors.name}</p>
            <input onChange={formik.handleChange} className="w-100 p-2 rounded-0 border border-2" value={formik.values.username} type="text" name="username" placeholder="Enter Username" />
            <p className="text-danger">{formik.errors.username}</p>
            <input onChange={formik.handleChange} className="w-100 p-2 rounded-0 border border-2" value={formik.values.email} type="text" name="email" placeholder="Enter Email" />
            <p className="text-danger">{formik.errors.email}</p>
            <input onChange={formik.handleChange} className="w-100 p-2 rounded-0 border border-2" value={formik.values.password} type="password" name="password" placeholder="Enter Password" />
            <p className="text-danger">{formik.errors.password}</p>
            <input onChange={formik.handleChange} className="w-100 p-2 rounded-0 border border-2" value={formik.values.confirmPassword} type="password" name="confirmPassword" placeholder="Confirm Password" />
            <p className="text-danger">{formik.errors.confirmPassword}</p>
            <button type="submit" className="btn btn-success rounded-0">Submit</button>
        </form>
        <div className="mt-4">
            <h3>Form Values</h3>
            <pre>{JSON.stringify(formik.values, null, 2)}</pre>
            <h3>Form Errors</h3>
            <pre>{JSON.stringify(formik.errors, null, 2)}</pre>
        </div>
    </div>
}