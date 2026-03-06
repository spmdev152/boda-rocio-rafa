import { useState } from "react";
import { motion } from "framer-motion";

interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "rafayrocio" && password === "PulqueyRodman") {
      onLogin();
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-wedding-sage/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-wedding-gold/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-xl w-full max-w-md z-10 border border-stone-100"
      >
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl md:text-4xl text-wedding-dark mb-2">
            Rafa & Rocío
          </h1>
          <div className="w-12 h-px bg-wedding-dark/30 mx-auto my-4"></div>
          <p className="text-wedding-dark/60 font-light text-sm tracking-wide">
            Acceso Privado
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-xs font-medium text-wedding-dark/80 mb-2 uppercase tracking-wider"
            >
              Usuario
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-stone-50/50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold/50 transition-all font-light"
              placeholder="Introduce el usuario"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-xs font-medium text-wedding-dark/80 mb-2 uppercase tracking-wider"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-stone-50/50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold/50 transition-all font-light"
              placeholder="Introduce la contraseña"
              required
            />
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="text-red-500 text-sm font-light text-center"
            >
              Usuario o contraseña incorrectos
            </motion.div>
          )}

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-wedding-dark text-white rounded-lg hover:bg-black transition-colors uppercase tracking-widest text-sm font-medium"
          >
            Entrar
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
