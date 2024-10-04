import  { useState } from 'react'

const Removearr = () => {
    
    const initialArtists = [
        { id: 0, name: 'Marta Colvin Andrade' },
        { id: 1, name: 'Lamidi Olonade Fakeye'},
        { id: 2, name: 'Louise Nevelson'},
      ];
      
    const [artists, setArtists] = useState(initialArtists); 

    const Handledelete = (id : number) => {

        // Note that filter does not modify the original array.
        
        setArtists(artists.filter(a => a.id !== id));
    }
    return (
        <>
          <h1>Inspiring sculptors:</h1>
          <ul>
            {artists.map(artist => (
              <li key={artist.id}>
                {artist.name}{' '}
                <button onClick={() => Handledelete(artist.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </>
      );
}

export default Removearr