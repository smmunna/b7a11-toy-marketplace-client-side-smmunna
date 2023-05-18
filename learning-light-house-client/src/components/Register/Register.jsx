import React from 'react';
import register from '../../assets/images/welcome.png'

const Register = () => {
    return (
        <div className="lg:px-20 hero min-h-screen">
            <div className="lg:flex">
                <div className="text-center lg:text-left">
                    <div>
                        <img src={register} className='' alt="" />
                    </div>
                </div>
                <div className=" shadow-2xl bg-slate-100 lg:w-2/3">
                    <form>
                        <div className="card-body">
                            <h3 className='text-2xl font-semibold'>Please Register</h3>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder=" Enter your name" required className="py-2" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder=" Enter your email" required className="py-2" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder=" Enter your password" required className="py-2" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" placeholder=" Enter your photo url" required className="py-2" />
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
