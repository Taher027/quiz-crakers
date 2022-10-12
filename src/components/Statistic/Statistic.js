import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Statistic = () => {
    const { quizData } = useLoaderData();
    const data = quizData.data;
    console.log(data)
    return (
        <div className='container mx-auto '>

            <div className='flex justify-center mt-16 bg-gray-100 p-6 '>
                <LineChart width={400} height={500} data={data}>
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
        </div>
    );
};

export default Statistic;