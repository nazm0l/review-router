import React from 'react';
import chicken from '../../images/chicken.png'

const Header = () => {
    return (
        <div className='grid md:grid-cols-2 items-center bg-pink-100'>
            <div className='order-last'>
                <h2 className='text-3xl font-bold'>Best recommended chicken<br />Based on our <span className='text-orange-600'>Reviews</span> feature</h2>
                <p className='text-xl mt-2'>Here you can see best chicken based on our features</p>
                <button className='bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full mt-5'>View Reviews</button>
            </div>
            <div className='flex justify-center md:order-last'>
                <img src={chicken} alt="" />
            </div>
        </div>
    );
};

export default Header;