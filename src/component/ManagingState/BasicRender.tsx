import React from 'react'

let count = 0;

const BasicRender = () => {
    count ++;
    console.log('Render first ' + count);
  return (
    <>
        Message Render second {count} <br />
    </>
  )
}

export default BasicRender

/* render แต่ละ องประกอบ จะมีสองครั้ง
ครั้งแรก คือ เพื่อตรวจจับปัญหาที่เกิดกับโค้ด
ครั้งที่สอง คือ เพื่ออัพเดต interface กับผู้ใช้ จริงๆ */