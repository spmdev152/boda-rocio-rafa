import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const Itinerary = () => {
  const events = [
    {
      time: "12:30",
      title: "La Ceremonia",
      location: "Iglesia de las Calatravas",
      address: "C. Alcalá, 25, Centro, 28014 Madrid, España",
      description:
        "Nos daremos el 'sí, quiero' rodeados de nuestros seres más queridos.",
      mapUrl: "https://maps.app.goo.gl/g6z9MvC4A9DYZC2f9", // Note: Fake maps url for now, just an example format
    },
    {
      time: "14:30",
      title: "La Celebración",
      location: "Finca El Gasco",
      address:
        "Almte. Marqués de Valterra, 6, 28250 Torrelodones, Madrid, España",
      description: "Continuaremos con el cóctel, la cena y la fiesta.",
      mapUrl: "https://maps.app.goo.gl/PzYnS2D6aXnFZjD8A",
    },
  ];

  return (
    <section className="py-24 px-4 bg-[#FAFAFA]" id="itinerario">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-wedding-dark mb-4">
            El Día de la Boda
          </h2>
          <div className="w-12 h-px bg-wedding-dark/30 mx-auto"></div>
        </motion.div>

        <div className="space-y-24">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="flex-1 text-center md:text-left">
                <div
                  className={`flex flex-col ${index % 2 !== 0 ? "md:items-end md:text-right" : "md:items-start"}`}
                >
                  <div className="flex items-center gap-2 text-wedding-gold mb-3">
                    <Clock size={20} />
                    <span className="text-xl tracking-widest font-light">
                      {event.time}
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl text-wedding-dark mb-2">
                    {event.title}
                  </h3>
                  <h4 className="text-lg text-wedding-dark/80 font-medium mb-4">
                    {event.location}
                  </h4>
                  <p className="text-wedding-dark/60 font-light leading-relaxed mb-6 max-w-sm">
                    {event.description}
                  </p>
                  <div className="flex items-start gap-3 text-wedding-dark/60 bg-white p-4 rounded-lg shadow-sm border border-stone-100 max-w-sm">
                    <MapPin
                      size={20}
                      className="flex-shrink-0 mt-1 text-wedding-sage"
                    />
                    <p className="text-sm font-light leading-relaxed">
                      {event.address}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-stone-200">
                  <img
                    src={`/fotos/${index === 0 ? "iglesia.jpg" : "finca.jpeg"}`}
                    alt={event.location}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Itinerary;
