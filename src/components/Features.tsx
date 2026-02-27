import { motion } from 'framer-motion';

const features = [
  {
    number: '01',
    title: 'Уникальные сценарии',
    description: 'Авторские игры по мотивам популярных телепередач, которые вы знаете и любите',
    icon: '🎬',
  },
  {
    number: '02',
    title: 'Профессиональные ведущие',
    description: 'Опытные актёры и шоумены, которые создадут незабываемую атмосферу',
    icon: '🎭',
  },
  {
    number: '03',
    title: 'Студия или выезд',
    description: 'Проведём шоу в нашей студии или приедем к вам с полным оборудованием',
    icon: '🏠',
  },
  {
    number: '04',
    title: 'Индивидуальный подход',
    description: 'Адаптируем сценарий под вашу компанию и особенности мероприятия',
    icon: '✨',
  },
];

export function Features() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-3xl" />
      </div>

      {/* Animated lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: '-100%' }}
            whileInView={{ x: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 20, delay: i * 4, ease: 'linear', repeat: Infinity }}
            className="absolute h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"
            style={{ top: `${20 + i * 20}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-400/10 border border-orange-400/20 mb-6"
          >
            <span className="text-orange-400">🚀</span>
            <span className="text-orange-400 font-medium text-sm">ПОЧЕМУ ВЫБИРАЮТ НАС</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl font-black mb-6"
          >
            <span className="text-white">ВСЁ ДЛЯ</span>
            <br />
            <span className="gradient-text">ИДЕАЛЬНОГО ШОУ</span>
          </motion.h2>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              <div className="gradient-border p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm">
                <div className="flex items-start gap-6">
                  {/* Number */}
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="text-5xl font-black text-yellow-400/20 group-hover:text-yellow-400/40 transition-colors"
                  >
                    {feature.number}
                  </motion.span>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{feature.icon}</span>
                      <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '50,000+', label: 'Счастливых гостей' },
            { value: '500+', label: 'Проведённых шоу' },
            { value: '100%', label: 'Положительных отзывов' },
            { value: '24/7', label: 'Поддержка клиентов' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-4xl md:text-5xl font-black gradient-text mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
