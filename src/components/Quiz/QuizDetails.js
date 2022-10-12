import React from 'react';
import img from '../../assets/eyes.png'

const QuizDetails = ({ SingleQuestion }) => {
    // console.log(SingleQuestion)
    const { question, options, correctAnswer } = SingleQuestion;

    return (
        <div className='w-9/12 mx-auto '>
            <div className='border m-5 p-5 shadow-md'>
                <div className='grid sm: grid-cols-none md:grid-cols-2 justify-end'>
                    <h2 className='text-1xl font-semibold'>{question}</h2>
                    <img  src={img} alt="" />
                </div>
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