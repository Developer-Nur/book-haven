import { NavLink } from "react-router-dom";


const Header = () => {

    const links = <>
        <li><NavLink to="/" className="menu-text">Home</NavLink></li>
        <li><NavLink to="/listedBooks" className="menu-text">Listed Books</NavLink></li>
        <li><NavLink to="/pagesToRead" className="menu-text">Pages to Read</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Listed Books</a></li>
                        <li><a>Pages to Read</a></li>
                    </ul>
                </div>
                <p className="prim-title text-2xl lg:text-3xl font-bold">Book Haven</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-3">
                <a className="btn theme-bg text-white text-xl font-semibold">Sign In</a>
                <a className="btn btn-sec text-white text-xl font-semibold">Sign Up</a>
            </div>
        </div>
    );
};

export default Header;