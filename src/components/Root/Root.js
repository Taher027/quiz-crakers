import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';

const Root = () => {
    const { quizData } = useLoaderData();
    const quiz = quizData.data;
    console.log(quiz)
    return (
        <div>
            <Header ></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;