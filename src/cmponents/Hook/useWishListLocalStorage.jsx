import { useEffect, useState } from "react";
import { getWishedBookFromLocalStorage } from "../Utilites/localStorage";


const useWishListLocalStorage = () => {

    const [wishListBooks, setWishListBooks] = useState([]);

    

    useEffect(()=>{
        setWishListBooks(getWishedBookFromLocalStorage())
    },[])

    return {wishListBooks};
};

export default useWishListLocalStorage;