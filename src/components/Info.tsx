import { motion } from 'framer-motion';
import { Bus, Map, Clock } from 'lucide-react';

const Info = () => {
  return (
    <section className="py-24 px-4 bg-white" id="info">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-wedding-dark mb-4">Información Útil</h2>
          <div className="w-12 h-px bg-wedding-dark/30 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Transporte Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-stone-50 p-10 rounded-2xl shadow-sm border border-stone-100"
          >
            <div className="flex justify-center mb-6 text-wedding-gold">
              <Bus size={48} strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-2xl text-center text-wedding-dark mb-6">Autobuses</h3>
            <p className="text-center text-wedding-dark/70 font-light mb-8 leading-relaxed">
              Para vuestra comodidad, pondremos a disposición un servicio de autobuses que os llevará desde el centro de Madrid hasta la finca, y de vuelta al finalizar la fiesta.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Map className="flex-shrink-0 text-wedding-sage mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-wedding-dark">Punto de salida (Madrid)</h4>
                  <p className="text-sm text-wedding-dark/60 font-light mt-1">Plaza de Cánovas del Castillo (Neptuno) - Confirmaremos horario exacto más adelante.</p>
                </div>
              </div>
              <div className="w-full h-px bg-stone-200 my-2"></div>
              <div className="flex items-start gap-4">
                <Clock className="flex-shrink-0 text-wedding-sage mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-wedding-dark">Horarios de vuelta</h4>
                  <p className="text-sm text-wedding-dark/60 font-light mt-1">Habrá diferentes horarios de regreso durante la noche para que podáis volver cuando queráis.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Info Section (Image or Details) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg relative"
          >
            <img 
              src="/fotos/0ac70c72-85d7-4afc-aaa1-0c3a0e94871a.jpeg" 
              alt="Madrid y la Finca" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Info;