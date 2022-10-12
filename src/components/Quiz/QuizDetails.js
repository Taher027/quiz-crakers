import React from 'react';

const QuizDetails = ({ SingleQuestion }) => {
    // console.log(SingleQuestion)
    const { question, options, correctAnswer } = SingleQuestion;

    return (
        <div>
            <div className='border m-5 p-5'>
                <h2 className='text-2xl font-semibold'>{question}</h2>
                <p className='mt-2'>Answer:</p>
                <div className=''>
                    <div> <input className='mx-6' type="radio" name='option' />{options[0]} </div>
                    <div> <input className='mx-6' type="radio" name='option' />{options[1]} </div>
                    <div> <input className='mx-6' type="radio" name='option' />{options[2]} </div> 
                    <div> <input className='mx-6' type="radio" name='option' />{options[3]} </div>
                </div>

            </div>
            <p></p>
        </div>
    );
};

export default QuizDetails;