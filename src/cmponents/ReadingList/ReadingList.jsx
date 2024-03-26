import useLocalStorage from "../Hook/useLocalStorage";
import ReadingListCard from "../ReadingListCard/ReadingListCard";



const ReadingList = () => {

    const {localStorageReadingList} = useLocalStorage();
    
 
    return (
        <div>
            <h2>This is the reading list:</h2>
            <div >
                {
                    localStorageReadingList.map((readingBook,index)=> <ReadingListCard key={index} readingBook={readingBook}></ReadingListCard>)
                }
            </div>
        </div>
    );
};

export default ReadingList;