const ChildComponent = ({ counter, setCounter }) => {

    return <div>
        <button onClick={() => setCounter(counter + 1)}>sdfsdf</button>
        <h1>Child Component - {counter}</h1>
    </div>
}   

export default ChildComponent