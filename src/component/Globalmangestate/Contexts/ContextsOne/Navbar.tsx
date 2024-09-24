import { useContext } from "react"
import Taskcontext from "./Taskcontext"

const Navbar = () => {
    const {tasks} = useContext(Taskcontext);
  return (
    <div>{tasks.length}</div>
  )
}

export default Navbar
