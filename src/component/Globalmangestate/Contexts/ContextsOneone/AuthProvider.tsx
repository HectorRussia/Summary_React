import React, { useContext, useReducer } from 'react'
import AuthRecuder from '../../Recuder/Logins/AuthRecuder';
import AuthContext from './AuthContext';

interface Props { 
    children: React.ReactNode;
}

const AuthProvider = ({children} : Props) => {
    const [users , dispatch] = useContext(AuthContext);
   
}

export default AuthProvider