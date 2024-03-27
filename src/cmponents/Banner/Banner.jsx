import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className=" lg:flex justify-around items-center min-h-[556px] item-bg py-5 rounded-lg">
            <div className="space-y-6">
                <h1 className='prim-title text-5xl leading-[75px] lg:text-[56px] font-bold '>Revamp Your Shelf <br />with Essential Picks</h1>
                <Link to="/listedBooks"><button className="theme-bg text-white rounded py-2 px-4 font-bold text-xl">View The List</button></Link>
            </div>
            <div>
                <img className="w-full" src="../../../../../public/images/banner.png" alt="Banner Image" />
            </div>
        </div>
    );
};

export default Banner;