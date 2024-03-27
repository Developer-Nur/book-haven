import { useEffect, useState } from "react";


const useBookData = () => {

    const [books, setBooks] = useState([]);


    useEffect(() => {
        const fetchData = () => {
            fetch('/data.json')
                .then(res => res.json())
                .then(data => setBooks(data))
                .catch(error => console.error('Error fetching data:', error)); // Handle errors
        };
        fetchData();
    }, []);

    return (books);
};

export default useBookData;