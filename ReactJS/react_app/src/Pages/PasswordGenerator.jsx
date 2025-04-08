import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const PasswordGenerator = () => {

    const [password, setPassword] = useState("")
    const [history, setHistory] = useState([])
    
    const generatePassword = () => {
        const pass = uuidv4();
        setPassword(pass)
        setHistory([pass, ...history])
    }

    const handleDelete = (pass) => {
        const res = history.filter((item) => {
            return item != pass
        })
        setHistory(res)
    }

    // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    // const list = arr.map((num, index) => {
    //     // map unique identifier to identify each element
    //     return <div key={index} className='bg-danger p-2 rounded my-1'>{num}</div>        
    // })
    
    return <div className='d-flex flex-column justify-content-center align-items-center'>
        <h1>Password Generator</h1>
        <div>{password}</div>  
        <button className='mt-3 btn btn-secondary w-25 rounded-0' onClick={generatePassword}>Generate</button>
        <h2>History</h2>
        <div className='d-flex flex-column align-items-center gap-2 w-100'>
            {
                history.map((pass, index) => {
                    return <div key={index} className='bg-secondary w-25 p-2 text-light'>
                        <div>{pass}</div>
                        <button className='btn btn-danger rounded-0 w-100 mt-2 btn-sm' onClick={() => handleDelete(pass)}>Delete</button>
                    </div>
                })
            }
            {
                history.length == 0 && <div>No History</div>
            }
        </div>
    </div>
}

export default PasswordGenerator