import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Nglegena from './pages/Nglegena';
import Pasangan from './pages/Pasangan';
import Sandhangan from './pages/Sandhangan';
import AiExamples from './pages/AiExamples';
import Quiz from './pages/Quiz';
import About from './pages/About';
import { AppRoute } from './types';

function App() {
  // Using state-based routing for simplicity within SPA without requiring browser history config on Vercel
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(AppRoute.HOME);

  // Handle hash changes manually for better browser navigation support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (Object.values(AppRoute).includes(hash as AppRoute)) {
        setCurrentRoute(hash as AppRoute);
      } else {
        setCurrentRoute(AppRoute.HOME);
      }
    };

    // Set initial
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (route: AppRoute) => {
    window.location.hash = route;
    setCurrentRoute(route);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentRoute) {
      case AppRoute.HOME: return <Home onNavigate={navigate} />;
      case AppRoute.NGLEGENA: return <Nglegena />;
      case AppRoute.PASANGAN: return <Pasangan />;
      case AppRoute.SANDHANGAN: return <Sandhangan />;
      case AppRoute.AI_EXAMPLES: return <AiExamples />;
      case AppRoute.QUIZ: return <Quiz />;
      case AppRoute.ABOUT: return <About />;
      default: return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentRoute={currentRoute} onNavigate={navigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;