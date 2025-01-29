import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Book = ({ book }) => {
  const { bookId, image, tags, bookName, author, category, rating } = book;
  return (
    <div>
      <Link to={`/detail/${bookId}`}>
        <div className="card bg-base-100 shadow-sm">
          <figure className="mt-4">
            <img className="h-72 md:w-72 rounded" src={image} alt="Books" />
          </figure>
          <div className="card-body">
            <div className="card-actions">
              <div>
                <h1 className="font-medium mb-2">tags:</h1>
                <p className="md:flex">
                  {tags.map((tag) => (
                    <ul key={tag}>
                      <p className="badge badge-ghost text-green-500 font-bold">
                        {tag}
                      </p>
                    </ul>
                  ))}
                </p>
              </div>
            </div>

            <h2 className="card-title">{bookName}</h2>
            <p><span className="font-medium">By:</span> {author}</p>
            <hr />
            <div className="flex justify-between">
              <span className="font-medium">{category}</span>
              <div className="flex items-center gap-2">
                {rating}
                <CiStar className="text-xl" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
Book.propTypes = {
  book: PropTypes.object.isRequired,
};
export default Book;
