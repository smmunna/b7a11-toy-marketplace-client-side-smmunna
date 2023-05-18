import React from 'react';
import img1 from '../../../assets/images/paintings-that-glow.jpg'
import img2 from '../../../assets/images/turn-liquid-into-worms.jpg'
import img3 from '../../../assets/images/liquid-changes.gif'
import './Gallery.css'

const Gallery = () => {
    return (
        <div className='Gallery py-8 md:px-20 md:py-16'>
            <h3 className='text-2xl md:text-4xl text-center md:py-5 font-semibold'><span className='text-warning'>Get 3 fun experiments</span> delivered to your home monthly.</h3>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div>
                    <div className='my-imageg'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='text-center my-5'>
                        <h3 className='text-xl font-semibold'>Turn Liquid Into Worms.</h3>
                    </div>
                </div>
                <div>
                    <div className='my-imageg'>
                        <img src={img2} alt="" />
                    </div>
                    <div className='text-center my-5'>
                        <h3 className='text-xl font-semibold'>Draw Patterns That Glow.</h3>
                    </div>
                </div>
                <div>
                    <div className='my-imageg'>
                        <img src={img3} alt="" />
                    </div>
                    <div className='text-center my-5'>
                        <h3 className='text-xl font-semibold'> Liquid That Changes Color.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
