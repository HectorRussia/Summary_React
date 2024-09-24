import { useState } from 'react'

interface Task {
    id : number;
    title: string;
}
const Tasksbefore = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const handleadd = () => {
        setTasks([{id: Date.now(),title:'Task' + Date.now()}, ...tasks]);
    }
    const handledelete = (id : number) => {
        setTasks(tasks.filter(task => task.id!== id));
    }
    return (
       <>
            <button className='btn btn-primary my-3' onClick={()=> handleadd()}>
                Add Task
            </button>
            <ul className='list-group'>
                {tasks.map(task => (
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

export default Tasksbefore