import Loader from "../components/Loader"
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import { useGlobalContext } from "../contexts/GlobalContext"

export default function DefaultLayout() {
    // const { isLoading } = useGlobalContext();
    return (
        <>
            <Header />
            {/* isLoading &&*/ <Loader />}
            <main>
                <Outlet />
            </main>
            <Footer />
        </>

    )
};