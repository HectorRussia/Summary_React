import { useState } from "react"
import Child1, { UserProps1 } from "./Child1";
import axios from "axios";


const Parent1 = () => {

    const [data , setdata] = useState<UserProps1[]>([]);
    const [count , setcount] = useState<number>(0);
    const [toggle , settoggle] = useState<boolean>(false);

    const handleClickfetch = async() => {

        const res = await axios.get<UserProps1[]>('https://jsonplaceholder.typicode.com/posts')
        setdata(res.data);
        settoggle(false);
        setcount(count+1)
        console.log('click' , setcount(count+1));
    }

    const handleClear = async() => {
        setdata([]);
        setcount(0);
        settoggle(true);
    }

    return (
        <>
            <h1>Display Component Chirldren part1 ___number fetch is {count}</h1>
            <Child1 onClickfetch={() => handleClickfetch()} onClickclear={() => handleClear()}></Child1> 
            {toggle || count > 10 && <h1>if you see here yes state is true or fetch more than 10</h1>}
            {count % 2 === 0  && <h1 style={{color:'red'}}>if you see here yes number fetch is even </h1>}
            {count % 2 !== 0  && <h1 style={{color:'green'}}>if you see here yes number fetch is Odd</h1>}
            {data.map((e)=> <li>{e.title}</li>)}

           
            
            
        </>
    )
}

export default Parent1