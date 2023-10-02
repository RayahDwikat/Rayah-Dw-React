import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { WelcomeSection } from "./WelcomeSection";
import { Footer } from "./Footer";
import { InputWithIcon } from "../components/InputWithIcon";


export function MainLayout({ children }) {
    return (
        <>

            <Header />
            <WelcomeSection />
            <InputWithIcon/>
            <main>
                <Outlet />
            </main>

            <Footer />

        </>
    );
};
