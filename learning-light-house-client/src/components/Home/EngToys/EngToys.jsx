import React from 'react';
import Eng1 from '../../../assets/images/eng1.jpg'
import './EngToy.css'

const EngToys = () => {
    return (
        <div className='EngToys px-10 lg:px-20 py-20 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 justify-center items-center ' >
            <div className='space-y-6'>
                <h3 className='text-3xl font-semibold'>Build and customize stunning Education / Engineering / Math Toys in minutes – easily.</h3>
                <p className=''>Huge collection of elements, rich customizability, flexible layouts, and fast results!
                    Choose a pre-built headers or create a custom layout that perfectly suits your needs. It’s easy, fast and friendly for educational purpose.</p>
                <div>
                    <button className='button p-3 mb-4 hover:btn-warning rounded-lg w-40 text-white'>Purchase Now</button>
                </div>
            </div>
            <div>
                <div className='lg:p-12 engimage' >
                    <img src={Eng1} className='rounded-lg shadow-2xl' alt="" />
                </div>
            </div>
        </div>
    );
}

export default EngToys;
