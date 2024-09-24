import React, { useState, useEffect } from 'react';

const ExampleComponent = () => {
    const [count, setCount] = useState(0);

    // useEffect จะทำงานเมื่อค่า count เปลี่ยนแปลง
    useEffect(() => {
        console.log(`Count has changed to: ${count}`);
    }, [count]); 
    /* array ที่ระบุถึงขึ้นตอนในการทำงานของ useEffect ว่าจะทำงานเมื่อ state หรือ props ใด ๆ เปลี่ยนแปลง */

    const incrementCount = () => {
        setCount(count + 1); // การอัปเดต state ด้วย useState
    }

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
        </>
    );
}

export default ExampleComponent;
