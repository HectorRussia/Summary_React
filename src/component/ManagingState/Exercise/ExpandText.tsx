import React, { useState } from 'react'

interface PropsText {
    children: string;
    maxvarchar? : number;
}

const ExpandText = ({children,maxvarchar=100} : PropsText) => {
    const [isExpanded,setIsExpanded] = useState(false);
    const handleClick = () => {
        setIsExpanded(!isExpanded); // true
    }

    if(children.length <= maxvarchar) return <p>{children}</p>
    const text = isExpanded ? children : children.substring(0, maxvarchar);

    return (
        <>
            <p>{text}....</p>
            <button onClick={handleClick}>{isExpanded ? 'less' : 'more' }</button>
        </>
    )
}

export default ExpandText