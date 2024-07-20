import { Outlet } from 'react-router-dom';
import { Footer, Header } from "../components/index.ts"

const Layout = () => {
    return (
        <>
            <Header />
                <Outlet />
            <Footer />
        </>
    );
}


export default Layout;