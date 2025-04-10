import { useState } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid"
import Header from "../components/Header";

const TodoPage = () => {

    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (todo == "") {
            return toast.error("Task is required");
        }
        const taskIndex = todos.findIndex((item) => item.task.toLowerCase() == todo.toLowerCase())
        if (taskIndex > -1) {
            return toast.error("Task already exists");
        }
        const date_time = new Date()
        const taskObj = {
            id: uuidv4(),
            task: todo,
            is_completed: false,
            created_at: date_time.toISOString(),
            updated_at: date_time.toISOString()
        }
        setTodos([taskObj, ...todos])
        setTodo("")
    }

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleDelete = (id) => { 
        const newTodos = todos.filter((item) => item.id != id)
        setTodos(newTodos)
    }

    const handleCompleted = (task) => {
        if (!task.is_completed) {
            const res = todos.map((item) => {
                if (item.id == task.id) {
                    const date_time = new Date()
                    return {...item, updated_at: date_time.toISOString(), is_completed: true}
                }
                return item
            })
            setTodos(res)
        }
    }

    return <div className="px-2 d-flex justify-content-center">
        <Header />
        <div className="w-100 mt-3" style={{maxWidth: "500px"}}>
            <form onSubmit={handleSubmit} className="w-100">
                <input type="text" value={todo} onChange={handleChange} name="todo" placeholder="Eg: Buy groceries" className="w-100 p-2 border border-2 border-secondary outline-none"/>
                <button className="btn btn-secondary w-100 rounded-0 mt-2">Create Todo</button>
            </form>
            <div className="w-100 mt-2 d-flex flex-column gap-2">
                {
                    todos.map((item) => {
                        return <div key={item.id} className="w-100 d-flex p-2 border border-2 border-secondary text-dark">
                            <div className="w-100">
                                <h3>{item.task}</h3>
                                <p>Completed: {item.is_completed ? "Completed" : "Pending"}</p>
                            </div>
                            <div className="d-flex gap-1 align-items-center">
                                <button onClick={() => handleDelete(item.id)} className="btn btn-sm text-danger"><FaTrash /></button>
                                {
                                    !item.is_completed && <button onClick={() => handleCompleted(item)} className="btn btn-sm text-success"><FaCheck /></button>
                                }
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}

export default TodoPage