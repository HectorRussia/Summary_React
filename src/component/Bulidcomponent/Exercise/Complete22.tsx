import React, { useState } from 'react'
import Alert22 from './Alert22';
import Button22 from './Button22';

const Complete22 = () => {

    const [alertvisible,Setalertvisible] = useState(false);
    return (
        <>
            {alertvisible && <Alert22 onClose={()=>Setalertvisible(false)}>Hi Alert</Alert22>}
            <Button22 color='success' onClick={()=> {Setalertvisible(true)}}>Clik me</Button22>
        </>
    )
}
export default Complete22