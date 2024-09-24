import { useState } from 'react'
import Child from './Child2'
import axios from 'axios'

interface UserProps {
    userId: number;
    id:number;
    title: string
}

const Parent = () => {

    const [data , setdata] = useState<UserProps[]>([]);

    const handlefetch = async() => {

        try {
            const res = await axios.get<UserProps[]>('https://jsonplaceholder.typicode.com/posts')
            setdata(res.data);
        }
        catch (err) {
            console.log(err);
        }
    }
  return (
    <>
        <h2>Parent Component</h2>
        <Child
              Clickall={{
                  onClick: () => handlefetch(),
                  onClick2: () => handlefetch(),
                  onClick3: () => handlefetch(),
                  onClick4: () => handlefetch(),
              }} >Burger</Child>
        <ul>
            {data.map((item , index)=> <li key={index}>{item.title}</li>)}
        </ul>
    </>
  )
}

export default Parent