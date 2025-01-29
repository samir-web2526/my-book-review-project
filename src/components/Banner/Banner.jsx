import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="bg-base-200 grid md:grid-cols-3 items-center mt-6 py-6 md:py-20">
                <div className="md:col-span-2 mx-2 md:mx-30">
                    <p className="text-6xl mb-8 font-bold">Books to freshen up <br /> your bookshelf</p>
                    <Link to={`/list`}><button className="bg-green-500 px-4 py-2 mb-6 text-white rounded font-bold">View The List</button></Link>
                </div>
                <div> 
                    <img className="md:h-80" src={'/src/assets/banner.png'} alt="" />
                </div>
            </div>
        </div>
    );
};
export default Banner;