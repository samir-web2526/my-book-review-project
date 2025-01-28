import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadBookCard, getWishBookCard } from "../local";
import ReadListedBook from "../ReadListedBook/ReadListedBook";
import WishListedBook from "../WishListedBook/WishListedBook";

const ListedBooks = () => {
  const listedBooks = useLoaderData();
  console.log(listedBooks);
  // const [readBooks, setReadBooks] = useState([]);
  // const [wishBooks, setWishBooks] = useState([]);
  const [active, setActive] = useState("read");
  const[filterReadListedBooks,setFilterReadListedBooks]=useState();
  const[filterWishListedBooks,setFilterWishListedBooks]=useState();
  const[unsortedReadBooks,setUnsortedReadBooks]=useState([]);
  const[unsortedWishBooks,setUnsortedWishBooks]=useState([]);



  useEffect(() => {
    const readListedBooksIds = getReadBookCard() || [];
    if (readListedBooksIds.length > 0) {
      const targetReadList = [];
      for (const readId of readListedBooksIds) {
        const readBookList = readListedBooksIds.find(
          (listedId) => listedId === readId
        );
        targetReadList.push(readBookList);
      }
      // setReadBooks(targetReadList);
      setFilterReadListedBooks(targetReadList)
      setUnsortedReadBooks(targetReadList)
    }
  }, []);

  useEffect(() => {
    const wishListedBooksIds = getWishBookCard() || [];
    if (wishListedBooksIds.length > 0) {
      const targetWishList = [];
      for (const readId of wishListedBooksIds) {
        const wishBookList = wishListedBooksIds.find(
          (listedId) => listedId === readId
        );
        targetWishList.push(wishBookList);
      }
      setFilterWishListedBooks(targetWishList);
      setUnsortedWishBooks(targetWishList);
    }
  }, []);
  const bubbleSortForPages =(books)=>{
    const allBooksPages = [...books];
    for(let i=0;i<allBooksPages.length-1;i++){
      for(let j=0;j<allBooksPages.length-i-1;j++){
        if(allBooksPages[j].totalPages<allBooksPages[j+1].totalPages){
          const temp = allBooksPages[j];
          allBooksPages[j]=allBooksPages[j+1];
          allBooksPages[j+1]=temp;
        }
      }
    }
    return allBooksPages;
  };
  const bubbleSortForRating =(books)=>{
    const allBooksRating = [...books];
    for(let i=0;i<allBooksRating.length-1;i++){
      for(let j=0;j<allBooksRating.length-i-1;j++){
        if(allBooksRating[j].rating<allBooksRating[j+1].rating){
          const temp = allBooksRating[j];
          allBooksRating[j]=allBooksRating[j+1];
          allBooksRating[j+1]=temp;
        }
      }
    }
    return allBooksRating;
  };
  const handleUnsortedReadBook =()=>{
    setFilterReadListedBooks(unsortedReadBooks)
  }
  const handleUnsortedWishBook =()=>{
    setFilterWishListedBooks(unsortedWishBooks);
  }
  const handleReadListByPages =()=>{
    const sortReadListByPages = bubbleSortForPages(filterReadListedBooks);
    setFilterReadListedBooks(sortReadListByPages);
  }
  const handleReadListByRating =()=>{
    const sortReadListByRating = bubbleSortForRating(filterReadListedBooks);
    setFilterReadListedBooks(sortReadListByRating)
  }
  const handleWishListByPages =()=>{
    const sortWishListByPages = bubbleSortForPages(filterWishListedBooks);
    setFilterWishListedBooks(sortWishListByPages);
    
  }
  const handleWishListByRating=()=>{
    const sortWishListByRating = bubbleSortForRating(filterWishListedBooks);
    setFilterWishListedBooks(sortWishListByRating);
  }
  return (
    <div>
      <div className="text-center mt-6 mb-12">
        <details className="dropdown">
          <summary className="btn m-1">Sort By</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li onClick={()=>active==='read'?handleUnsortedReadBook():handleUnsortedWishBook()}><a>Unsorted</a></li>
            <li onClick={()=>active==='read'?handleReadListByPages():handleWishListByPages()}>
              <a>Pages</a>
            </li>
            <li onClick={()=>active==='read'?handleReadListByRating():handleWishListByRating()}>
              <a>Rating</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="flex bg-base-100 shadaw-sm mt-6 gap-3 mb-8">
        <div>
          <button
            onClick={() => setActive("read")}
            className={`${
              active === "read"
                ? "bg-gray-100 border-b rounded px-2 py-2 text-black"
                : "bg-base-100"
            }`}
          >
            Read List Books
          </button>
        </div>
        <div>
          <button
            onClick={() => setActive("wish")}
            className={`${
              active === "wish"
                ? "bg-gray-100  px-2 py-2 border-b rounded text-black"
                : "bg-base-100"
            }`}
          >
            Wish List Books
          </button>
        </div>
      </div>
      <div>
        {active === "read" && (
          <div className="grid grid-cols-1 gap-4">
            {filterReadListedBooks?.map((readBook) => (
              <ReadListedBook
                key={readBook.id}
                readBook={readBook}
              ></ReadListedBook>
            ))}
          </div>
        )}
      </div>
      <div>
        {active === "wish" && (
          <div className="grid grid-cols-1 gap-4">
            {filterWishListedBooks?.map((wishBook) => (
              <WishListedBook
                key={wishBook.id}
                wishBook={wishBook}
              ></WishListedBook>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListedBooks;
