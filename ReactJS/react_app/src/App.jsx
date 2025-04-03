import React from "react"

const App = () => {

    const number = 1000

    const handleClick = (text) => {
        console.log(text);
    }

    return <React.Fragment>
        <div>
            <h1>Hi</h1>
            <p>Hello</p>
        </div>
        <div>Age is: {number}</div>
        <div>
            <h3>Hello</h3>
        </div>
        <button onClick={() => {
            handleClick("button clicked")
        }}>Click Here</button>
    </React.Fragment>
}

export default App