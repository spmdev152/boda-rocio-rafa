import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, CreditCard, Check, ChevronDown, ChevronUp } from "lucide-react";

// Placeholder products
const dummyGifts = [
  {
    id: 1,
    name: "Vajilla de Porcelana",
    price: "150€",
    image:
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=500",
    description: "Vajilla completa de 24 piezas para ocasiones especiales.",
  },
  {
    id: 2,
    name: "Cafetera Espresso",
    price: "290€",
    image:
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&q=80&w=500",
    description: "Para empezar cada mañana con el mejor aroma.",
  },
  {
    id: 3,
    name: "Juego de Copas",
    price: "80€",
    image:
      "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=500",
    description: "Set de copas de cristal de Bohemia para brindar.",
  },
  {
    id: 4,
    name: "Robot Aspirador",
    price: "350€",
    image:
      "https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?auto=format&fit=crop&q=80&w=500",
    description: "Ayuda inteligente para mantener la casa perfecta.",
  },
  {
    id: 5,
    name: "Set de Maletas",
    price: "200€",
    image:
      "https://images.unsplash.com/photo-1551524164-687a55dd1126?auto=format&fit=crop&q=80&w=500",
    description: "Imprescindibles para nuestro viaje de novios.",
  },
  {
    id: 6,
    name: "Batidora de Vaso",
    price: "120€",
    image:
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&q=80&w=500",
    description: "Para preparar nuestros postres y batidos favoritos.",
  },
];

const Registry = () => {
  const [copied, setCopied] = useState(false);
  const [showGifts, setShowGifts] = useState(false);

  // Placeholder account number
  const accountNumber = "ES24 0182 5322 2800 0355 5534";

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber.replace(/\s/g, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-4 bg-stone-100" id="regalos">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-wedding-dark mb-4">
            Lista de Bodas
          </h2>
          <div className="w-12 h-px bg-wedding-dark/30 mx-auto mb-8"></div>
          <p className="text-wedding-dark/70 font-light max-w-2xl mx-auto leading-relaxed text-lg">
            Vuestra presencia es el mejor de los regalos. Pero si deseáis tener
            un detalle adicional con nosotros, os dejamos a continuación algunas
            opciones.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Account Number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-10 rounded-2xl shadow-sm text-center border border-stone-200 flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-wedding-gold mb-6">
              <CreditCard size={32} strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-2xl text-wedding-dark mb-4">
              Aportación
            </h3>
            <p className="text-sm text-wedding-dark/60 font-light mb-8 flex-grow">
              Si preferís ayudarnos con nuestro viaje de novios y nuestro nuevo
              hogar, podéis hacerlo a través del siguiente número de cuenta:
            </p>

            <div className="bg-stone-50 p-4 rounded-lg w-full mb-4 font-mono text-sm tracking-wider text-wedding-dark border border-stone-200">
              {accountNumber}
            </div>

            <button
              onClick={handleCopy}
              className="mt-auto px-6 py-2.5 rounded-full border border-wedding-dark text-wedding-dark hover:bg-wedding-dark hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm uppercase tracking-widest font-medium"
            >
              {copied ? (
                <>
                  <Check size={16} /> Copiado
                </>
              ) : (
                "Copiar Cuenta"
              )}
            </button>
          </motion.div>

          {/* Physical Gifts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-10 rounded-2xl shadow-sm text-center border border-stone-200 flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-wedding-gold mb-6">
              <Gift size={32} strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-2xl text-wedding-dark mb-4">
              Regalos Físicos
            </h3>
            <p className="text-sm text-wedding-dark/60 font-light mb-8 flex-grow">
              También hemos seleccionado algunos artículos especiales que nos
              harían mucha ilusión tener en nuestra casa. Podéis ver la lista
              completa aquí:
            </p>

            <button
              onClick={() => setShowGifts(!showGifts)}
              className="mt-auto px-6 py-2.5 rounded-full bg-wedding-dark text-white hover:bg-black transition-colors duration-300 flex items-center gap-2 text-sm uppercase tracking-widest font-medium"
            >
              {showGifts ? "Ocultar Lista" : "Ver Lista de Regalos"}
              {showGifts ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </motion.div>
        </div>

        {/* Gift List Grid */}
        <AnimatePresence>
          {showGifts && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-12 overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {dummyGifts.map((gift, index) => (
                  <motion.div
                    key={gift.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden flex flex-col group"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={gift.image}
                        alt={gift.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-wedding-dark">
                        {gift.price}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h4 className="font-serif text-xl text-wedding-dark mb-2">
                        {gift.name}
                      </h4>
                      <p className="text-sm text-wedding-dark/60 font-light mb-6 flex-grow">
                        {gift.description}
                      </p>
                      <button className="w-full py-2.5 rounded-lg border border-wedding-gold text-wedding-gold hover:bg-wedding-gold hover:text-white transition-colors duration-300 text-sm uppercase tracking-widest font-medium">
                        Regalar
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Registry;
