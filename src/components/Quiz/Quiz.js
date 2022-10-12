import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quizData = useLoaderData()
    console.log(quizData)
    return (
        <div>
            <h1> This is from quiz</h1>
        </div>
    );
};

export default Quiz;