import React from 'react';
import signin from '../../assets/images/signin.png'
import GoogleLogo from '../../assets/images/googleicon.png'
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen">
            <div className="lg:flex">
                <div className="text-center lg:text-left">
                    <div>
                        <img src={signin} className='' alt="" />
                    </div>
                </div>
                <div className=" shadow-2xl bg-slate-100 lg:w-2/3">
                    <div className="card-body">
                        <h3 className='text-2xl font-semibold'>Please Login</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder=" Enter your email" className="py-2" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder=" Enter your password" className="py-2" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-info w-52">Login</button>
                        </div>
                        <div>
                            <div className='text-left my-4 mb-6'>
                                <p>Don't have account ? <Link to="/register" className='text-blue-500'>Register Now</Link> Or you can login with bellow</p>
                            </div>
                            <div className=' text-center border-2 py-3 cursor-pointer flex justify-center items-center gap-3 hover:bg-teal-100'><span><img src={GoogleLogo} width={25} alt="" /></span> <span>Signin with Google</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
