import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="bg-base-200 grid grid-cols-3 items-center py-20">
                <div className="col-span-2 mx-30">
                    <p className="text-5xl mb-8 font-bold">Books to freshen up <br /> your bookshelf</p>
                    <Link to={`/list`}><button className="bg-green-500 px-4 py-2 text-white rounded font-bold">View The List</button></Link>
                </div>
                <div> 
                    <img className="h-80" src={'/src/assets/banner.png'} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;