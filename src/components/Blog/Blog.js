import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='grid sm:grid-cols-none md:grid-cols-none lg:grid-cols-3 gap-8 w-4/5 mx-auto  '>
            <div className='border rounded bg-slate-200 p-5'>
                <h2 className='text-2xl '>What is the purpose of React Router</h2>
                <p className='text-1xl '>Ans: React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                    Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.</p>
            </div>
            <div className='border rounded bg-slate-200 p-5'>
                <h2 className='text-2xl'>How does Context Api work?</h2>
                <p className='text-1xl '>Ans: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

                    Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.</p>
            </div>
            <div className='border rounded bg-slate-200 p-5'>
                <h2 className='text-2xl'>What is the purpose of React Router</h2>
                <p className='text-1xl '>Essentially, useRef is like a “box” that can hold a mutable value in its current property. However, useRef() is useful for more than the ref attribute. It's handy for keeping any mutable value around similar to how you'd use instance fields in classes.</p>
            </div>

        </div>
    );
};

export default Blog;