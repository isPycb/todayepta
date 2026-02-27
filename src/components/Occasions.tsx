import { motion } from 'framer-motion';

const occasions = [
  {
    icon: '🎂',
    title: 'День рождения',
    description: 'Яркое шоу для самого важного дня в году',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: '🏢',
    title: 'Корпоратив',
    description: 'Тимбилдинг в формате увлекательной игры',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '🎉',
    title: 'Юбилей',
    description: 'Праздник, который запомнится навсегда',
    gradient: 'from-purple-500 to-violet-500',
  },
  {
    icon: '🎊',
    title: 'Выпускной',
    description: 'Незабываемое завершение учебного года',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    icon: '💍',
    title: 'Свадьба',
    description: 'Развлечение для гостей всех возрастов',
    gradient: 'from-red-500 to-pink-500',
  },
  {
    icon: '🎄',
    title: 'Новый год',
    description: 'Праздничное шоу в новогодней атмосфере',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: '🎓',
    title: 'Детский праздник',
    description: 'Весёлое шоу для маленьких гостей',
    gradient: 'from-yellow-400 to-orange-400',
  },
  {
    icon: '🏆',
    title: 'Тимбилдинг',
    description: 'Сплочение команды через игру',
    gradient: 'from-indigo-500 to-blue-500',
  },
];

export function Occasions() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-6"
          >
            <span className="text-yellow-400">✨</span>
            <span className="text-yellow-400 font-medium text-sm">ДЛЯ КАКИХ ПРАЗДНИКОВ ПОДХОДИТ</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl font-black mb-6"
          >
            <span className="gradient-text">ИДЕАЛЬНО ДЛЯ</span>
            <br />
            <span className="text-white">ЛЮБОГО СОБЫТИЯ</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Наше шоу подходит для самых разных мероприятий — от камерных встреч до масштабных корпоративов
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {occasions.map((occasion, index) => (
            <motion.div
              key={occasion.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="gradient-border h-full p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm">
                <div className="space-y-4">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${occasion.gradient} flex items-center justify-center text-3xl shadow-lg`}
                  >
                    {occasion.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {occasion.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {occasion.description}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileHover={{ x: 8, opacity: 1 }}
                    className="text-yellow-400"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center p-2 rounded-2xl bg-gradient-to-r from-yellow-400/10 via-orange-400/10 to-yellow-400/10 border border-yellow-400/20">
            <div className="px-6 py-3">
              <span className="text-gray-300">Не нашли свой праздник?</span>
            </div>
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl font-bold text-black hover:scale-105 transition-transform">
              Обсудить индивидуальный сценарий
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
