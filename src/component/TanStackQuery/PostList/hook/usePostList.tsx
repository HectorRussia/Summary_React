import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number; 
    title: string;
    body : string
    userId : number;
}

const fetchPosts = async ( userId:number | undefined ) => {
    try {
        const response =  await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts',{
            params : userId ? { userId } : undefined 
        });
        return response.data;
    }
   
    catch {
        throw new Error('Failed to fetch todos');
    }
    
}
const usePostList = (userId:number | undefined  ) => {
   
    return useQuery<Post[] , Error>({
        // parameter query
        queryKey : userId ? ['postslist',userId] : ['postslist'],
        queryFn : () => fetchPosts(userId),
        staleTime: 10 * 1000, 
        refetchInterval: 60 * 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: true,
        retry: 3,

    });
}

export default usePostList