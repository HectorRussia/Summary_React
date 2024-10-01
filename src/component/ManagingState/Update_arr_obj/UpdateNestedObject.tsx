import { useState } from 'react'

const UpdateNestedObeject = () => {
    const [customer,Setcustomer] = useState({
        name: 'John',
        address: {
            city: 'San Francisco',
            zipcode: 1150
        }
    });
    const hanleClick = () => {

        Setcustomer({...customer,// คัดลอกค่าเดิมของ customer
                        name:'Nobody',
                        address:{...customer.address,// คัดลอกค่าเดิมของ address
                            zipcode: 987504,
                            city:'New York City'}})
    }
    const hanleClickback = () => {
        Setcustomer({...customer,// คัดลอกค่าเดิมของ customer
            name:'John',
            address:{...customer.address,// คัดลอกค่าเดิมของ address
                zipcode: 1150,
                city:'San Francisco'}})
    }
  return (
    <>
         {customer.name} <br />
         {customer.address.city} <br />
         {customer.address.zipcode} <br />
         <button onClick={hanleClick}>Click me</button>
         <button onClick={hanleClickback}>Click me back</button>
    </>
  )
}

export default UpdateNestedObeject