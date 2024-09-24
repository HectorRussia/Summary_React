import React, { Children } from 'react'

// Props normal
interface Props {
    items : string [];
    heading : string;
    // children props
    children : React.ReactNode;
}


const PassingProp = ({items,heading,children} : Props) => {
  return (
    <>
        <h1>{heading}</h1>
        <h2>{items}</h2>
        <h3>{children}</h3>
    </>
  )

}

export default PassingProp