import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/fotos/890a8eb7-7d0e-4932-836a-c371ed51be97.jpeg" 
          alt="Rafa y Rocío" 
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 flex flex-col items-center">
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="tracking-[0.3em] uppercase text-sm md:text-base mb-6 font-light"
        >
          Nos casamos
        </motion.p>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl mb-8 font-medium tracking-tight drop-shadow-md"
        >
          Rafa y Rocío
        </motion.h1>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="w-px h-16 bg-white/50 mb-8"
        ></motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-lg md:text-xl font-light tracking-widest uppercase"
        >
          Madrid
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;