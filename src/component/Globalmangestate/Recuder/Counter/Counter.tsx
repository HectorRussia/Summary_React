import { useReducer} from 'react'
import Counterrecuder from './Counterrecuder'

const Counter = () => {
    const [value , dispatch] = useReducer(Counterrecuder,0);
    return (
        <div>
            Counter ({value})
            <button
            onClick={()=> dispatch({type: "INCREMENT"})}
            className='btn btn-primary mx-1'> INCREMENT</button>
             <button
            onClick={()=> dispatch({type: "DECREMENT"})}
            className='btn btn-primary mx-1'>DECREMENT</button>
             <button
            onClick={()=> dispatch({type: "RESET"})}
            className='btn btn-primary mx-1'>RESET</button>
        </div>
    )
}

export default Counter