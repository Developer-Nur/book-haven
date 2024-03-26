import { useEffect, useState } from "react";
import useBookData from "../Hook/useBookData";
import { useParams } from "react-router-dom";


const BookDetail = () => {
    const [singleData, setSingleData] = useState({});
    const { id } = useParams();
    const books = useBookData();

    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating, } = singleData || {};


    useEffect(() => {
        const data = books.find(item => item.id == id);
        if (data) {
            setSingleData(data)
        }
    }, [books, id]);

    return (
        <>
            <div className="lg:flex justify-between items-center gap-3 mt-10">
                <div className="lg:w-[50%]">
                    <img className="rounded-lg w-[90%]" src={image} alt="Book Cover Images" />
                </div>
                <div className="lg:w-[47%]">
                    <h2 className="text-[40px] font-bold prim-title">{bookName}</h2>
                    <p className="text-xl font-[500] sec-title my-6 ">By: {author}</p>
                    <hr />
                    <p className="text-xl font-[500] sec-title my-2">{category}</p>
                    <hr />
                    <p className="sec-title py-7"> <span className="font-bold prim-title">Review:</span> {review}</p>
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
                    <hr />
                    <div className="grid grid-cols-2 py-4 gap-2">
                        <p className="sec-title">Number of Pages: </p>
                        <span className="prim-title font-semibold">{totalPages}</span>
                        <p className="sec-title">Publisher: </p>
                        <span className="prim-title font-semibold">{publisher}</span>
                        <p className="sec-title">Year of Publishing: </p>
                        <span className="prim-title font-semibold">{yearOfPublishing}</span>
                        <p className="sec-title">Rating: </p>
                        <span className="prim-title font-semibold">{rating}</span>
                    </div>
                    <div className="navbar-end space-x-3">
                        <a className="btn border-2 border-[#DCDCDC] bg-white sec-title text-xl font-semibold">Read</a>
                        <a className="btn btn-sec text-white text-xl font-semibold">Wishlist</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookDetail;