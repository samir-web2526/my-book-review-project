import { createContext, useEffect, useState } from "react";
import { getReadBookCard } from "../local";
import PropTypes from "prop-types";

// eslint-disable-next-line react-refresh/only-export-components
export const BookContext = createContext([]);

const ContextBook = ({children}) => {

  console.log(children)
  const [filterReadListedBooks, setFilterReadListedBooks] = useState([]);

  useEffect(() => {
    setFilterReadListedBooks(getReadBookCard());
  }, []);

  return (
    <div>
      <BookContext.Provider value={{ filterReadListedBooks, setFilterReadListedBooks }}>
        {children}
      </BookContext.Provider>
    </div>
  );
};
ContextBook.PropTypes={
  children:PropTypes.object.isRequired,
}
export default ContextBook;
