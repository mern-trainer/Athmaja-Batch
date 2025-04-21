import { useEffect, useState } from "react"
import { toast } from "react-toastify"

export const ApiCalling = () => {

    const [posts, setPosts] = useState([])

    const fetchData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const result = await response.json()
            setPosts(result)
        } catch (error) {
            return toast.error("Error fetching data")
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return <div>
        <h1>API Calling</h1>
        <div>
            {
                posts.map((post) => {
                    return <div key={post.id}>
                        <h6>{post.title}</h6>
                    </div>
                })
            }
        </div>
    </div>
}