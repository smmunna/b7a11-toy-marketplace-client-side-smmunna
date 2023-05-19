import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import Logo from '../../assets/favicon/fav_ico.png'
import ActiveLink from '../ActiveLink/ActiveLink';
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {
    const { user, logOut, loading } = useContext(AuthContext)
    const navLink = <>
        <li><ActiveLink to="/">Home</ActiveLink></li>
        <li><ActiveLink to="/alltoys">All Toys</ActiveLink></li>
        {
            user ?
                <>
                    <li><ActiveLink to="/addtoys">Add Toys</ActiveLink></li>
                    <li><ActiveLink to="/mytoys">My Toys</ActiveLink></li>
                </>
                :
                <>
                    
                </>
        }
        <li><ActiveLink to="/blogs">Blogs</ActiveLink></li>
    </>
    return (
        <div className="navbar py-3 lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="smscreenmenu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <img src={Logo} width={40} alt="LightHouse" /> <h3 className="brand pt-2 ml-8 md:ml-0 lg:ml-2 text-xl lg:text-3xl font-semibold">Learning Lighthouse</h3>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            {
                user ?
                    <>
                        <div className="navbar-end">
                            <>
                                <div className="avatar mr-4 hidden lg:flex items-center  md:block">
                                    <div className=" w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user.photoURL} title={`${user?.displayName}`} />
                                    </div>
                                </div>
                            </>
                            <Link className='button p-2 text-white rounded w-32 text-center hover:bg-warning' onClick={logOut}>Logout</Link>
                        </div>
                    </>
                    :
                    <>
                        <div className="navbar-end">
                            <Link to="/login" className='button p-2 text-white rounded w-32 text-center hover:bg-warning'>Login</Link>
                        </div>
                    </>
            }
        </div>
    );
}

export default Header;
