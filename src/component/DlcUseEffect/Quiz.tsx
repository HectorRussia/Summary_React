import { useEffect, useState } from "react";

const Quiz = () => {

    const [count , setcount] = useState(0);
    useEffect(() => {
        setcount(count + 1);
    }, [/* count */])// ใส่ [] เพื่อให้ useEffect รันแค่ครั้งเดียวหลังจาก mount
  return (
    <div>{count}</div>
  )
}

export default Quiz