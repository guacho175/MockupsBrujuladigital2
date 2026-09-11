import React from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { Layout } from '../components/Layout';
import { 
  Telescope, 
  MapPin, 
  Map as MapIcon, 
  Utensils, 
  Bus, 
  PhoneCall, 
  MessageSquareText, 
  Languages, 
  LogOut 
} from 'lucide-react';

export const MainMenuView: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const menuItems = [
    { id: 'observatory', icon: Telescope, color: 'bg-blue-600', path: '/observatory' },
    { id: 'tourist_places', icon: MapPin, color: 'bg-emerald-600', path: '/tourist-places' },
    { id: 'map_directions', icon: MapIcon, color: 'bg-amber-600', path: '/map' },
    { id: 'gastronomy_services', icon: Utensils, color: 'bg-orange-600', path: '/gastronomy' },
    { id: 'transport', icon: Bus, color: 'bg-indigo-600', path: '/transport' },
    { id: 'emergencies', icon: PhoneCall, color: 'bg-rose-600', path: '/emergency' },
    { id: 'ai_assistant', icon: MessageSquareText, color: 'bg-violet-600', path: '/ai' },
    { id: 'change_language', icon: Languages, color: 'bg-slate-600', path: '/language' },
    { id: 'end_session', icon: LogOut, color: 'bg-zinc-700', path: '/survey' },
  ];

  return (
    <Layout showBackButton={false} showHomeButton={false} title={t('main_menu')}>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 h-full p-4 overflow-y-auto no-scrollbar pb-24">
        {menuItems.map((item, index) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            onClick={() => navigate(item.path)}
            className="group relative flex flex-col items-center justify-center p-12 bg-white/5 border-2 border-white/10 rounded-[60px] hover:bg-white/10 hover:border-white/20 transition-all active:scale-[0.97] min-h-[360px]"
          >
            {/* Background Glow */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity rounded-[60px] blur-3xl ${item.color}`} />
            
            <div className={`mb-10 p-10 rounded-[40px] ${item.color} shadow-2xl transition-transform group-hover:scale-110 group-hover:rotate-3`}>
              <item.icon size={80} className="text-white" strokeWidth={1.5} />
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-white mb-2 leading-tight">
                {t(item.id as any)}
              </h3>
            </div>

            {/* Selection indicator */}
            <div className="absolute top-10 right-10 w-4 h-4 rounded-full bg-white/10 group-hover:bg-blue-400 transition-colors" />
          </motion.button>
        ))}
      </div>
    </Layout>
  );
};
