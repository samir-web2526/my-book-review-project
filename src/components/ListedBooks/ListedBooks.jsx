import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadBookCard, getWishBookCard } from "../local";
import ReadListedBook from "../ReadListedBook/ReadListedBook";
import WishListedBook from "../WishListedBook/WishListedBook";

const ListedBooks = () => {
  const listedBooks = useLoaderData();
  console.log(listedBooks);
  const [readBooks, setReadBooks] = useState([]);
  const [wishBooks, setWishBooks] = useState([]);
  const [active, setActive] = useState("read");

  useEffect(() => {
    const readListedBooksIds = getReadBookCard();
    if (readListedBooksIds.length > 0) {
      const targetReadList = [];
      for (const readId of readListedBooksIds) {
        const readBookList = readListedBooksIds.find(
          (listedId) => listedId === readId
        );
        targetReadList.push(readBookList);
      }
      setReadBooks(targetReadList);
    }
  }, []);

  useEffect(() => {
    const readListedBooksIds = getWishBookCard();
    if (readListedBooksIds.length > 0) {
      const targetReadList = [];
      for (const readId of readListedBooksIds) {
        const readBookList = readListedBooksIds.find(
          (listedId) => listedId === readId
        );
        targetReadList.push(readBookList);
      }
      setWishBooks(targetReadList);
    }
  }, []);
  return (
    <div>
      <div className="text-center mt-6 mb-8">
        <details className="dropdown">
          <summary className="btn m-1">open or close</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a></a>
            </li>
            <li>
              <a>Item 2</a>
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
            {readBooks.map((readBook) => (
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
            {wishBooks.map((wishBook) => (
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
