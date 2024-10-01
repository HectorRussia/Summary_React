import { useState } from 'react'

const UpdateArray = () => {
    const [tags,Settags] = useState(['happy','cheerful']);
    const handleClickAdd = () => {
        // Add
        Settags([...tags,'angry','awful'])
    }
    const handleClickRemove = () => {
        // Delte
        Settags(tags.filter(tag => tag !== 'awful' && tag !== 'angry'))
    }
    const handleClickUpdate = () => {
        // Update
        Settags(tags.map(tag => tag === 'cheerful' ? 'happiness' : tag ))
    }
    return (
        <>  <div className="m-5">
                {tags}
                <br />
                <button className="btn btn-success m-1" onClick={handleClickAdd}>
                    Add
                </button>
                <br />
                <button className="btn btn-success m-1" onClick={handleClickRemove}>
                    remove
                </button>
                <br />
                <button className="btn btn-success m-1" onClick={handleClickUpdate}>
                    Update
                </button>
            </div>
        </>
    )
}

export default UpdateArray