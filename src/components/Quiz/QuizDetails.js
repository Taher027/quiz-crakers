import React from 'react';
import img from '../../assets/eyes.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizDetails = ({ SingleQuestion }) => {
    // console.log(SingleQuestion)
    const { question, options, correctAnswer } = SingleQuestion;
    const check = (params) => toast(params);


    return (
        <div className='w-9/12 mx-auto '>
            <div className='border m-5 p-5 shadow-md'>
                <div className='grid sm: grid-cols-none md:grid-cols-2 justify-end'>
                    <h2 className='text-1xl font-semibold'>{question}</h2>
                    <img onClick={() => check(correctAnswer)} src={img} alt="" />
                </div>
                <p className='mt-2'>Answer:</p>
                <div className=''>
                    <div> <input onClick={()=>correctAnswer === options[0] ? check('Your ans is right') : check('Your ans is wrong')} className='mx-6' type="radio" name='option' />{options[0]} </div>
                    <div> <input onClick={() => correctAnswer === options[1] ? check('Your ans is right') : check('Your ans is wrong')} className='mx-6' type="radio" name='option' />{options[1]} </div>
                    <div> <input onClick={() => correctAnswer === options[2] ? check('Your ans is right') : check('Your ans is wrong')} className='mx-6' type="radio" name='option' />{options[2]} </div>
                    <div> <input onClick={()=>correctAnswer === options[3] ? check('Your ans is right') : check('Your ans is wrong')} className='mx-6' type="radio" name='option' />{options[3]} </div>
                </div>
                <ToastContainer />
            </div>
            <p></p>
        </div>
    );
};

export default QuizDetails;