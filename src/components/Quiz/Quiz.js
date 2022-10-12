import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from './QuizDetails';


const Quiz = () => {
    const quizData = useLoaderData();
    const data = quizData.data;
    const { name, questions } = data;
    return (
        <div className='mt-12 p-10'>
            <h1 className='text-3xl font-semibold text-center text-blue-900'> QUIZ OF {name}</h1>
            <div>
                {
                    questions.map(SingleQuestion => <QuizDetails key={SingleQuestion.id}
                        SingleQuestion={SingleQuestion}></QuizDetails>)
            }
</div>

        </div>
    );
};

export default Quiz;