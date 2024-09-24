import { useReducer } from 'react'
import AuthRecuder from './AuthRecuder';

const LoginStatus = () => {
    const [users,dispatch] = useReducer(AuthRecuder,'');
    if(users) {
     return(  <>
                <div>
                    <span className="mx-2">{users}
                        LOGOUT
                    </span>
                    <a href="#" onClick={()=> dispatch({type:'LOGOUT'})}>Logout</a>
                </div>
            </>
        ) 
    }
    return(  <>
        <div>
            <a href="#" onClick={()=> dispatch({type:'LOGIN',username:'HORN'})}>Login</a>
        </div>
    </>
) 
}

export default LoginStatus