import React from 'react';
import './UpdateToy.css';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from "react-helmet";

const UpdateToy = () => {
    const data = useLoaderData()
    const navigate = useNavigate()
    // console.log(data)

    const handleUpdateSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updateData = { price, quantity, description }

        fetch(`https://b7a11-toy-marketplace-server-side-smmunna.vercel.app/toys/${data._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    Swal.fire(
                        'Updated Successfully',
                        'success'
                    )
                    navigate('/mytoys')
                }
            })

    }
    return (
        <div>
            <Helmet>
                <title>Update Toys | Learning Lighthouse</title>
            </Helmet>
            <div className="">
                <div className="flex justify-center items-center border-2 p-6">
                    <div className='px-5'>
                        <form onSubmit={handleUpdateSubmit}>
                            <label htmlFor="">Price:</label> <br />
                            <input type="number" name='price' placeholder="Give the price" defaultValue={data.price} className="mb-3 modal-input mt-3 w-96" /> <br />
                            <label htmlFor="">Description:</label> <br />
                            <input type="text" name='description' placeholder="Description" defaultValue={data.description} className="modal-input mt-3  w-96 " /> <br />
                            <br />
                            <label htmlFor="">Quantity: </label> <br />
                            <select name="quantity" className='select mt-3 w-96'>
                                <option value="Available">Available</option>
                                <option value="Not Available">Not Available</option>
                            </select>
                            <br />
                            <button className='btn btn-accent my-3'>Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateToy;
