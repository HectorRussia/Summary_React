import React, { Dispatch } from 'react'
import { TaskAction, TaskProps } from '../../Recuder/Tasks/Tasksrecuder';


// defined shape context
interface TasksContextType {
    tasks: TaskProps[];
    dispatch : Dispatch<TaskAction>
}

const Taskcontext = React.createContext<TasksContextType>({} as TasksContextType);

// defined shape context

export default Taskcontext