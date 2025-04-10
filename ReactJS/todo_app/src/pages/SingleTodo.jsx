import { useLocation } from "react-router"

const SingleTodo = () => {
    
    const { state } = useLocation()

    return <div>
        <h1>Single Todo</h1>
        <h2>{state.task}</h2>
        <p>{state.is_completed ? "Completed" : "Not Completed"}</p>
        <p>{state.created_at}</p>
        <p>{state.updated_at}</p>
    </div>
}

export default SingleTodo