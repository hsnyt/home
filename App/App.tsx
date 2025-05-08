import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills.tsx';
import Freeboard from './pages/Freeboard';
import Contact from './pages/Contact';
import Product from "./pages/Production.tsx";

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
                            className="text-sm sm:text-xl py-1 no-underline text-black"
                        >
                            Home
                        </Link>
                        <Link
                            to="/skills"
                            className="text-sm sm:text-xl py-1 no-underline text-black"
                        >
                            Skills
                        </Link>
                        <Link
                            to="/production"
                            className="text-sm sm:text-xl py-1 no-underline text-black"
                        >
                            Product
                        </Link>
                        {/*<Link
                            to="/Freeboard"
                            className="text-sm sm:text-xl py-1 no-underline text-black"
                        >
                            Freeboard
                        </Link>
                        */}
                        <Link
                            to="/contact"
                            className="text-sm sm:text-xl py-1 no-underline text-black"
                        >
                            Contact
                        </Link>
                    </nav>
                </header>

                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/Freeboard" element={<Freeboard />} />
                        <Route path="/Production" element={<Product />} />
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