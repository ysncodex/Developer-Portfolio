import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ThemeSwitcher from './components/ThemeSwitcher';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Portfolio from './pages/portfolio/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ThemeSwitcher />
      <main className='main'>
        <Home id="home" />
        <About id="about" />
        <Portfolio id="portfolio" />
        <Contact id="contact" />
      </main>
    </BrowserRouter>
  );
}

export default App;
