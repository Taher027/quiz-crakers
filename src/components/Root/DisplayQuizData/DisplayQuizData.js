import React from 'react';

const DisplayQuizData = ({ singleQuizdata }) => {
    const { id, logo, name, total } = singleQuizdata;
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-slate-500'>
            <img src={logo} alt="" />
            <h3>name: {name}</h3>
            <p className=''>Quiz:{total}</p>
            <button className='btn-primary rounded'>Start Quiz</button>
        </div>
    );
};

export default DisplayQuizData;