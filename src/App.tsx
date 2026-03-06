import Hero from './components/Hero';
import Itinerary from './components/Itinerary';
import Info from './components/Info';
import Registry from './components/Registry';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

function App() {
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
