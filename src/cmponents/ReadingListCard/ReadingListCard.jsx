import '../../../src/index.css'
import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { IoMdPeople } from "react-icons/io";
import { RiPagesLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const ReadingListCard = ({ readingBook }) => {
    const { id, author, image, category, tags, rating, bookName, yearOfPublishing, publisher, totalPages } = readingBook
    return (
        <div className=" lg:flex justify-start items-start gap-6 rounded-lg border-2 border-[#DCDCDC] p-5 mb-5">
            <div className='border-color p-2 mb-6 lg:w-[230px] rounded-lg'>
                <img className='rounded-lg w-full' src={image} alt="Book" />
            </div>
            <div>
                <h2 className="card-title text-2xl font-bold mb-5">{bookName}!</h2>
                <p className='font-[500] sec-title mb-2'>By: {author}</p>
                <div className='lg:flex justify-start items-center gap-4 mt-4'>
                    <div className=" flex justify-start items-center space-x-2">
                        <p className="font-bold prim-title">Tag</p>
                        <div className="flex justify-between items-center">
                            {tags && tags.map((tag, index) => (
                                <div key={index}>
                                    <span className="hashtag mr-2">#{tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex justify-start items-center pt-3 lg:pt-0'>
                        <CiLocationOn /><p className='ml-3'>Year of Publishing: {yearOfPublishing}</p>
                    </div>
                </div>
                <div className='flex justify-start items-center gap-6 mt-4'>
                    <div className=" flex justify-between items-center">
                        <div className='flex justify-between items-center'>
                            <IoMdPeople />
                            <p className='ml-3'>Publisher: {publisher}</p>
                        </div>
                    </div>
                    <div className='flex justify-around items-center'>
                        <RiPagesLine /><p className='ml-3'>Page {totalPages}</p>
                    </div>
                </div>
                <hr className='my-4' />
                <div className='flex justify-start items-center gap-6'>
                    <p className='py-1 px-3 rounded-3xl category-bg'>Category: {category}</p>
                    <p className='py-1 px-3 rounded-3xl rating-bg'>Rating: {rating}</p>
                    <Link to={`/bookDetail/${id}`} ><button className='theme-bg text-white py-1 px-3 rounded-3xl hover:text-black'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

ReadingListCard.propTypes = {
    readingBook: PropTypes.object.isRequired
}

export default ReadingListCard;