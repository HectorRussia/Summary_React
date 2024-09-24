export interface Expense {
    id:number;
    description: string;
    amount: number;
    category: string;
}

interface Props {
    expenses: Expense[];
    onDelete: (id:number) => void;
}

const ExpenseList = ({expenses,onDelete} : Props) => {

    if(expenses.length === 0 ) return <p className='text-danger'>No value here</p>
    
    return (
        <>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expensess) => (<tr key={expensess.id}>
                    <td>{expensess.description}</td>
                    <td>{expensess.amount}</td>
                    <td>{expensess.category}</td>
                    <td><button className='btn btn-outline-danger' onClick={() => onDelete(expensess.id)}>Delete</button></td>
                </tr>))}
            </tbody>
            <tfoot>
                <tr>
                <td>Total</td>
                <td>${expenses.reduce((acc, expense) => expense.amount + acc, 0).toFixed(2)}</td>
                </tr>
            </tfoot>
        </table>
        </>
    )
}



export default ExpenseList