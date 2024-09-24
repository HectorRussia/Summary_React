import { useReducer } from "react"
import Homepage from "./Homepage"
import Navbar from "./Navbar"
import Taskcontext from "./Taskcontext"
import Tasksrecuder from "../../Recuder/Tasks/Tasksrecuder"


export const Taskcontextprovider = () => {
    const [tasks,dispatch] = useReducer(Tasksrecuder,[]);
  return (
        <Taskcontext.Provider value={{tasks,dispatch}}>
            <Navbar></Navbar>
            <Homepage></Homepage>
        </Taskcontext.Provider>
  )
}
