import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Stack from './pages/Stack';
import Freeboard from './pages/Freeboard';
import Contact from './pages/Contact';

const App: React.FC = () => {
    return (
        <div>
            <Router>
                <header className="fixed top-0 left-0 w-full flex items-center justify-between px-4 py-2 sm:px-10 sm:py-4 bg-white shadow-md z-10">
                    <a href="/">
                        <p className="text-xl sm:text-4xl text-black">Yuta Hoshino</p>
                    </a>

                    {/* ナビゲーションメニュー */}
                    <nav className="flex gap-4 sm:gap-8 items-center">
                        <Link
                            to="/"
                            className="text-sm sm:text-xl py-2 no-underline text-black"
                        >
                            Home
                        </Link>
                        <Link
                            to="/stack"
                            className="text-sm sm:text-xl py-2 no-underline text-black"
                        >
                            TechnicalStack
                        </Link>
                        <Link
                            to="/contact"
                            className="text-sm sm:text-xl py-2 no-underline text-black"
                        >
                            Contact
                        </Link>
                        <Link
                            to="/Freeboard"
                            className="text-sm sm:text-xl py-2 no-underline text-black"
                        >
                            Freeboard
                        </Link>
                    </nav>
                </header>

                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/stack" element={<Stack />} />
                        <Route path="/Freeboard" element={<Freeboard />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>

                <footer className="pb-10">
                    <p className="text-center pt-8">@2024 Yuta Hoshino</p>
                </footer>
            </Router>
        </div>
    );
};

export default App;