import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='font-bold mt-5 text-5xl text-center'>Question And Answer</h1>
            <div className='w-1/2 rounded-lg my-8 mx-auto bg-gray-300'>
                <article className='my-5 pt-5 '>
                <h1 className='font-semibold text-xl px-8'><small className='font-bold text-xl '>Question: </small> What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </h1>
                <p className='font-semibold px-8'><small className='font-bold text-xl'>Answer:</small> Access tokens are short-lived credentials that grant access to protected resources. Refresh tokens are long-lived credentials that can be used to request new access tokens when the old ones expire. </p>
                </article>
                <article className='my-5 pt-5'>
                <h1 className='font-semibold text-xl px-8'><small className='font-bold text-xl '>Question:</small> Compare SQL and NoSQL databases?
                </h1>
                <p className='font-semibold px-8'><small className='font-bold text-xl'>Answer:</small>SQL databases are good for traditional relational databases, while NoSQL databases are good for modern applications that require flexible data models.</p>
                </article>
                <article className='my-5 pt-5'>
                <h1 className='font-semibold text-xl px-8'><small className='font-bold text-xl '>Question:</small> What is express js? What is Nest JS (google it)?
                </h1>
                <p className='font-semibold px-8'><small className='font-bold text-xl'>Answer:</small>
                Express.js is a minimal and flexible web application framework for Node.js. It is designed to build web applications and APIs quickly and easily by providing a simple and intuitive set of features for handling HTTP requests, routing, middleware, and more. Express.js is widely used and has a large ecosystem of plugins and extensions, making it a popular choice for building web applications in Node.js.
                </p>
                <p className='px-8 font-semibold'>Nest.js is a progressive, extensible, and highly scalable Node.js framework for building efficient and reliable server-side applications. It is built on top of Express.js and adds additional features and architectural patterns inspired by Angular, making it suitable for building complex and enterprise-grade applications. Nest.js provides a modular structure, dependency injection, TypeScript support, and other powerful features that help developers to create scalable and maintainable server-side applications.</p>
                </article>

                <article className='my-5 pt-5'>
                <h1 className='font-semibold text-xl px-8'><small className='font-bold text-xl '>Question:</small> Compare SQL and NoSQL databases?
                </h1>
                <p className='font-semibold px-8'><small className='font-bold text-xl'>Answer:</small>SQL databases are good for traditional relational databases, while NoSQL databases are good for modern applications that require flexible data models.</p>
                </article>
            </div>
        </div>
    );
};

export default Blogs;