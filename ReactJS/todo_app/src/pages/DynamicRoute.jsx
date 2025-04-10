import { useParams } from "react-router"

const DynamicRoute = () => {
    const { id } = useParams()
    
    return <div>
        { id ? id : "Id is required" }
    </div>
}

export default DynamicRoute