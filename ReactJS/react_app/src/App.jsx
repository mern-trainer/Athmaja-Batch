// import { Fragment } from "react"
// import PasswordGenerator from "./Pages/PasswordGenerator";

import { Fragment } from "react"
import HomePage from "./Pages/HomePage"

export const App = () => { // named export

    // const handleClick = (text) => {
    //     console.log(text);
    // }

    // return <Fragment>
    //     <div>
    //         <h1>Hi</h1>
    //         <p>Hello</p>
    //     </div>
    //     <div>Age is: {number}</div>
    //     <div>
    //         <h3>Hello</h3>
    //     </div>
    //     <button onClick={() => {
    //         handleClick("button clicked")
    //     }}>Click Here</button>

    //     <PasswordGenerator />
    // </Fragment>
    return <Fragment>
        <HomePage />
    </Fragment>
}

// export default App // default export