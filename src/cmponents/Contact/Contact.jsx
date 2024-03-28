import { FaPhoneVolume } from "react-icons/fa6";
const Contact = () => {
    return (
        <div>

            <section className="h-[100px]  bg-[#59c6d2] rounded pt-[20px] mb-10">
                <h3 className="text-[40px] font-bold prim-title text-center">Contact Us</h3>
            </section>

            <h2 className="prim-title text-4xl py-12">Fill out the form to get latest <br></br>news from us</h2>

            <div className="lg:flex justify-between items-start gap-5">
                <div className="lg:w-[45%]">
                    <label className=" input input-bordered flex items-center gap-2 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" className="grow" placeholder="Name" />
                    </label>
                    <label className=" input input-bordered flex items-center gap-2 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="text" className="grow" placeholder="Email" />
                    </label>
                    <button> <a className="btn btn-sec text-white text-xl font-semibold">Submit</a></button>
                </div>
                <div className="lg:w-[45%] text-center flex items-center justify-center mt-10 lg:mt-0 ">
                    <div className="theme-bg hover:bg-[#59c6d2] w-full lg:w-[60%] p-12 rounded-lg">
                        <h5 className="text-2xl font-semibold text-white mb-2 ">Call us on: </h5>
                        <p className="text-2xl font-semibold text-white flex justify-start items-center gap-2"> <FaPhoneVolume />   +094-6394357</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;