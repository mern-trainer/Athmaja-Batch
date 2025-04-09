import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const App = () => {

    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (todo == "") {
            return toast.error("Task is required");
        }
        if (todos.includes(todo)) {
            return toast.error("Task already exists");
        }
        setTodos([todo, ...todos])
        setTodo("")
    }

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleDelete = (idx) => { // idx means index
        const newTodos = todos.filter((_, index) => index != idx)
        setTodos(newTodos)
    }

    return <div className="px-2 d-flex justify-content-center">
        <div className="w-100 mt-3" style={{maxWidth: "500px"}}>
            <form onSubmit={handleSubmit} className="w-100">
                <input type="text" value={todo} onChange={handleChange} name="todo" placeholder="Eg: Buy groceries" className="w-100 p-2 border border-2 border-secondary outline-none"/>
                <button className="btn btn-secondary w-100 rounded-0 mt-2">Create Todo</button>
            </form>
            <div className="w-100 mt-2 d-flex flex-column gap-2">
                {
                    todos.map((item, index) => {
                        return <div key={item} className="w-100 d-flex p-2 border border-2 border-secondary text-dark">
                            <div className="w-100">{item}</div>
                            <div>
                                <button onClick={() => handleDelete(index)} className="btn btn-sm text-danger"><FaTrash /></button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}

export default App