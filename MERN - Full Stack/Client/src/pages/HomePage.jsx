import { toast } from "react-toastify"
import { api } from "../axios"
import { cookie } from "../lib/cookie";

export const HomePage = () => {

    const handleClick = async () => {
        try {
            const { data, status } = await api.get("/auth/check");
            if (status != 200) return toast.error(data.message)
            return toast.success(data.message)
        } catch (err) {
            return toast.error(err.response?.data.message || err.message)
        }
    }

    return <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-danger" onClick={handleClick}>Is Authenticated</button>
        <button className="btn btn-outline-danger" onClick={() => cookie.remove()}>LogOut</button>
    </div>
}