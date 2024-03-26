import PropTypes from 'prop-types';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    const { id, author, image, category, tags, rating, bookName } = book;



    return (
        <Link to={`/bookDetail/${id}`}>
            <div className=" cursor-pointer card bg-base-100 shadow-xl rounded-lg border-2 border-[#DCDCDC] p-5">
                <figure className='border-color p-4 mb-6'>
                    <img src={image} alt="Book" />
                </figure>
                <div className="card-actions justify-start">
                    <div className="hashtag">{tags[0]}</div>
                    <div className="hashtag">{tags[1]}</div>
                </div>
                <div className="card-body p-3">
                    <h2 className="card-title text-2xl font-bold">{bookName}!</h2>
                    <p className='font-[500] sec-title'>By: {author}</p>
                </div>
                <hr />
                <div className="flex justify-between items-center mt-4">
                    <p className='font-[500] sec-title'>{category}</p>
                    <div className="flex justify-end gap-4 items-center">
                        <p className='font-[500] sec-title'>{rating}</p>
                        <CiStar className='font-[500] sec-title text-xl' />
                    </div>
                </div>
            </div>
        </Link>
    );
}

Book.propTypes = {
    book: PropTypes.object.isRequired
}

export default Book;