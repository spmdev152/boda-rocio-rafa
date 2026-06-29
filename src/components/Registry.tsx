import { useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, Check } from "lucide-react";

const funds = [
  {
    id: "luna",
    title: "Fondo luna de miel",
    description:
      "Aportación para nuestro viaje de novios a Japón y Tailandia a través del siguiente número de cuenta:",
    accountNumber: "ES24 0182 5322 2800 0355 5534",
  },
  {
    id: "hogar",
    title: "Fondo hogar",
    description:
      "Aportación para nuestra nueva casa, en la que empezaremos nuestra vida juntos, a través del siguiente número de cuenta:",
    accountNumber: "ES93 0081 5378 2100 0148 0357",
  },
];

const accountHolders = [
  "Rafael María Prado Garcia",
  "María del Rocio Sancho Beltrán",
];

const Registry = () => {
  const [copiedFund, setCopiedFund] = useState<string | null>(null);

  const handleCopy = (fundId: string, accountNumber: string) => {
    navigator.clipboard.writeText(accountNumber.replace(/\s/g, ""));
    setCopiedFund(fundId);
    setTimeout(() => setCopiedFund(null), 2000);
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
          {funds.map((fund, index) => (
            <motion.div
              key={fund.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="bg-white p-10 rounded-2xl shadow-sm text-center border border-stone-200 flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-wedding-gold mb-6">
                <CreditCard size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl text-wedding-dark mb-4">
                {fund.title}
              </h3>
              <p className="text-sm text-wedding-dark/60 font-light mb-8 flex-grow">
                {fund.description}
              </p>

              <div className="bg-stone-50 p-4 rounded-lg w-full mb-4 font-mono text-sm tracking-wider text-wedding-dark border border-stone-200">
                {fund.accountNumber}
              </div>

              <button
                onClick={() => handleCopy(fund.id, fund.accountNumber)}
                className="mt-auto px-6 py-2.5 rounded-full border border-wedding-dark text-wedding-dark hover:bg-wedding-dark hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm uppercase tracking-widest font-medium"
              >
                {copiedFund === fund.id ? (
                  <>
                    <Check size={16} /> Copiado
                  </>
                ) : (
                  "Copiar Cuenta"
                )}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 max-w-lg mx-auto text-center bg-white px-8 py-6 rounded-2xl border border-stone-200 shadow-sm"
        >
          <p className="text-xs uppercase tracking-widest text-wedding-dark/50 mb-3">
            Titulares
          </p>
          <p className="text-sm text-wedding-dark/80 font-light leading-relaxed">
            {accountHolders.join(" · ")}
          </p>
          <p className="text-xs text-wedding-dark/50 font-light mt-3">
            Válidos para cualquiera de las dos cuentas
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Registry;
