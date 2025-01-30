import { useEffect, useState } from "react";
import Favourite from "../Favourite/Favourite";

const Favourites = () => {
  const [favouriteBooks,setFavouritesBooks]=useState([]);
  useEffect(()=>{
    fetch('favourite.json')
    .then(res=>res.json())
    .then(data=>setFavouritesBooks(data))
  },[])
  
  return (
    <div>
      <h1 className="text-center font-bold text-5xl mt-10 mb-8">Favourite Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {
            favouriteBooks.map((favouriteBook)=><Favourite key={favouriteBook.id} favouriteBook={favouriteBook}></Favourite>)
        }
      </div>
    </div>
  );
};

export default Favourites;
