export const saveLocalStorage = (book) => {
    const savedbook = JSON.parse(localStorage.getItem('read')) || [];
    const exsitedbook = savedbook.find(item => item.id == book.id);
    if(!exsitedbook){
        savedbook.push(book);
        localStorage.setItem('read', JSON.stringify(savedbook));
        alert('book added')
    }
    else{
        alert('there is the book');
    }
}

export const getbookFromLocalStorage = () => {
    const book = JSON.parse(localStorage.getItem('read')) || [];
    return (book)
}

// teh get wish list from local storage

export const saveWishListLocalStorage = (book) => {
    const savedWishedBook = JSON.parse(localStorage.getItem('wish')) || [];
    const exsitedWishedBook = savedWishedBook.find(item => item.id == book.id);
    if(!exsitedWishedBook){
        savedWishedBook.push(book);
        localStorage.setItem('wish', JSON.stringify(savedWishedBook));
        alert('book added')
    }
    else{
        alert('there is the book');
    }
}

export const getWishedBookFromLocalStorage = () => {
    const wishedBook = JSON.parse(localStorage.getItem('wish')) || [];
    return (wishedBook)
}