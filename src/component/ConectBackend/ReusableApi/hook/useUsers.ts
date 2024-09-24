import { useEffect, useState } from "react";
import userService, { User } from "../service/user-service";
import { CanceledError } from "axios";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  // handerling error
  const [error, setError] = useState("");
  // set Loading
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    const { request, cancel } = userService.getAllUsers();
    request
      .then((response) => {
        setUsers(response.data);
        setisLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          return;
        } else {
          console.error(err);
          setError(err.message);
          setisLoading(false);
        }
      });
    return () => cancel();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    userService.deleteUser(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const newUser = { id: 0, name: "Mosh" };
    setUsers([newUser, ...users]);
    userService.createUser(newUser).then((res) => setUsers([res.data, ...users]));
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updateUsers = { ...user, name: user.name + " !" };
    setUsers(users.map((u) => (u.id === user.id ? updateUsers : u)));
    userService.updateUser(updateUsers).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return { users, error, isLoading, setError, setUsers ,deleteUser,addUser,updateUser };
};

export default useUsers;
