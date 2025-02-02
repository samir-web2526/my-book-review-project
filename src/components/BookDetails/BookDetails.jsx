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
    const isRead = readBooks.find(
      (readBook) => readBook.bookId === book.bookId
    );
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
    const isRead = readListBooks.find(
      (readBook) => readBook.bookId === book.bookId
    );
    const isWishList = wishListBooks.find(
      (wishListBook) => wishListBook.bookId === book.bookId
    );
    if (!isRead) {
      if (isWishList) {
        toast("Already in wishList");
      } else {
        saveWishBookCard(book);
        toast("Added in wishlist successfully");
      }
    } else {
      toast("Can't add wishlist,it is on readlist");
    }
  };

  return (
    <div>
      <h1 className="text-center font-bold text-5xl mt-6 mb-8">Book Details</h1>
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
          <div className="md:flex mt-3 mb-3 gap-5">
            <h3 className="font-medium">Tags:</h3>
            <p className="md:flex gap-3  ">
              {book.tags.map((tag) => (
                <ul className="text-green-400 badge badge-ghost" key={tag.id}>
                  {tag}
                </ul>
              ))}
            </p>
          </div>
          <hr />
          <div className="mt-8">
            <div>
              <div className="grid grid-cols-2 items-center gap-10">
                <h3>Number of Pages:</h3>
                <h3 className="font-medium">{book.totalPages}</h3>
              </div>
              <div className="grid grid-cols-2 items-center gap-10">
                <h3 className="mt-2 mb-2">Publisher:</h3>
                <h3 className="font-medium mt-2 mb-2">{book.publisher}</h3>
              </div>
              <div className="grid grid-cols-2 items-center gap-10">
                <h3 className="mb-2">Year of Publishing:</h3>
                <h3 className="font-medium mb-2">{book.yearOfPublishing}</h3>
              </div>
              <div className="grid grid-cols-2 items-center gap-10">
                <h3>Rating:</h3>
                <h3 className="font-medium">{book.rating}</h3>
              </div>
            </div>
           
          </div>
          <div className="mt-8 mb-6 flex gap-8">
            <button onClick={() => handleRead()} className="bg-green-500 px-8 py-2 font-bold text-white rounded">
              Read
            </button>
            <button onClick={() => handleWishList()} className="bg-blue-300 px-6 py-2 font-bold text-white rounded">
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
