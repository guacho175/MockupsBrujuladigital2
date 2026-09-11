import React from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { Layout } from '../components/Layout';
import { ChevronRight } from 'lucide-react';

export const touristPlaces = [
  {
    id: '1',
    name: 'Petroglifos de Rinconada',
    description: 'Vestigios arqueológicos milenarios que muestran la cultura local antigua.',
    image: 'https://images.unsplash.com/photo-1681740103003-5d89dee57f78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZSUyMGxhbmRzY2FwZSUyMG1vdW50YWlucyUyMGRlc2VydCUyMHBldHJvZ2x5cGhzfGVufDF8fHx8MTc4MTU1MDc1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    location: 'A 15km de Combarbalá',
    details: 'Un sitio arqueológico impresionante donde se pueden observar tallados en piedra de civilizaciones precolombinas. El acceso es gratuito y se recomienda ir con guía.'
  },
  {
    id: '2',
    name: 'Embalse Cogotí',
    description: 'Hermosa reserva de agua ideal para pesca recreativa y picnics.',
    image: 'https://images.unsplash.com/photo-1548107754-0803531b7829?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    location: 'Sector Norte de la comuna',
    details: 'El embalse es un punto de encuentro para familias locales. Ofrece una vista panorámica de la cordillera y es un excelente lugar para el avistamiento de aves.'
  },
  {
    id: '3',
    name: 'Plaza de Armas Combarbalá',
    description: 'El corazón de la ciudad, rodeado de arquitectura colonial y vida local.',
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    location: 'Centro Urbano',
    details: 'Recientemente remodelada, la plaza es famosa por su diseño sombreado y su monumento al minero. Un lugar perfecto para disfrutar de un helado artesanal.'
  }
];

export const TouristPlacesView: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <Layout title={t('tourist_places')}>
      <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto pb-32">
        {touristPlaces.map((place, index) => (
          <motion.button
            key={place.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => navigate(`/tourist-places/${place.id}`)}
            className="group flex flex-row bg-white/5 border border-white/10 rounded-[60px] overflow-hidden hover:bg-white/10 hover:border-blue-500/30 transition-all text-left"
          >
            <div className="w-[450px] h-[400px] overflow-hidden">
              <img 
                src={place.image} 
                className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"
                alt={place.name}
              />
            </div>
            <div className="flex-1 p-16 flex flex-col justify-center gap-6">
              <span className="text-xl font-bold text-blue-400 uppercase tracking-widest">{place.location}</span>
              <h3 className="text-5xl font-bold text-white">{place.name}</h3>
              <p className="text-3xl text-white/60 leading-relaxed max-w-2xl">
                {place.description}
              </p>
              <div className="mt-4 flex items-center gap-4 text-blue-400 font-bold text-2xl">
                <span>{t('view_details')}</span>
                <ChevronRight size={32} />
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </Layout>
  );
};
