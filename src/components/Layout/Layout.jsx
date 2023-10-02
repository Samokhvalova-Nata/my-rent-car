import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Loader from "../Loader/Loader";
import { Container, Header, Link, LogoAccent, Nav } from "./Layout.styled";


const Layout = () => {
    return (
        <>
            <Header>
                <Container>
                    <Nav>
                        <Link to="/">MyRent
                            <LogoAccent>Car</LogoAccent>
                        </Link>
                        <Link to="/catalog">Catalog</Link>
                        <Link to="/favorites">Favorites</Link>
                    </Nav>
                </Container>
            </Header>
            <Suspense fallback={<Loader/>}>
                <Outlet/>
            </Suspense>
            <Toaster position="top-right" reverseOrder={false} />
        </>
    )
};

export default Layout;