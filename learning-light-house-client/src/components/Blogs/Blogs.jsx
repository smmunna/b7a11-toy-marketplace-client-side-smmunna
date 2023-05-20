import React from 'react';
import { Helmet } from "react-helmet";

const Blogs = () => {
    return (
        <div className='px-10 lg:px-20'>
            <Helmet>
                <title>Blogs Toys | Learning Lighthouse</title>
            </Helmet>
            <h3 className='text-center text-3xl py-5'>Blogs Page</h3>
            <hr />
            <div>
                <div className='mt-3'>
                    <h3 className='font-semibold'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                    <div className='md:px-5 my-2 text-justify'>
                        <p>
                            Access tokens are short-lived credentials used for authentication and authorization, while refresh tokens are long-lived credentials used to obtain new access tokens when they expire. Access tokens are typically stored on the client-side, while refresh tokens should be securely stored on the server-side or in an HTTP-only cookie.
                        </p>
                        <p>
                            <span className='font-semibold'>Working Procedure:</span> <br />
                            1. The client authenticates with the server using credentials and receives an access token and a refresh token. <br />
                            2. The client includes the access token in API requests to authenticate and access protected resources. If the access token expires, the client can use the refresh token to obtain a new access token without re-authenticating.
                        </p>
                    </div>
                </div>
                <div className='my-3'>
                    <h3 className='font-semibold mb-3'>2. SQL Vs NoSQL?</h3>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Basis</th>
                                    <th>SQL</th>
                                    <th>NoSQL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>Structured</th>
                                    <td>Use structured query language and have a predefined schema.</td>
                                    <td>NoSQL databases are schema-less.</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <th>Relational & No Relational</th>
                                    <td>QL databases store data in tables with predefined relationships <br /> between them, allowing for complex querying and data integrity through constraint</td>
                                    <td> NoSQL databases store data in a variety of formats, <br /> such as key-value pairs, documents, columnar, or graph structures, <br /> depending on the database type</td>

                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <th>Scalability</th>
                                    <td>SQL databases scale vertically by adding more powerful <br /> hardware resources to handle increased data and user load.</td>
                                    <td>NoSQL databases excel at horizontal scalability, allowing for <br /> distributed data storage and processing across multiple nodes <br /> to handle large amounts of data and traffic.</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <h3 className='font-semibold'>3. What is express js? What is Nest JS ?</h3>
                    <div className='px-5 my-2'>
                        <p className='text-justify'>
                            <span className='font-semibold'> Express.js:</span> <br />
                            Express.js is a minimalistic and flexible web application framework for Node.js, widely used for building web applications and APIs. It provides a simple and intuitive API for handling HTTP requests, routing, middleware, and more.
                        </p>
                        <p className='text-justify'>
                            <span className='font-semibold'>Nest.js:</span> <br />
                            Nest.js is a progressive and scalable Node.js framework for building efficient and reliable server-side applications. It  follows architectural patterns like Dependency Injection, Decorators, and Modules to provide a structured and maintainable codebase for building scalable applications.
                        </p>
                    </div>
                </div>
                <div>
                    <h3 className='font-semibold'>4. What is MongoDB aggregate and how does it work ?</h3>
                    <div className='px-5 my-2 text-justify'>
                        <p>
                            MongoDB's aggregate is a powerful operation used for data aggregation and processing in MongoDB. It allows us to perform complex queries, transformations, and calculations on our data using a pipeline of stages. Each stage in the pipeline applies a specific operation, such as filtering, grouping, sorting, or joining, to the input documents, allowing us to manipulate and reshape the data to meet our specific requirements.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogs;
