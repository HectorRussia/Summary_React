import React, { useState } from 'react'

const UpdateState = () => {
    const [game,setGame] = useState({
        id: 1,
        player: {
            name:'john'
        },
        pizza: {
            property: 'cheese',
        }
    });
    const handleClick = () => {
        setGame({
           ...game,
            player: {
               ...game.player,
                name: 'Ponkrit'
            },
            pizza: {
               ...game.pizza,
                property: 'pepperoni'
            }
        })
    }
  return (
    <>
        <h1>{game.pizza.property}</h1>
        <h1>{game.player.name}</h1>
        <button onClick={handleClick}>Click me</button>
    </>
  )
}

export default UpdateState