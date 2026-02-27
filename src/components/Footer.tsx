import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="relative py-20 bg-black border-t border-white/10 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Logo and description */}
          <div className="md:col-span-2 space-y-6">
            <div className="text-3xl font-black">
              <span className="text-white">SHOW</span>
              <br />
              <span className="gradient-text">TODAY</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Организация ярких мероприятий и шоу в формате популярных телепередач. 
              Создаём незабываемые эмоции для вас и ваших гостей.
            </p>
            <div className="flex gap-4">
              {['VK', 'TG', 'YT'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-400/50 transition-colors"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold">Навигация</h4>
            <ul className="space-y-3">
              {['Как это работает', 'Сценарии', 'Цены', 'Фото гостей', 'Отзывы'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-white font-bold">Контакты</h4>
            <ul className="space-y-3 text-gray-400">
              <li>+7 (999) 000-00-00</li>
              <li>info@showtoday.ru</li>
              <li>Москва, ул. Примерная, 1</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 SHOW TODAY. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-yellow-400 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Договор оферты</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
