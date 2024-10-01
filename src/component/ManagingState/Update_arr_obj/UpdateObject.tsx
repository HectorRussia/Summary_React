import { useState } from 'react'

const UpdateObject = () => {
    const [drink,setDrink] = useState({
        title: "Americano",
        price:5
    })
    const hanleClick = () => {
        /*       
            old version
            const newDrink = {
            ...drink,  // คัดลอกค่าเดิมของ drink
            price: drink.price + 1  // อัปเดตค่า price ใหม่
        }
        setDrink(newDrink) */
        // new version
        setDrink({...drink,title: drink.title +' ddd ',price:drink.price + 1})
    }
  return (
    <>
        {drink.title} <br />
        {drink.price} <br />
        <button onClick={hanleClick}>Click me</button>
    </>
  )
}

export default UpdateObject