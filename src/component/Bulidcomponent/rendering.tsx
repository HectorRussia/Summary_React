import { MouseEvent, useState } from "react";
import PassingProp from "./PassingProp";

// render
const Rendering = () => {
    const items = [
        'New York',
        'San Francisco',
        'Thailand',
        'Paris'
    ]

// handle event
const handleClick = (event : MouseEvent) => {console.log(event)}

// hook
const [selectedindex,setselectedindex] = useState(-1); // ไม่มี item ไหนที่ถูกเลือกเมื่อเริ่มต้น (index : start form 0)

    return (
        <>  
            <PassingProp items={['List City', 'Bangkok']} heading={'Heading'}>
                <p>Hello this children props</p>
            </PassingProp>
            <ul className="list-group">
                {items.map((item, index) => (
                    <li className= {selectedindex === index ? 'list-group-item active' : 'list-group-item '} 
                        key={index} /* onClick={handleClick} */  onClick={() => {setselectedindex(index)}}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            {items.length === 0 && <p>No items found</p>}
        </>
    );
}

export default Rendering