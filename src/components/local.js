const getReadBookCard =()=>{
    const getReadBook = localStorage.getItem('read-card');
    if(getReadBook){
        return JSON.parse(getReadBook)
    }
    return [];
}
const saveReadBookCard =(readBook)=>{
    const saveReadBooks = getReadBookCard();
    const exitedReadBooks = saveReadBooks.find(saveReadBook=>saveReadBook.bookId === readBook.id);
    if(!exitedReadBooks){
        saveReadBooks.push(readBook);
        localStorage.setItem('read-card',JSON.stringify(saveReadBooks))
    }
    return saveReadBooks;
}
const getWishBookCard =()=>{
    const getWishBook = localStorage.getItem('wish-card');
    if(getWishBook){
        return JSON.parse(getWishBook)
    }
    return [];
}
const saveWishBookCard =(wishBook)=>{
    const saveWishBooks = getWishBookCard();
    const exitedWishBooks = saveWishBooks.find(saveWishBook=>saveWishBook.bookId === wishBook.id);
    if(!exitedWishBooks){
        saveWishBooks.push(wishBook);
        localStorage.setItem('wish-card',JSON.stringify(saveWishBooks))
    }
    return saveWishBooks;
}
export {getReadBookCard,saveReadBookCard,getWishBookCard,saveWishBookCard};
