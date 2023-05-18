import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './ToyDetails.css'

const ToyDetails = () => {
    const data = useLoaderData()
    return (
        <div className='details-card px-5 py-5 md:px-20'>
            <h3 className='text-3xl text-center mb-2  font-semibold'>Details</h3>
            <hr />
            <div className='grid grid-cols-1 md:grid-cols-2 items-center md:gap-10'>
                <div className='img-card'>
                    <img src={data.img} className='' width={350} alt="" />
                </div>
                <div>
                    <div className='py-5 space-y-4'>
                        <h3 className='text-2xl font-semibold'>{data.name}</h3>
                        <h4><span className='font-semibold'>Price:</span> ${data.price}</h4>
                        <h4><span className='font-semibold'>Quantity:</span> {data.quantity ? <><span className='text-green-500'>{data.quantity}</span></> : <><span className='text-red-500'>{data.quantity}</span></>}</h4>
                        <h4><span className='font-semibold'>Rating:</span> {data.rating}</h4>
                        <h4>{data.sellername ? <><span className='font-semibold'>Seller:</span> {data.sellername}</> : ''}</h4>
                        <div className='text-justify space-y-2'><span className='font-semibold'>Description: <br /> </span>
                            <div className='leading-8'>
                                {data.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ToyDetails;
