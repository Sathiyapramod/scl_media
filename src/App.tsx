import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

const Homepage = React.lazy(() => import("./pages/Homepage"));

function App() {
    return (
        <div className="w-screen font-twitter">
            <Navbar />
            <Suspense fallback={<div>Loading...</div>}>
                <Homepage />
            </Suspense>
        </div>
    );
}

export default App;
