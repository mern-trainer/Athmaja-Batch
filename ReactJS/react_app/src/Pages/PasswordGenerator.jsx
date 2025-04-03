import { v4 as uuidv4 } from 'uuid';

const PasswordGenerator = () => {
    
    const generatePassword = () => {
        const pass = uuidv4();
        document.getElementById("password").innerHTML = pass
    }
    
    return <div>
        <h1>Password Generator</h1>
        <div id='password'></div>  
        <button onClick={generatePassword}>Generate</button>
    </div>
}

export default PasswordGenerator