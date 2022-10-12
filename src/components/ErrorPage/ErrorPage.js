import React from 'react';
import img from '../../assets/404.jpg'

const ErrorPage = () => {
    return (
        <section className='container mx-auto flex items-center h-screen p-16 justify-center bg-gray-100'>
            <div >

                <img className='w-72 mx-auto' src={img} alt="" />
                <h3 className='text-3xl text-red-900'>SORRY! We couldn't find your search</h3>
            </div>
        </section>
    );
};

export default ErrorPage;