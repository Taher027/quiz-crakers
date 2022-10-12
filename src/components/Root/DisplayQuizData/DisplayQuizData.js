import React from 'react';
import { Link } from 'react-router-dom';

const DisplayQuizData = ({ singleQuizdata }) => {
    console.log(singleQuizdata);
    const { id, logo, name, total } = singleQuizdata;

    return (
        
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-slate-400'>

            <img className='w-52' src={logo} alt="" />
            <h3 className='mt-1'>{name}</h3>
            <p className=''>Quiz: {total}</p>
            <Link to={`../quiz/${id}`} >  <button className='px-3 py-1 rounded mt-2 bg-blue-500 '>Start Quiz</button>  </Link >

        </div>
        
       

    );
};

export default DisplayQuizData;