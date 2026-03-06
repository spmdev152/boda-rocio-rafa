import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import Itinerary from "./components/Itinerary";
import Info from "./components/Info";
import Registry from "./components/Registry";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated in this session
    const auth = sessionStorage.getItem("wedding_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  // Easter Egg listener
  useEffect(() => {
    let keysTyped = "";
    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid capturing single character typings when inside input fields
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      
      const key = e.key.toLowerCase();
      keysTyped = (keysTyped + key).slice(-4);
      
      if (keysTyped === "peña") {
        setShowToast(true);
        // Hide toast after 5 seconds
        setTimeout(() => setShowToast(false), 5000);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleLogin = () => {
    sessionStorage.setItem("wedding_auth", "true");
    setIsAuthenticated(true);
  };

  const easterEggToast = (
    <AnimatePresence>
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-[9999] bg-white/95 backdrop-blur-md px-5 py-4 rounded-xl shadow-2xl border border-stone-200 flex items-center gap-4"
        >
          <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-xl">
            🤍
          </div>
          <div>
            <h4 className="font-serif text-base text-wedding-dark mb-0.5">Hecho por Sergio Peña</h4>
            <p className="text-xs text-wedding-dark/60 font-light">Con mucho amor para los prometidos</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (isLoading) return null;

  if (!isAuthenticated) {
    return (
      <>
        <Login onLogin={handleLogin} />
        {easterEggToast}
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-stone-50 overflow-hidden">
        <Hero />
        <Itinerary />
        <Info />
        <Registry />
        <RSVP />
        <Footer />
      </div>
      {easterEggToast}
    </>
  );
}

export default App;
