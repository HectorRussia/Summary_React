import React, { Dispatch } from 'react'
import { AuthActions } from '../../Recuder/Logins/AuthRecuder';

// defined shape context
interface AuthContextType {
  users : string;
  dispatch : Dispatch<AuthActions>;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export default AuthContext