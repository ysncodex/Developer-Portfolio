import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ThemeSwitcher from './components/ThemeSwitcher';
import LoadingScreen from './components/LoadingScreen';
import GoogleAnalytics from './components/GoogleAnalytics';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Portfolio from './pages/portfolio/Portfolio';
import NotFound from './pages/NotFound';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate app initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <GoogleAnalytics />
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <Navbar />
      <ThemeSwitcher />
      <Routes>
        <Route
          path="/"
          element={
            <main id="main-content" className='main' role="main" aria-label="Main content">
              <Home id="home" />
              <About id="about" />
              <Portfolio id="portfolio" />
              <Contact id="contact" />
            </main>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
