"use client";

import Header from "./components/Navigation/Navbar/Navbar";
import InProgress from "./components/InProgress/InProgress";

export default function NotFound() {
    return (
        <div className="ContainerBox">
            <Header />
            <InProgress is404={true} />
        </div>
    );
}