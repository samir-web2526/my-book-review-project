import { useEffect, useState } from "react";
import Book from "../Book/Book";



const Books = () => {
    const [books,setBooks]=useState([]);
    useEffect(()=>{
        fetch(`books.json`)
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    return (
        <div>
            <h1 className="text-center font-bold text-5xl mt-16 mb-8">Books</h1>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    books.map(book=><Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;