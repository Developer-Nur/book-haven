
import Book from "../Book/Book";

import useBookData from "../Hook/useBookData";



const AllBooks = () => {

    const books = useBookData()
    

    return (
        <div className="mt-12">
            <h3 className="text-[40px] font-bold prim-title text-center mb-8">Books</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 md:justify-between items-center gap-4">
                {
                    books.map((book, id) => <Book key={id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default AllBooks;