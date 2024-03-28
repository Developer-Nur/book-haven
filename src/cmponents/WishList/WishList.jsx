import useWishListLocalStorage from "../Hook/useWishListLocalStorage";
import WishLishCard from "../WishListCard/WishLishCard";


const WishList = () => {

    const {wishListBooks} = useWishListLocalStorage();
    console.log("This is the wish list", wishListBooks)

    return (
        <div className="mt-7">
            {
                wishListBooks.map((wishedbook,index)=> <WishLishCard key={index} wishedbook={wishedbook}></WishLishCard>)
            }
            
        </div>
    );
};

export default WishList;