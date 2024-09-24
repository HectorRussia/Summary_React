import useTodos from "./hook/useTodos"


const TodosListHook = () => {

     const { data : todos , isLoading ,error} = useTodos();
     
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

export default TodosListHook