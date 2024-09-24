import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
  
}

const TodoListQuery = () => {

    const fetchtodos = async () : Promise<Todo[]> => {
       const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
       return response.data;
    }

    const {data : todos , isLoading , error} = useQuery({
        queryKey : ['todos'], // this name query is todos
        queryFn : fetchtodos // call this function for fetch data
    });

    // feature loading
    if(isLoading) return <div>Loading....</div>
    // add error 
    if(error) return <p>Error....{error.message}</p>

    return (
        <>
            <ul className="list-group">
                {todos?.map((todo) => {
                    return <li key={todo.id} className='list-group-item'>{todo.title}</li>
                })}
            </ul>
            <ul className="list-group">
                {todos?.map((todo) => (
                   <li key={todo.id} className='list-group-item'>{todo.title}</li>
                ))}
            </ul>
            <ul className="list-group">
                {todos?.map((todo) => 
                   <li key={todo.id} className='list-group-item'>{todo.title}</li>
                )}
            </ul>
        </>
    )
}

export default TodoListQuery