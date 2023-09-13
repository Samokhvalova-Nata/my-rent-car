import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Header, Link } from "./Layout.styled";
import Loader from "../Loader/Loader";


const Layout = () => {
    return (
        <>
            <Header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/catalog">Catalog</Link>
                    <Link to="/favorites">Favorites</Link>
                </nav>
            </Header>
            <Suspense fallback={<Loader/>}>
                <Outlet/>
            </Suspense>
            <Toaster position="top-right" reverseOrder={false} />
        </>
    )
};

export default Layout;