import { useState, useEffect } from "react";
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

  useEffect(() => {
    // Check if user is already authenticated in this session
    const auth = sessionStorage.getItem("wedding_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = () => {
    sessionStorage.setItem("wedding_auth", "true");
    setIsAuthenticated(true);
  };

  if (isLoading) return null;

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-stone-50 overflow-hidden">
      <Hero />
      <Itinerary />
      <Info />
      <Registry />
      <RSVP />
      <Footer />
    </div>
  );
}

export default App;
