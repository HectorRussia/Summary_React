import {useState } from "react";
import usePostList from "./hook/usePostList";



const PostList = () => {
    
    const [userId , setUserId] = useState<number>();
    const {data , error , isLoading} = usePostList(userId);

    const handleonClick = (event: any) => {

        setUserId(parseInt(event.target.value));
    }

    if(error) return <p>{error.message}</p>
    if(isLoading) return <p>data isLoading....</p>

    return (
        <>
        <select className="form-select mb-3" value={userId} onChange={(event) => {handleonClick(event)}}>
            <option value=""></option>
            <option value="1">User1</option>
            <option value="2">User2</option>
            <option value="3">User3</option>
        </select>
            <ul className="list-group">
                {data?.map((post) => (
                    <li className="list-group-item" key={post.id}>{post.title}</li>
                ))}
            </ul>
        </>
        
    )
  
}

export default PostList