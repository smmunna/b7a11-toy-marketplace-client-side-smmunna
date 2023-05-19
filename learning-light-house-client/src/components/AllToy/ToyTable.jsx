import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const ToyTable = ({ data, index }) => {
    const { _id, name, sellername, selleremail, category, quantity, rating, price } = data;
    const { user } = useContext(AuthContext)

    return (
        <>
            <tr>
                {/* <td>{index + 1}</td> */}
                <td>{name}</td>
                <td>{category}</td>
                <td>${price}</td>
                <td>{quantity}</td>
                <td><Link to={`/toydetails/${_id}`}><span className='btn btn-info' >Details</span></Link></td>
            </tr>

            {/* Modal For showing all datas */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>

        </>
    );
}

export default ToyTable;
