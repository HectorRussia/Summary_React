import { useInfiniteQuery} from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number; 
    title: string;
    body : string
    userId : number;
}

interface PostQuery {
    pageSize : number;
}


const fetchInfinity = async ( {pageSize} : PostQuery , pageParam = 1) => {
    try {
        const response =  await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts',{
            params : {
                _start : (pageParam - 1) * pageSize,
                _limit : pageSize,
            }
        });
        return response.data;
    }
   
    catch {
        throw new Error('Failed to fetch todos');
    }
    
}


const useInfinity = (quuery : PostQuery) => {
    
    return useInfiniteQuery<Post[],Error>({
        queryKey : ['posts',quuery],
        queryFn : fetchInfinity(quuery),
        getNextPageParam: (lastPage) => lastPage.nextCursor
    })
}

export default useInfinity