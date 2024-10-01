import { useState } from 'react';

const UpdateNestedObjectpart2 = () => {
    const initialCustomer = {
        name: 'John',
        address: {
            city: 'San Francisco',
            zipcode: 1150
        }
    };

    const [customer, setCustomer] = useState(initialCustomer);

    const handleToggleClick = () => {
        const updatedCustomer = customer.name === 'John' ? {
            ...customer,
            name: 'Nobody',
            address: {
                ...customer.address,
                zipcode: 987504,
                city: 'New York City'
            }
        } : initialCustomer;

        setCustomer(updatedCustomer);
    };

    return (
        <>
            <p>Name: {customer.name}</p>
            <p>City: {customer.address.city}</p>
            <p>Zipcode: {customer.address.zipcode}</p>
            <button onClick={handleToggleClick}>
                {customer.name === 'John' ? 'Update Customer' : 'Restore Customer'}
            </button>
        </>
    );
};

export default UpdateNestedObjectpart2;
