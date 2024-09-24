import { useState } from "react";
import usePostList from "../PostList/hook/usePostList";
import usePaginates from "./hook/usePaginates";


const PaginatedList = () => {

    const pageSize = 15;
    const [page,setPage] = useState(1);

    const {data , error , isLoading} = usePaginates({page,pageSize});

    const handleClickPrevious = () => {
        setPage(page - 1)
    }
    const handleClickNext = () => {
        setPage(page + 1)
    }

    if(error) return <p>{error.message}</p>
    if(isLoading) return <p>data isLoading....</p>

    return (
        <>
            <ul className="list-group">
                {data?.map((post) => (
                    <li className="list-group-item" key={post.id}>{post.title}</li>
                ))}
            </ul>
            <button className="btn btn-primary my-3" disabled={page === 1} onClick={handleClickPrevious}>Previous</button>
            <button className="btn btn-primary my-3 ms-1"  onClick={handleClickNext}>Next </button>
        </>
        
    )
}

export default PaginatedList