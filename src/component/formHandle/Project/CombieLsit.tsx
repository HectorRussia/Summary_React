import { useState } from "react";
import ExpenseList, { Expense } from "./ExpenseList";
import { FilterCategory } from "./FilterCategory";
import FormZodCategory from "./FormZodCategory";

const CombieList = () => {

  const [expenses,setexpenses] = useState<Expense[]>([
    {id:1,description:'AAA',amount:10,category:'utility'},
    {id:2,description:'BBB',amount:10,category:'utility'},
    {id:3,description:'CCC',amount:10,category:'utility'},
    {id:4,description:'DDD',amount:10,category:'utility'},
    {id:5,description:'EEE',amount:10,category:'utility'},
  ]);

  const [selectedcategory,setselectedCategory] = useState<string | undefined>();

  const onDelete = (id:number) => {
      const DelteExpenses = expenses.filter(expenses => expenses.id!== id);
      setexpenses(DelteExpenses);
  }

  const visibleExpense = selectedcategory ? expenses.filter((e)=> (e.category === selectedcategory)) : expenses;

  return (
      <>
        <FormZodCategory  onSubmit = {expense => setexpenses([...expenses,{...expense,id:expenses.length + 1}])} />
        <FilterCategory onSelectCategory = {(category)=> setselectedCategory(category)}/>
        <ExpenseList expenses={visibleExpense} onDelete={(id: number)=> onDelete(id)}/>
      </>
  )
}

export default CombieList