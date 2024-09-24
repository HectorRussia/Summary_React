import { useEffect, useState } from "react"

/* useEffect (()=> {}) = Execute code after component rendered */

const ProductList = ({category,food} : {category : string , food : string}) => {

    const [products,setProduct] = useState<string[]>([]);

    const [fastfood,setFastfood] = useState<string[]>([]);

    useEffect(()=> {
        console.log('Fetching products', category);
        setProduct(['Clothing','Household']);
        console.log('Fetching foods', food);
        setFastfood(['burger','pizza']);
    },[category,food])

    return (
        <>
            ProductList
        </>
    )
}

const UnderstanUseEffect = () => {
  
    const [category,setCategory] = useState('');
    const [meal,setMeal] = useState('');
    return (
    <div>
        <select className="form-control" onChange={(event)=> setCategory(event.target.value)}>
            <option value=""></option>
            <option value="Clothing">Clothing</option>
            <option value="Household">Household</option>
        </select>
        <select className="form-control" onChange={(event)=> setMeal(event.target.value)}>
            <option value=""></option>
            <option value="burger">burger</option>
            <option value="pizza">pizza</option>
        </select>
        <ProductList category={category} food = {meal}></ProductList>
    </div>
  )
}

export default UnderstanUseEffect