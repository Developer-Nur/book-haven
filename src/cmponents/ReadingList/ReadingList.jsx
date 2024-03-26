import useLocalStorage from "../Hook/useLocalStorage";
import ReadingListCard from "../ReadingListCard/ReadingListCard";



const ReadingList = () => {

    const { localStorageReadingList } = useLocalStorage();


    return (
        <div className="mt-7">
            {
                localStorageReadingList.map((readingBook, index) => <ReadingListCard key={index} readingBook={readingBook}></ReadingListCard>)
            }
        </div>
    );
};

export default ReadingList;