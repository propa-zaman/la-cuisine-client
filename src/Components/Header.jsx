import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';




const Header = () => {

    const { user, handleSignout } = useContext(AuthContext);
    const handleLogout = () => {
        handleSignout();
    };


    return (
        <div className='container mx-auto'>

            <div className="navbar bg-secondary-focus text-secondary-content">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to="/"><li><a>Home</a></li></Link>
                            <Link to="/blog"><li><a>Blog</a></li></Link>
                        </ul>
                    </div>
                    <Link to="/"><a className="btn btn-ghost normal-case text-4xl">La Cuisine</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link to="/"><li><a>Home</a></li></Link>
                        <Link to="/blog"><li><a>Blog</a></li></Link>
                    </ul>
                </div>
                <div className=" md:mr-10 mr-3 ml-auto">
                    <>
                        {user ? (
                            <>
                                {user.photoURL && (
                                    <img title={user.displayName}
                                        className="h-12 rounded-full border-2 border-primary"
                                        src={user?.photoURL}
                                        alt=""
                                    />
                                )}
                                <button onClick={handleLogout} className="ml-5 btn btn-primary">
                                    Logout
                                </button>
                            </>
                        ) : (
                            <Link to="/login">
                                <button className="btn btn-primary">Login</button>
                            </Link>
                        )}
                    </>
                </div>

            </div>

        </div>

    );
};


export default Header;
