import React from 'react'
import { z } from 'zod'
import {zodResolver} from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';

const categories = ['Groceries','utility','Entertainment'] as const;

const schema = z.object({
    description:z.string().min(3,{message:"description should be at least 3 characters"}).max(50),
    amount:z.number({invalid_type_error:'amount must be require'}).min(10).max(50),
    category:z.enum(categories,{
        errorMap: () => ({message:'Category is Required'})
    })
});

type FormData = z.infer<typeof schema>

interface Props {
    onSubmit: (data : FormData) => void
}

const FormZodCategory = ({onSubmit} : Props) => {
    const {register,handleSubmit,formState:{errors},reset} = useForm<FormData>({resolver:zodResolver(schema)});

    return (
        <>
            <form onSubmit={handleSubmit(data => {
                onSubmit(data);
                reset();
            })}>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">description</label>
                    <input type="text" className="form-control" {...register('description')}/>
                    {errors.description && <p className='text-danger'>{errors.description?.message}</p>} 
                </div>
                <div className="mb-3">
                    <label htmlFor=" amount" className="form-label">amount</label>
                    <input type="number" className="form-control" {...register('amount',{valueAsNumber:true})}/>
                    {errors.amount && <p className='text-danger'>{errors.amount?.message}</p>} 
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select className="form-select" {...register('category')}>
                        <option value=""></option>
                        {categories.map(category => <option key={category} value={category}>{category}</option>)}
                    </select>
                    {errors.category && <p className='text-danger'>{errors.category?.message}</p>} 
                </div>
                <button className="btn btn-primary" type='submit'>Submit</button>
            </form>
        </>
    )
}


export default FormZodCategory


