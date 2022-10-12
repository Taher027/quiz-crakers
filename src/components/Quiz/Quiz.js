import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quizData = useLoaderData();
    const data = quizData.data;
    console.log(data)
    return (
        <div>
            <h1> This is from quiz</h1>
        </div>
    );
};

export default Quiz;