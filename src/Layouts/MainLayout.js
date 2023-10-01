import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { WelcomeSection } from "./WelcomeSection";
import { Footer } from "./Footer";

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
