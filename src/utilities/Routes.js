import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Statistic from '../components/Statistic/Statistic'
import Blog from "../components/Blog/Blog";
import Root from "../components/Root/Root";
import { getQuizDataFromApi } from "../loaders/getDataFromApi";
import Quiz from "../components/Quiz/Quiz";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,

        children: [
            { path: '/', loader: getQuizDataFromApi, element: <Home></Home> },
            { path: 'home', loader: getQuizDataFromApi, element: <Home></Home> },
            { path: 'statistic', loader: getQuizDataFromApi, element: <Statistic></Statistic> },
            { path: 'quiz', element: <Quiz></Quiz> },
            { path: 'blog', element: <Blog></Blog> },
        ],
    },
])

export default router

