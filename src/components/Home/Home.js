import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayQuizData from '../Root/DisplayQuizData/DisplayQuizData';

const Home = () => {
    const { quizData } = useLoaderData();
    const quizDataLoad = quizData.data;
    return (
        <div>
            {
                quizDataLoad.map(singleQuizdata => <DisplayQuizData

                    key={singleQuizdata.id}
                    
                    singleQuizdata={singleQuizdata}



                ></DisplayQuizData>)
            }
        </div>
    );
};

export default Home;