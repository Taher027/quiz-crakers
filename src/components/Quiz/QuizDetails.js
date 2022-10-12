import React from 'react';

const QuizDetails = ({ SingleQuestion }) => {
    // console.log(SingleQuestion)
    const { question, options, correctAnswer } = SingleQuestion;
    
    return (
        <div>
            <div className='border m-5 p-5'>
                <h2>{question}</h2>
                <p className='mt-2'>Answer:</p>
                <div className='grid sm:grid-cols-none md:grid-cols-2 lg:grid-cols-4 '>
                    
                    <button className='m-6 p-4 bg-slate-100'>1: {options[0]}</button>
                    <button className='m-6 p-4 bg-slate-100'>2: {options[1]}</button>
                    <button className='m-6 p-4 bg-slate-100'>3: {options[2]}</button>
                    <button className='m-6 p-4 bg-slate-100'>4: {options[3]}</button>
                </div>

            </div>
            <p></p>
        </div>
    );
};

export default QuizDetails;