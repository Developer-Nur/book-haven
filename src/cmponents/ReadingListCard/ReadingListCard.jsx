import PropTypes from 'prop-types';
import { CiStar } from "react-icons/ci";

const ReadingListCard = ({ readingBook }) => {
    const { id, author, image, category, tags, rating, bookName } = readingBook
    return (
        <div className=" flex justify-start items-center gap-6 rounded-lg border-2 border-[#DCDCDC] p-5">
            <div className='border-color p-2 mb-6 w-[230px] rounded-lg'>
                <img className='rounded-lg' src={image} alt="Book" />
            </div>
            <div>
                <h2 className="card-title text-2xl font-bold mb-2">{bookName}!</h2>
                <p className='font-[500] sec-title mb-2'>By: {author}</p>
                <hr />
                <div>
                <div className="card-actions justify-start pb-4">
                    <p className="font-bold prim-title">Tag</p>
                    <div className="flex justify-start items-center">
                        {tags && tags.map((tag, index) => (
                            <div key={index}>
                                <span className="hashtag">{tag}</span>
                            </div>
                        ))}
                    </div>
                </div>
                    <div>
                            <p>Year of Publishing:{}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

ReadingListCard.propTypes = {
    readingBook: PropTypes.object.isRequired
}

export default ReadingListCard;