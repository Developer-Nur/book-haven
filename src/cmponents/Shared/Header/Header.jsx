import { NavLink } from "react-router-dom";
import '../../../index.css'


const Header = () => {

    const links = <>
        <NavLink to="/" className="menu-text hover:border-2 hover:border-[#23be0a]">Home</NavLink>
        <NavLink to="/listedBooks" className="menu-text hover:border-2 hover:border-[#23be0a]">Listed Books</NavLink>
        <NavLink to="/pagesToRead" className="menu-text hover:border-2 hover:border-[#23be0a]">Pages to Read</NavLink>
        <NavLink to="/about" className="menu-text hover:border-2 hover:border-[#23be0a]">About</NavLink>
        <NavLink to="/contact" className="menu-text hover:border-2 hover:border-[#23be0a]">Contact</NavLink>
    </>

    return (
        <div className="navbar bg-base-100 mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="z-50 bg-[#22be0a] text-base menu menu-sm dropdown-content mt-3 p-4  rounded-box w-52 space-y-4">
                        <NavLink to="/" className="  text-white font-[500] border-b-2">Home</NavLink>
                        <NavLink to="/listedBooks" className=" text-white font-[500] border-b-2">Listed Books</NavLink>
                        <NavLink to="/pagesToRead" className=" text-white font-[500] border-b-2">Pages to Read</NavLink>
                        <NavLink to="/about" className="menu-text hover:border-2 hover:border-[#23be0a] border-b-2 textWhite font-[500]">About</NavLink>
                        <NavLink to="/contact" className="menu-text hover:border-2 hover:border-[#23be0a] border-b-2 textWhite font-[500]">Contact</NavLink>
                    </ul>
                </div>
                <p className="prim-title text-2xl lg:text-3xl font-bold">Book Haven</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <nav className="menu menu-horizontal px-1">
                    {links}
                </nav>
            </div>
            <div className="navbar-end space-x-3">
                <a className="btn theme-bg text-white text-xl font-semibold">Sign In</a>
                <a className="btn btn-sec text-white text-xl font-semibold">Sign Up</a>
            </div>
        </div>
    );
};

export default Header;