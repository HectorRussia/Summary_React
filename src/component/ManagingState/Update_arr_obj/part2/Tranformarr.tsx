import React, { useState } from 'react'

interface initialShapesProps {
    id: number;
    type: 'circle' |'square';
    x: number;
    y: number;  // coordinates of the shape
  
}

const initialShapes : initialShapesProps[] = [
    { id: 0, type: 'circle', x: 50, y: 100 },
    { id: 1, type: 'square', x: 150, y: 100 },
    { id: 2, type: 'circle', x: 250, y: 100 },
  ];

const Tranformarr = () => {

    const [shapes, setShapes] = useState(initialShapes);
    
    const handleClick = () => {

        const nextShapes = shapes.map(shape => {
            if(shape.type === 'square') {
                return shape; // no change
            }
            else {
                // new circle 50px below
                return {...shape, y:shape.y + 50}
            }
        });

        setShapes(nextShapes);
    }

    return (
        <>
      <button onClick={() => handleClick()}>
        Move circles down!
      </button>
      {shapes.map(shape => (
        <div
          key={shape.id}
          style={{
          background: 'purple',
          position: 'absolute',
          left: shape.x,
          top: shape.y,
          borderRadius: shape.type === 'circle'? '50%' : '',
          width: 20,
          height: 20,
        }} />
      ))}
    </>
    )
}

export default Tranformarr