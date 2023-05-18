import React from 'react';

const ToyTable = ({ data, index }) => {
    const { _id, name, sellername, selleremail, category, quantity, rating, price } = data
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{category}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td>Details</td>
            <td className='text-center'>Delete</td>
            <td className='text-center'>Update</td>
        </tr>
    );
}

export default ToyTable;
