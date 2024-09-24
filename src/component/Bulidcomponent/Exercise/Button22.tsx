import React from 'react'

interface Props {
    children: string
    color?:'success' | 'secondary' | 'danger' ;
    onClick: () => void
}

const Button22 = ({children,color,onClick} : Props) => {
  return (
    <>
        <button className={'btn btn-'+color} onClick={onClick}>{children}</button>
    </>
  )
}

export default Button22