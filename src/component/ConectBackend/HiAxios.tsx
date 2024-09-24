import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react'

interface User {
    id:number;
    name:string;
}

const HiAxios = () => {
    const [users,setUsers] = useState<User[]>([]);
    // handerling error
    const [error , setError] = useState('');
    // set Loading
    const [isLoading , setisLoading] = useState(false);
    /*   useEffect(()=>{
        axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setUsers(response.data);
        })
        .catch(err => {
            console.error(err);
            setError(err.message);
        });
    },[]); */

    // clean code 

   /*  const fecthUser = () => {
        axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setUsers(response.data);
        })
        .catch(err => {
            console.error(err);
            setError(err.message);
        });
    }
    useEffect(fecthUser,[]); */

    // best practice how to fecth data 1 hit not twice 
    // react not allow asyn on hook 
       useEffect(() => {

        const controller = new AbortController();
        const signal = controller.signal;

       /*  const fetchUsers1 =  async () =>{  version async await
        try{
                const res = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users', { signal })
                setUsers(res.data);
            }
            catch (err)
            {
                setError((err as AxiosError).message);
            }
        } */
        const fetchUsers =  () => {
                axios.get<User[]>('https://jsonplaceholder.typicode.com/users', { signal })
                .then(response => {
                    setUsers(response.data);
                    setisLoading(false);
                })
                .catch(err => {
                    if (axios.isCancel(err)) {
                        console.log('Request canceled:', err.message);
                    } else {
                        console.error(err);
                        setError(err.message);
                        setisLoading(false);
                    }
                });
        };
        fetchUsers(); 
        return () => {
            controller.abort(); 
        };
    }, []);  

    return (
        <>
            <p className='text-danger'>{error}</p>
            {isLoading && <div className='spinner-border'></div>}
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </>
    )
}

export default HiAxios