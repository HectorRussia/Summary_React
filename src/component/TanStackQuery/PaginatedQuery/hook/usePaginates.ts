import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number; 
    title: string;
    body : string
    userId : number;
}

interface PostQuery {
    page : number;
    pageSize : number;
}


const fetchPaginated  = async ( {page , pageSize} : PostQuery ) => {
    try {
        const response =  await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts',{
            params : {
                _start : (page - 1) * pageSize,
                _limit : pageSize,
            }
        });
        return response.data;
    }
   
    catch {
        throw new Error('Failed to fetch todos');
    }
    
}


const usePaginates = (quuery : PostQuery) => {
    
    return useQuery<Post[] , Error>({
        queryKey : ['posts',quuery],
        queryFn : () => fetchPaginated(quuery),
        staleTime : 1 * 60 * 1000 , // 1 minute
        refetchOnWindowFocus: false,
        refetchOnMount: false
    })
 
}

export default usePaginates