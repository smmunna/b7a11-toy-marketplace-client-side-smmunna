import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from "react-helmet";

const MyToy = () => {
    const { user } = useContext(AuthContext)
    const [mytoys, setMytoys] = useState([])
    useEffect(() => {
        fetch(`https://b7a11-toy-marketplace-server-side-smmunna.vercel.app/toys/mytoys?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMytoys(data))
    }, [])


    const handleDelete = (id) => {
        Swal.fire({
            title: 'Do you want to delete?',
            showCancelButton: true,
            confirmButtonText: 'Delete',

        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {

                fetch(`https://b7a11-toy-marketplace-server-side-smmunna.vercel.app/toys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire('Deleted Successfully!', '', 'success')
                            const updatedData = mytoys.filter(toy => toy._id !== id)
                            setMytoys(updatedData)
                        }
                    })
            } else if (result.isDenied) {
                Swal.fire('Not Deleted, You cancelled', '', 'info')
            }
        })
    }


    if (mytoys.length <= 0) {
        return <div className='text-2xl font-semibold text-center text-red-600 py-10'>Not found any data......!</div>
    }

    return (
        <div className='py-5 px-20'>
            <Helmet>
                <title>My Toys | Learning Lighthouse</title>
            </Helmet>

            <h3 className='text-center text-2xl font-semibold'>{user?.displayName ? <>{user.displayName},</> : <>Dear User,</>} You've added these toys.</h3>
            <hr />
            <br />

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Category</th>
                            <th className='text-center'>Details</th>
                            <th colSpan={2} className='text-center'>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            mytoys.map(mytoy => (
                                <tr key={mytoy._id}>
                                    <td>{mytoy.name}</td>
                                    <td> ${mytoy?.price}</td>
                                    <td>{mytoy.quantity}</td>
                                    <td>{mytoy.category}</td>
                                    <td className='text-center'><Link to={`/toydetails/${mytoy._id}`}><span className='btn btn-info' >View Details</span></Link></td>
                                    <td className='text-center'><Link to={`/update/${mytoy._id}`}><button className="btn btn-accent">Update</button></Link></td>
                                    <td className='text-center'><button className='btn btn-error' onClick={() => handleDelete(mytoy._id)}>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MyToy;
