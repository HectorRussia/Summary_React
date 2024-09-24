import { useEffect } from "react";


const Mount = () => {
    
    // Mount = component created add in DOM
    // หมายถึง: component ถูกสร้างขึ้นและแสดงบนหน้าจอเรียบร้อยแล้ว
    useEffect(() => {
        console.log('Component mounted');
      }, []);
    /*   เหตุการณ์ที่เกิดขึ้น:
      Component ถูกเพิ่มเข้าไปใน DOM (Document Object Model)
      สามารถใช้งานได้ เช่น รับค่า props, จัดการ state, และทำการ render ข้อมูล
      ฟังก์ชัน useEffect 
      
      เมื่อ component ถูกแสดงบนหน้าเว็บครั้งแรก เช่นการเปิดหน้าใหม่หรือการเพิ่ม 
      component เข้าไปในโครงสร้างของ DOM
      
    */




    // Unmount = component geted out DOM
    // หมายถึง: component ถูกลบออกจาก DOM หรือหยุดการแสดงผลแล้ว
    useEffect(() => {
        console.log('Component mounted');
        
        return () => {
          console.log('Component unmounted');
        };
      }, []);
     /*  เหตุการณ์ที่เกิดขึ้น:
      Component ถูกลบออกจาก DOM และไม่ถูกแสดงบนหน้าจออีกต่อไป
      React จะทำความสะอาด (cleanup) ทุกอย่างที่เชื่อมโยงกับ component นั้น เช่น 
      การ unsubscribe การตั้งค่า listeners หรือการหยุดการทำงานของการอัปเดต state
      ฟังก์ชัน useEffect จะทำงานในส่วน cleanup ก่อนที่ component จะ unmount 
      ถ้าเราคืนค่าฟังก์ชันจาก useEffect  
      
      การใช้งานที่สำคัญของ unmount คือการทำ cleanup เช่น การหยุด fetch ข้อมูล, 
      การยกเลิก event listeners, หรือการปิด WebSocket connections
      
      */
    return (
        <div>Mount</div>
    )
}

export default Mount