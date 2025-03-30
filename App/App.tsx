import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Stack from './pages/Stack';
import Freeboard from './pages/Freeboard';
import Contact from './pages/Contact';
import Production from "./pages/Production.tsx";

const App: React.FC = () => {
    return (
        <div>
            <Router>
                <header className="fixed top-0 left-0 w-full flex items-center justify-between px-4 py-2 sm:px-10 sm:py-4 bg-white shadow-md z-10">
                    <a href="/">
                        <p className="text-xl sm:text-4xl text-black">Yuta Hoshino</p>
                    </a>

                    {/* ナビゲーションメニュー */}
                    <nav className="flex gap-3 sm:gap-8 items-center">
                        <Link
                            to="/"
                            className="text-xs sm:text-xl py-1 no-underline text-black"
                        >
                            Home
                        </Link>
                        <Link
                            to="/stack"
                            className="text-xs sm:text-xl py-1 no-underline text-black"
                        >
                            TechnicalStack
                        </Link>
                        <Link
                            to="/production"
                            className="text-xs sm:text-xl py-1 no-underline text-black"
                        >
                            Production
                        </Link>
                        <Link
                            to="/Freeboard"
                            className="text-xs sm:text-xl py-1 no-underline text-black"
                        >
                            Freeboard
                        </Link>
                        <Link
                            to="/contact"
                            className="text-xs sm:text-xl py-1 no-underline text-black"
                        >
                            Contact
                        </Link>
                    </nav>
                </header>

                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/stack" element={<Stack />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/Freeboard" element={<Freeboard />} />
                        <Route path="/Production" element={<Production />} />
                    </Routes>
                </div>

                <footer className="pb-10">
                    <p className="text-center pt-8">@2023 Yuta Hoshino</p>
                </footer>
            </Router>
        </div>
    );
};

export default App;