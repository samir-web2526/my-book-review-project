import { FcBusinessman } from "react-icons/fc";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 
const WishListedBook = ({ wishBook }) => {
  const {
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = wishBook;
  return (
    <div>
      <div className="border rounded">
        <div className="md:grid md:grid-cols-3 py-4 px-4">
          <div className="bg-base-200 rounded flex justify-center">
            <img className="py-10 h-72" src={image} alt="" />
          </div>
          <div className="md:col-span-2 md:px-10">
            <h2 className="text-3xl mt-8 mb-3 font-bold">{bookName}</h2>
            <p className="font-medium mb-3">By: {author}</p>
            <div className="md:flex gap-4">
              <p className="md:flex gap-2">
                <h3>Tags: </h3>
                {tags.map((tag) => (
                  <ul
                    className="badge badge-ghost text-green-500 font-bold"
                    key={tag.id}
                  >
                    #{tag}
                  </ul>
                ))}
              </p>
              <div className="flex items-center gap-1.5">
                <span>
                  <MdOutlinePublishedWithChanges />
                </span>
                <p><span className="font-medium">Year of Publishing:</span> {yearOfPublishing}</p>
              </div>
            </div>
            <div className="md:flex gap-4 mt-4 mb-4">
              <div className="flex items-center gap-1.5">
                <span>
                  <FcBusinessman />
                </span>
                <h3> <span className="font-medium"> Publisher: </span>{publisher}</h3>
              </div>
              <div className="flex items-center gap-1.5">
                <span>
                  <RiPagesLine />
                </span>
                <p><span className="font-medium">Pages:</span> {totalPages}</p>
              </div>
            </div>
            <hr />
            <div className="md:flex items-center gap-4 mt-4">
              <div className="mt-2 mb-2 text-center bg-blue-100 text-blue-300 px-4 py-1 rounded-2xl font-bold">
                Category:{category}
              </div>
              <div className="text-orange-300 px-4 py-1 text-center mb-2 rounded-2xl bg-orange-100 font-bold">
                Rating:{rating}
              </div>
              <div className="bg-green-500 text-white text-center px-4 py-1 rounded-2xl font-bold">
                <Link to={`/detail/${wishBook.bookId}`}><button>View Details</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
WishListedBook.propTypes ={
    wishBook:PropTypes.object.isRequired
}
export default WishListedBook;
