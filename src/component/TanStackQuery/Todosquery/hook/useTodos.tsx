import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
  
}

const fetchtodos = async ()  => {
    
    try {
        const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
        return  response.data;
    } 
    catch {
        throw new Error('Failed to fetch todos');
    }
  
}

const useTodos = () => {

    return useQuery<Todo[] , Error>({
        queryKey : ['todos'],
        queryFn : fetchtodos,
        
        // customizing query settings
        // read doc more
        staleTime: 10 * 1000, 
        refetchInterval: 60 * 1000, // fetch data every 10 seconds
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: true,
        retry: 3,

    })
    
}

export default useTodos