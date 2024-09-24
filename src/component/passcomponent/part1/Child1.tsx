export interface UserProps1 {
    userId?: number;
    id?:number;
    title?: string
    
}
interface ClickProps {

    onClickfetch: () => void;
    onClickclear: () => void;
}
const Child1 = ({onClickfetch,onClickclear} : ClickProps) => {

  return (
   
    <>
        <button onClick={()=>onClickfetch()}>Fetch User</button>
        <button onClick={()=>onClickclear()}>Clear User</button>
    </>
    
  )
}

export default Child1