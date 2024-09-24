import { ReactNode } from "react";

interface ChildComponent {  
  

  
    onClick: () => void; 
    onClick2: () => void; 
    onClick3: () => void; 
    onClick4: () => void; 
}

interface ProveProps {
  children : ReactNode;
  Clickall : ChildComponent
}

const Child = ({children , Clickall } : ProveProps) => {

   const { onClick, onClick2, onClick3, onClick4 } = Clickall;  // Destructuring props from parent component

   const handleClcik = () => {
     onClick(); // Call parent's function
   } 

   return (
    <div>
      <h2>{children}</h2>
      {/*  เขียนได้สามแบบ */}
      <button onClick={handleClcik}>Fetch Data1</button>
      <button onClick={() => handleClcik()}>Fetch Data2</button>
      <button onClick={() => onClick()}>Fetch Data3</button>
      <button onClick={() => onClick2()}>Click1</button>
      <button onClick={() => onClick3()}>Click2</button>
      <button onClick={() => onClick4()}>Click3</button>
    </div>
  );
}

export default Child