import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { WelcomeSection } from "./WelcomeSection";


export const MainLayout = ({ children }) => {
    return <>

            <Header />
            <WelcomeSection/> 
             <main>
                <Outlet/>
             </main>
             


        <Footer/>

    </>

}