import React from 'react'
import { z } from 'zod'
import {zodResolver} from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';

const schema = z.object({
    name:z.string().min(3,{message:"Name must be at least 3 characters"}),
    age:z.number({invalid_type_error:'age must be require'}).min(18,{message:"Age must be at least 18"}),
    email:z.string().email({message:"Email must be a valid email"}),
    password:z.string().min(8,{message:"Password must be at least 8 characters"}),
    confirmPassword: z.string().min(8, { message: "Password must be at least 8 characters" })})
                        .refine(data => data.password === data.confirmPassword, {
                        message: "Passwords do not match",
                        path: ['confirmPassword'], // path of error
});

type FormData = z.infer<typeof schema>

const FormZod = () => {
    const {register,handleSubmit,formState:{errors}} = useForm<FormData>({resolver:zodResolver(schema)});

    const onsubmit = (data: FieldValues) => console.log(data);

    return (
        <>
            <form onSubmit={handleSubmit(onsubmit)}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" {...register('name')}/>
                    {errors.name && <p className='text-danger'>{errors.name?.message}</p>} 
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" {...register('password')}/>
                    {errors.password && <p className='text-danger'>{errors.password?.message}</p>} 
                </div>
                <button className="btn btn-primary" type='submit'>Submit</button>
            </form>
        </>
    )
}


export default FormZod


