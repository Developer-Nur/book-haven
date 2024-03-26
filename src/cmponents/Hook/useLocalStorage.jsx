import { useEffect, useState } from "react";
import { getbookFromLocalStorage } from "../Utilites/localStorage";


const useLocalStorage = () => {

    const [localStorageReadingList, setLocatStorageReadinglist] = useState([]);


    useEffect(() => {
        setLocatStorageReadinglist(getbookFromLocalStorage());
    },[])

    return {localStorageReadingList};
};

export default useLocalStorage;