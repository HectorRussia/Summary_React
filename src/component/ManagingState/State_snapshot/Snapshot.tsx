import { useState } from "react"

const Snapshot = () => {

    const [count , setCount] = useState<number>(0);

    const handleClick = () => {
        setCount(count + 1); // value will save in  snapshot when  setState called
        console.log(count);  // count now not will update
    }

   /*  update state  async:
    React will updated state like asynchronous that mean is state 
    will not use immediately in render working
    but will collected in snapshot and will used next render  */
    return (
        <div>
            {count}
            <br></br>
            <button onClick={() => handleClick()}>Click me</button>
        </div>
    )
}

export default Snapshot