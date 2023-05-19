import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const EngShop = ({ engdata }) => {
    const { _id, name, price, rating, img } = engdata
    const hadlebtn = () => {
        Swal.fire('You have to login first ... !')
    }
    return (
        <div className="card w-full bg-base-100 shadow-xl" data-aos="fade-right">
            <figure><img src={img} className='p-5' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <div className="card-actions justify-end" onClick={hadlebtn}>
                    <Link to={`/toydetails/${_id}`}><button className='button p-2 text-white rounded w-32 text-center hover:bg-warning'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
}

export default EngShop;
