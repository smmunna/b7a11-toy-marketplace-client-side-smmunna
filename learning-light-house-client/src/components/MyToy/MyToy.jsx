import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import UpdateToy from './UpdateToy';

const MyToy = () => {
    const { user } = useContext(AuthContext)
    const [mytoys, setMytoys] = useState([])
    useEffect(() => {
        fetch(`https://b7a11-toy-marketplace-server-side-smmunna.vercel.app/toys/mytoys?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMytoys(data))
    }, [])
    return (
        <div className='py-5'>
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
                                    <td> ${mytoy.price}</td>
                                    <td>{mytoy.quantity}</td>
                                    <td>{mytoy.category}</td>
                                    <td className='text-center'><Link to={`/toydetails/${mytoy._id}`}><span className='btn btn-info' >View Details</span></Link></td>
                                    <td className='text-center'><label htmlFor="my-modal-3" className="btn btn-accent">Update</label></td>
                                    <td className='text-center'><button className='btn btn-error'>Delete</button></td>
                                    <UpdateToy mytoy={mytoy}/>
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
