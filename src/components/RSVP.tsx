import React, { useState } from "react";
import { motion } from "framer-motion";

const RSVP = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    asistencia: "yes",
    alergias: "",
    cancion: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Mapeamos los datos al formato esperado por el spreadsheet
    const dataToSend = new FormData();
    dataToSend.append("Nombre", formData.nombre);
    dataToSend.append("Apellidos", formData.apellidos);
    dataToSend.append(
      "Asistencia",
      formData.asistencia === "yes" ? "Viene" : "No viene",
    );
    dataToSend.append("Alergias o intolerancias", formData.alergias);
    dataToSend.append("Cancion", formData.cancion);

    try {
      // Sustituye esta URL por la URL de tu Web App de Google Apps Script
      const GOOGLE_SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbzb3ZH9ptasGta7jv2e6gjd2S6q7MR4mKf73r8GUQinuzE4NAa25-oEj8XIWOBKnp1beA/exec";

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: dataToSend,
        mode: "no-cors", // avoid CORS issues with simple Google Apps Scripts
      });

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          nombre: "",
          apellidos: "",
          asistencia: "yes",
          alergias: "",
          cancion: "",
        });
      }, 5000);
    } catch (error) {
      console.error("Error al enviar el formulario", error);
      alert(
        "Hubo un error al enviar tu confirmación. Por favor, inténtalo de nuevo.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative py-32 px-4 overflow-hidden" id="asistencia">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/fotos/2cbe1fba-9682-46f7-a3b0-04aef8cb33d5.jpeg"
          alt="Rafa y Rocío RSVP"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 text-white"
        >
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            Confirma tu Asistencia
          </h2>
          <div className="w-12 h-px bg-white/50 mx-auto mb-6"></div>
          <p className="font-light tracking-wide text-white/80">
            Por favor, confírmanos tu asistencia antes del [Fecha Límite].
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/95 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl"
        >
          {submitted ? (
            <div className="text-center py-12">
              <h3 className="font-serif text-3xl text-wedding-dark mb-4">
                ¡Gracias!
              </h3>
              <p className="text-wedding-dark/70 font-light">
                Hemos recibido tu confirmación correctamente.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium text-wedding-dark/80 mb-2 uppercase tracking-wider text-xs"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold/50 transition-all font-light"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="apellidos"
                    className="block text-sm font-medium text-wedding-dark/80 mb-2 uppercase tracking-wider text-xs"
                  >
                    Apellidos
                  </label>
                  <input
                    type="text"
                    id="apellidos"
                    name="apellidos"
                    required
                    value={formData.apellidos}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold/50 transition-all font-light"
                    placeholder="Tus apellidos"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-wedding-dark/80 mb-2 uppercase tracking-wider text-xs">
                  ¿Asistirás?
                </label>
                <div className="flex gap-4">
                  <label className="flex-1 cursor-pointer relative">
                    <input
                      type="radio"
                      name="asistencia"
                      value="yes"
                      checked={formData.asistencia === "yes"}
                      onChange={handleChange}
                      className="peer sr-only"
                    />
                    <div className="text-center px-4 py-3 border border-stone-200 rounded-lg peer-checked:border-wedding-gold peer-checked:bg-wedding-gold/5 peer-checked:text-wedding-dark text-stone-400 font-light transition-all">
                      ¡Sí, allí estaré!
                    </div>
                  </label>
                  <label className="flex-1 cursor-pointer relative">
                    <input
                      type="radio"
                      name="asistencia"
                      value="no"
                      checked={formData.asistencia === "no"}
                      onChange={handleChange}
                      className="peer sr-only"
                    />
                    <div className="text-center px-4 py-3 border border-stone-200 rounded-lg peer-checked:border-wedding-dark peer-checked:bg-stone-100 peer-checked:text-wedding-dark text-stone-400 font-light transition-all">
                      No podré ir
                    </div>
                  </label>
                </div>
              </div>

              {formData.asistencia === "yes" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="alergias"
                      className="block text-sm font-medium text-wedding-dark/80 mb-2 uppercase tracking-wider text-xs"
                    >
                      Alergias o Intolerancias
                    </label>
                    <textarea
                      id="alergias"
                      name="alergias"
                      rows={2}
                      value={formData.alergias}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold/50 transition-all font-light resize-none"
                      placeholder="Indica si tienes alguna alergia o restricción alimentaria"
                    ></textarea>
                  </div>

                  <div>
                    <label
                      htmlFor="cancion"
                      className="block text-sm font-medium text-wedding-dark/80 mb-2 uppercase tracking-wider text-xs"
                    >
                      Una canción que no puede faltar
                    </label>
                    <input
                      type="text"
                      id="cancion"
                      name="cancion"
                      value={formData.cancion}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold/50 transition-all font-light"
                      placeholder="Esa canción que te hace salir a la pista..."
                    />
                  </div>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 mt-4 bg-wedding-dark text-white rounded-lg hover:bg-black disabled:bg-stone-400 transition-colors uppercase tracking-widest text-sm font-medium"
              >
                {loading ? "Enviando..." : "Confirmar"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;
