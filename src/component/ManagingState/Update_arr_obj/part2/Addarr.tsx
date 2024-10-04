import React, { useState } from 'react'

interface Artist {
    id: number;
    name: string;
}
const Addarr = () => {
    const [name , setName] = useState('');
    const [artists , setArtists] = useState<Artist[]>([]);
    let nextId = 0;

    const HandleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        
        setName(e.target.value);
    }

    const HandleClick = () => {

        // not good 
        /* artists.push({
            id : nextId++,
            name : name
        }) */

        // easy way ...
        setArtists([...artists,{id: nextId++, name: name}])
    }

    return (
        <>
            <h1>Inspiring sculptors : </h1>
            <input type="text" value={name} onChange={(e) => HandleChange(e)} />
            <button onClick={()=> HandleClick()}>Add</button>
            <ul>
                {artists.map(art => (
                    <li key={art.id}>{art.name}</li>
                ))}
            </ul>
        </>
    )
}

export default Addarr