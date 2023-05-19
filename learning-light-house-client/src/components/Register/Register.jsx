import React, { useContext, useEffect, useState } from 'react';
import register from '../../assets/images/welcome.png'
import { Helmet } from "react-helmet";
import { AuthContext } from '../../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()
    const [regerror, setRegerror] = useState('')

    // Getting the exact path;
    let from = location.state?.from?.pathname || "/";

    // Register button functionality;
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const displayName = form.displayName.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;

        if (password.length < 6) {
            const passError = "Password Length Must be 6 character long"
            setRegerror(passError)
            return
        }

        else {
            setRegerror('')

        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                updateUser(user, displayName, photoURL)
                window.location.reload()
                navigate('/')
            })
            .catch((error) => {
                const regerror = error.message;
                if (regerror == 'Firebase: Error (auth/email-already-in-use).') {
                    const newErrormsg = 'Email already in use'
                    setRegerror(newErrormsg)
                }
            })

    }

    return (
        <div className="lg:px-20 hero min-h-screen">
            <Helmet>
                <title>Register | Learning Lighthouse</title>
            </Helmet>
            <div className="lg:flex">
                <div className="text-center lg:text-left">
                    <div>
                        <img src={register} className='' alt="" />
                    </div>
                </div>
                <div className=" shadow-2xl bg-slate-100 lg:w-2/3">
                    <form onSubmit={handleRegister}>
                        <div className="card-body">
                            <h3 className='text-2xl font-semibold'>Please Register</h3>
                            <p>{regerror ? <span className='text-red-600 font-semibold'>{regerror}</span> : ''}</p>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='displayName' placeholder=" Enter your name" required className="py-2" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder=" Enter your email" required className="py-2" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder=" Enter your password" required className="py-2" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name='photoURL' placeholder=" Enter your photo url" required className="py-2" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-info w-52">Register</button>
                            </div>
                            <div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
