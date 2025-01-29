import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Root = () => {
    return (
        <div className="mx-4 mt-3 mb-3 md:mx-30">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;