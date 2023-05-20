import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import './EngShop.css'
import ReactStars from "react-rating-stars-component";
import { AuthContext } from '../../../provider/AuthProvider';

const EngShop = ({ engdata }) => {
    const { user } = useContext(AuthContext)
    const { _id, name, price, rating, img } = engdata

    const hadlebtn = () => {
        if (!user) {
            Swal.fire('You have to login first ... !')
        }
    }
    return (
        <div className="card myfullcard w-full bg-base-100 shadow-xl" data-aos="fade-right">
            <figure><img src={img} className='p-5 h-56' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <ReactStars
                    count={5}
                    value={rating}
                    size={24}
                    edit={false}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                />
                <div className="card-actions justify-end" onClick={hadlebtn}>
                    <Link to={`/toydetails/${_id}`}><button className='button p-2 text-white rounded w-32 text-center hover:bg-warning'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
}

export default EngShop;
