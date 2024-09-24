import  apiclientservice from "./ReusableApi";

export interface User {
    id:number;
    name:string;
}

class UserService {

    getAllUsers() {
        const controllers = new AbortController();
        const signal = controllers.signal;
        const request = apiclientservice.get<User[]>('/users',{signal});
        return {request, cancel: () => controllers.abort()}
    }

    deleteUser(id:number) {
        return apiclientservice.delete('/users/' + id)
    }

    createUser(user:User) {
        return apiclientservice.post('/users/' + user)
    }

    updateUser(user:User) {
        return apiclientservice.put('/users/' + user.id, user)
    }
}

export default new UserService();