import React, { useContext, useEffect, useState } from 'react';
import signin from '../../assets/images/signin.png'
import GoogleLogo from '../../assets/images/googleicon.png'
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { Helmet } from "react-helmet";

const Login = () => {
    const { user, googleSignIn, signInUser, loading } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate()
    const location = useLocation()
    // Getting the exact path;
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (!loading && user) {
            navigate(from, { replace: true })
        }
    }, [googleSignIn])

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                const user = result.user;

            })
            .catch(error => {
                const errorMessage = 'Invalid Useremail/Password';
                setLoginError(errorMessage)
            })

    }

    return (
        <div className="lg:px-20 hero min-h-screen">
            <Helmet>
                <title>Login | Learning Lighthouse</title>
            </Helmet>
            <div className="lg:flex">
                <div className="text-center lg:text-left">
                    <div>
                        <img src={signin} className='' alt="" />
                    </div>
                </div>
                <div className=" shadow-2xl bg-slate-100 lg:w-2/3">
                    <form onSubmit={handleLogin}>
                        <div className="card-body">
                            <h3 className='text-2xl font-semibold'>Please Login</h3>
                            <p>{loginError ? <span className='text-red-600 font-semibold'>{loginError}</span> : ''}</p>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder=" Enter your email" required className="py-2" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder=" Enter your password" required className="py-2" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-info w-52">Login</button>
                            </div>
                            <div>
                                <div className='text-left my-4 mb-6'>
                                    <p>Don't have account ? <Link to="/register" className='text-blue-500'>Register Now</Link> Or you can login with bellow</p>
                                </div>
                                <div className=' text-center border-2 py-3 cursor-pointer flex justify-center items-center gap-3 hover:bg-teal-100' onClick={googleSignIn}><span><img src={GoogleLogo} width={25} alt="" /></span> <span>Signin with Google</span></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
