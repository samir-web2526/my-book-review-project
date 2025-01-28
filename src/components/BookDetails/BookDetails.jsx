import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {
  getReadBookCard,
  getWishBookCard,
  saveReadBookCard,
  saveWishBookCard,
} from "../local";

const BookDetails = () => {
  const books = useLoaderData();
  console.log(books);
  const { id } = useParams();
  const intId = parseInt(id);

  const book = books.find((book) => book.bookId === intId);
  console.log(book, intId);

  const handleRead = () => {
    const readBooks = getReadBookCard();
    const isRead = readBooks.find((readBook) => readBook.bookId === book.bookId);
    if (isRead) {
      toast("Already in read list");
    } else {
      saveReadBookCard(book);
      toast("Added in readlist successfully");
    }
  };
  const handleWishList = () => {
    const wishListBooks = getWishBookCard();
    const readListBooks = getReadBookCard();
    const isRead = readListBooks.find((readBook) => readBook.bookId === book.bookId);
    const isWishList = wishListBooks.find(
      (wishListBook) => wishListBook.bookId === book.bookId
    );
    if(!isRead){
      if(isWishList){
        toast("Already in wishList");
      }
      else{
        saveWishBookCard(book);
      toast("Added in wishlist successfully");
      }
    }
    else{
      toast("Can't add wishlist,it is on readlist");
    }
    
  };

  return (
    <div>
      <div className="grid  md:grid-cols-2 gap-8 mt-10 mb-5">
        <div className="bg-base-200 flex justify-center py-20">
          <img className="h-96 w-80" src={book.image} alt="" />
        </div>
        <div className="border border-base-300 rounded px-6">
          <h1 className="text-3xl mt-8 mb-3 font-bold">{book.bookName}</h1>
          <h3 className="font-medium mb-3">By: {book.author}</h3>
          <hr />
          <h3 className="mt-2 mb-2">{book.category}</h3>
          <hr />
          <p className="mt-3">
            <span className="font-medium">Review:</span> {book.review}
          </p>
          <div className="flex mt-3 mb-3 gap-5">
            <h3 className="font-medium">Tags:</h3>
            <p className="flex gap-8 badge badge-ghost text-green-400">
              {book.tags.map((tag) => (
                <ul key={tag.id}>{tag}</ul>
              ))}
            </p>
          </div>
          <hr />
          <div className="mt-8 grid grid-cols-2">
            <div>
              <h3>Number of Pages:</h3>
              <h3 className="mt-2 mb-2">Publisher:</h3>
              <h3 className="mb-2">Year of Publishing:</h3>
              <h3>Rating:</h3>
            </div>
            <div>
              <h3 className="font-medium">{book.totalPages}</h3>
              <h3 className="font-medium mt-2 mb-2">{book.publisher}</h3>
              <h3 className="font-medium mb-2">{book.yearOfPublishing}</h3>
              <h3 className="font-medium">{book.rating}</h3>
            </div>
          </div>
          <div className="mt-8 flex gap-8">
            <button onClick={() => handleRead()} className="btn px-8">
              Read
            </button>
            <button onClick={() => handleWishList()} className="btn px-6">
              Wishlist
            </button>
          </div>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
