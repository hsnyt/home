import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Product from "./pages/Production.tsx";
import { AdminPage } from './pages/AdminPage';
import { BlogPage } from './pages/BlogPage';

const Header = () => {
  const location = useLocation();
  const isAdminPage = location.pathname === '/admin';

  if (isAdminPage) {
    return null;
  }

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Yuta Hoshino';
      case '/skills':
        return 'Skills';
      case '/production':
        return 'Product';
      case '/blog':
        return 'Blog';
      case '/contact':
        return 'Contact';
      default:
        return 'Yuta Hoshino';
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-4 py-2 sm:px-10 sm:py-4 bg-white shadow-md z-10">
      <a href="/">
        <p className="text-xl sm:text-4xl text-black">{getPageTitle()}</p>
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
        <Link
          to="/blog"
          className="text-sm sm:text-xl py-1 no-underline text-black"
        >
          Blog
        </Link>
        <Link
          to="/contact"
          className="text-sm sm:text-xl py-1 no-underline text-black"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

const AppContent = () => {
  const location = useLocation();
  
  return (
    <div className={location.pathname === '/admin' ? '' : 'pt-16'}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/Production" element={<Product />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  );
};

const App: React.FC = () => {
    return (
        <div>
            <Router>
                <Header />
                <AppContent />
                <footer className="pb-10">
                    <p className="text-center pt-8">@2023 Yuta Hoshino</p>
                </footer>
            </Router>
        </div>
    );
};

export default App;