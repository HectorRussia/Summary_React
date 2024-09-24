import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react'

interface User {
    id:number;
    name:string;
}

const UpdateUI = () => {
    const [users,setUsers] = useState<User[]>([]);
    // handerling error
    const [error , setError] = useState('');
    // set Loading
    const [isLoading , setisLoading] = useState(false);
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
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

    const deleteUser = (user: User) => {
        const originalUsers = [...users];
        setUsers(users.filter(u => u.id !== user.id));

        axios.delete('https://jsonplaceholder.typicode.com/users/' + user.id)
        .catch(err => {
            setError(err.message);
            setUsers(originalUsers);
        })
    }

    const addUser = () => {
        const newUser = {id: 0, name: "Mosh"};
        setUsers([newUser,...users]);
        axios.post('https://jsonplaceholder.typicode.com/users/' + newUser)
        .then(res => setUsers([res.data,...users]));
    }

    return (
        <>
            <p className='text-danger'>{error}</p>
            {isLoading && <div className='spinner-border'></div>}
            <button className="btn btn-primary mb-3" onClick={addUser}>Add</button>
            <ul className='list-group'>
                {users.map(user => 
                    <li key={user.id} className="list-gruop-item d-flex justify-content-between">
                        {user.name}
                        <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>Delete</button>
                    </li>
                )}
            </ul>
        </>
    )
}

export default UpdateUI