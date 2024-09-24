
interface LoginAction {
    type : "LOGIN";
    username : string;
}

interface LogoutAction {
    type : "LOGOUT";
}

export type AuthActions = LoginAction | LogoutAction;

const AuthRecuder = (state : string , actions : AuthActions) : string => {
    if(actions.type === "LOGIN") {
        return actions.username;
    }
    if(actions.type === "LOGOUT") {
        return "";
    }
    return state;
}

export default AuthRecuder