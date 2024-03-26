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