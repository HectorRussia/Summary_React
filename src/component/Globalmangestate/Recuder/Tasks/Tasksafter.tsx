import { useReducer } from 'react'
import Tasksrecuder from './Tasksrecuder';

const Tasksafter = () => {
    const [value , dispatch] = useReducer(Tasksrecuder,[]);
    const handleadd = () => {
        dispatch({type: 'ADD'});
    }
    const handledelete = (id : number) => {
        dispatch({type: 'DELETE',taskid: id});
    }
    return (
    <>
            <button className='btn btn-primary my-3' onClick={()=> handleadd()}>
                Add Task
            </button>
            <ul className='list-group'>
                {value.map(task => (
                    <li key={task.id} className='list-group-item d-flex justify-content-between align-items-center'>
                       <span className="flex-grow-1"> {task.title}</span>
                       <button className='btn btn-outline-danger' onClick={()=> handledelete(task.id)}>
                        Delete
                        </button>
                    </li>
                ))}
            </ul>
       </>
  )
}

export default Tasksafter