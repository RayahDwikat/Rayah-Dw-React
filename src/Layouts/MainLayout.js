import React from "react";
import { Outlet } from "react-router";
import { Header } from "./Header";
import { WelcomeSection } from "./WelcomeSection";
import { Footer } from "./Footer";
import { InputWithIcon } from "../components/InputWithIcon";


export function MainLayout({ children }) {
    return (
        <>

            <Header />
            <WelcomeSection />
            <main>
                <Outlet />
            </main>

            <Footer />

        </>
    );
};
