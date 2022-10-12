import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import DisplayQuizData from '../Root/DisplayQuizData/DisplayQuizData';
import quizImg from '../../assets/quizImg.jpg'

const Home = () => {
    const { quizData } = useLoaderData();
    const quizDataLoad = quizData.data;
    return (
        <div className="w-4/5 mx-auto pb-8">
            <div className='mb-6 lg:flex bg-gray-100 p-4'>
                <div className="lg:w-9/12 p-12">
                    <h4 className='text-3xl text-left'>Hi, do you justify your knowledge on programming language? let try ! <br>
                    </br>
                        You find out your week point and keep update ur self.</h4>
                </div>
                <div className='lg:w-3/12 '>
                    <img className='w-72 h-100 mx-auto' src={quizImg} alt="" />

                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    quizDataLoad.map(singleQuizdata => <DisplayQuizData

                        key={singleQuizdata.id}

                        singleQuizdata={singleQuizdata}



                    ></DisplayQuizData>)
                }
            </div>
        </div>
    );
};

export default Home;