import { motion } from 'framer-motion';

export function CTA() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-yellow-500/20 via-orange-500/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-8"
        >
          <span className="text-yellow-400">🎯</span>
          <span className="text-yellow-400 font-medium text-sm">ГОТОВЫ НАЧАТЬ?</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black mb-8"
        >
          <span className="text-white">СОЗДАЙТЕ</span>
          <br />
          <span className="gradient-text text-glow">НЕЗАБЫВАЕМОЕ ШОУ</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Оставьте заявку сейчас и получите персональное предложение для вашего мероприятия
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 rounded-2xl font-bold text-black text-lg overflow-hidden glow-effect"
          >
            <span className="relative z-10">ЗАКАЗАТЬ ШОУ</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 rounded-2xl border-2 border-white/20 font-bold text-white hover:border-yellow-400 hover:text-yellow-400 transition-colors backdrop-blur-sm"
          >
            ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
          </motion.button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          {[
            { icon: '✓', text: 'Бесплатная консультация' },
            { icon: '✓', text: 'Индивидуальный подход' },
            { icon: '✓', text: 'Гарантия качества' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-gray-400">
              <span className="w-6 h-6 rounded-full bg-yellow-400/20 flex items-center justify-center text-yellow-400 text-sm">
                {item.icon}
              </span>
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
