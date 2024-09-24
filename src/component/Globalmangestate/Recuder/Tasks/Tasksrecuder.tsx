export interface TaskProps {
    id : number ;
    title: string ;
}

export interface Add {
    type : 'ADD';
}

export interface Delete {
    type : 'DELETE';
    taskid : number;
}

export type TaskAction = Add | Delete;

const Tasksrecuder = (tasks: TaskProps[] , actions : TaskAction) : TaskProps[]  => {
    if(actions.type === 'ADD') {
        return [{id: Date.now(),title:'Task' + Date.now()}, ...tasks];
    }
    if(actions.type === 'DELETE') {
       return tasks.filter(task => task.id!== actions.taskid);
    }
    return [];
    
}

export default Tasksrecuder