import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { Layout } from '../components/Layout';
import { Utensils, Bed, ShoppingBag, Coffee } from 'lucide-react';

export const GastronomyView: React.FC = () => {
  const { t } = useLanguage();

  const categories = [
    { id: 'restaurants', label: 'Restaurantes', icon: Utensils, color: 'text-orange-400', bg: 'bg-orange-500/10' },
    { id: 'accommodation', label: 'Alojamientos', icon: Bed, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { id: 'local_commerce', label: 'Comercio Local', icon: ShoppingBag, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { id: 'cafes', label: 'Cafeterías', icon: Coffee, color: 'text-amber-400', bg: 'bg-amber-500/10' },
  ];

  const items = [
    { name: 'Restaurante El Astro', cat: 'Restaurantes', rating: 4.8, dist: '200m' },
    { name: 'Hostal Cruz del Sur', cat: 'Alojamientos', rating: 4.5, dist: '450m' },
    { name: 'Artesanías Combarbalá', cat: 'Comercio Local', rating: 4.9, dist: '300m' },
    { name: 'Café de la Plaza', cat: 'Cafeterías', rating: 4.7, dist: '150m' },
  ];

  return (
    <Layout title={t('gastronomy_services')}>
      <div className="flex flex-col gap-12 max-w-7xl mx-auto pb-32">
        {/* Featured Image */}
        <div className="relative h-[400px] rounded-[60px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1679310249395-ae267ae0d273?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZWFuJTIwZm9vZCUyMHJlc3RhdXJhbnQlMjB0cmFkaXRpb25hbCUyMGVtcGFuYWRhcyUyMHdpbmV8ZW58MXx8fHwxNzgxNTUwNzgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            className="w-full h-full object-cover"
            alt="Gastronomy"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-7xl font-bold text-white tracking-tight">Sabores Locales</h2>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <motion.button
              key={cat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`p-10 rounded-[40px] border border-white/10 ${cat.bg} flex flex-col items-center gap-6 hover:bg-white/10 transition-all`}
            >
              <cat.icon size={64} className={cat.color} />
              <span className="text-2xl font-bold text-white">{cat.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Recommended List */}
        <div className="space-y-8">
          <h3 className="text-4xl font-bold text-white mb-8">Recomendados cerca de ti</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {items.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="p-10 bg-white/5 border border-white/10 rounded-[40px] flex items-center justify-between group hover:bg-white/10 transition-all"
              >
                <div className="space-y-2">
                  <span className="text-xl font-bold text-blue-400 uppercase tracking-widest">{item.cat}</span>
                  <h4 className="text-4xl font-bold text-white">{item.name}</h4>
                  <div className="flex items-center gap-4 text-white/50 text-xl font-medium">
                    <span className="flex items-center gap-2 text-amber-400">★ {item.rating}</span>
                    <span>•</span>
                    <span>A {item.dist}</span>
                  </div>
                </div>
                <button className="px-8 py-4 bg-blue-600 rounded-2xl text-white font-bold text-xl group-hover:scale-105 transition-all">
                  Ver Menú
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
