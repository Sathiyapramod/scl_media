import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Loading from "./components/Fallbacks/Loading";

const Homepage = React.lazy(() => import("./pages/Homepage"));

function App() {
    return (
        <div className="w-screen font-twitter">
            <Navbar />
            <Suspense fallback={<Loading />}>
                <Homepage />
            </Suspense>
        </div>
    );
}

export default App;
