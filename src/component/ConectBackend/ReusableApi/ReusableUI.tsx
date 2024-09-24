import useUsers from "./hook/useUsers";

const ReusableUI = () => {
  
    const { users, error, isLoading,deleteUser,addUser,updateUser } = useUsers();

    return (
        <>
        <p className="text-danger">{error}</p>
        {isLoading && <div className="spinner-border"></div>}
        <button className="btn btn-primary mb-3" onClick={addUser}>
            Add
        </button>
        <ul className="list-group">
            {users.map((user) => (
            <li key={user.id} className="list-group-item d-flex justify-content-between">
                {user.name}
                <div>
                <button className="btn btn-outline-success mx-1" onClick={() => updateUser(user)}>
                    Update
                </button>
                <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>
                    Delete
                </button>
                </div>
            </li>
            ))}
        </ul>
        </>
    );
};

export default ReusableUI;
