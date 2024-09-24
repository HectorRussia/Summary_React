import  { useState } from 'react'

const UpdatingArrayObject = () => {

    const [bugs , setbug] = useState([
        { id:1 , title: 'Bug 1' , fixed: false},
        { id:2 , title: 'Bug 2' , fixed: false}
    ]);

    const handleClick = () => {
        const updatedBugs = bugs.map(bug => (bug.id === 1 ? { ...bug, fixed: true } : bug));
        setbug(updatedBugs);
    };

    return (
        <>
            {bugs.map(bug => (
                <div key={bug.id}>
                    <p>{bug.title} - {bug.fixed ? 'Fixed' : 'Not Fixed'}</p>
                </div>
            ))}
            <button className="btn btn-success m-1" onClick={handleClick}>
                Click me
            </button>
        </>
    );
}

export default UpdatingArrayObject