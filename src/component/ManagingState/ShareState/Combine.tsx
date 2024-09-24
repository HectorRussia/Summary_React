import React, { useState } from 'react'
import Navbar from './Navbar'
import Cart from './Cart'

const Combine = () => {
    const product = [
        'product 1', 'product 2', 'product 3', 'product 4', 'product 5'
    ]
    const [clear,setclear] = useState(product);
    const onClear = () => {
        setclear([]);
    }
  return (
    <>
        <Navbar cartItemCount={clear.length}/>
        <Cart cartItems={clear}  onClick ={onClear}/>
    </>
  )
}

export default Combine