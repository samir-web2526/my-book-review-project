import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="text-center mt-56">
        <h1 className="text-5xl font-medium">PAGE NOT FOUND</h1>
        <Link to={'/'}><button className="btn mt-4">Go Back Home</button></Link>
      </div>
    </div>
  );
};

export default ErrorPage;
