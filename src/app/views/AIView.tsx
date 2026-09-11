import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { Layout } from '../components/Layout';
import { Mic, Send, MessageSquareText, Sparkles, User, Bot, RotateCcw } from 'lucide-react';

export const AIView: React.FC = () => {
  const { t } = useLanguage();
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const suggestions = [
    t('ai_suggestion1'),
    t('ai_suggestion2'),
    t('ai_suggestion3'),
  ];

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', text }]);
    setQuery('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let response = "¡Claro! En Combarbalá puedes visitar el Observatorio Cruz del Sur, que es un imperdible. También te recomiendo los petroglifos de Rinconada para conocer nuestra historia ancestral.";
      if (text.toLowerCase().includes('comer') || text.toLowerCase().includes('restaurante')) {
        response = "Te recomiendo visitar el Restaurante 'El Astro' cerca de la plaza central, famoso por su cabrito al horno y empanadas tradicionales.";
      } else if (text.toLowerCase().includes('llegar') || text.toLowerCase().includes('donde')) {
        response = "El observatorio se encuentra a solo 3.5 km del centro. Puedes seguir la señalética de la Ruta Antakari o pedir un transporte local en el paradero principal.";
      }
      
      setMessages(prev => [...prev, { role: 'bot', text: response }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <Layout title={t('ai_assistant')}>
      <div className="flex flex-col h-full max-w-5xl mx-auto gap-8 pb-32">
        {/* Chat Area */}
        <div className="flex-1 bg-white/5 border border-white/10 rounded-[60px] overflow-hidden flex flex-col p-10 min-h-[600px]">
          <div className="flex-1 overflow-y-auto space-y-8 no-scrollbar p-6">
            {messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-8 opacity-40">
                <Sparkles size={120} className="text-blue-400" />
                <p className="text-4xl font-medium">Pregúntame cualquier cosa sobre Combarbalá</p>
              </div>
            )}
            
            <AnimatePresence initial={false}>
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-6 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'bot' && (
                    <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shrink-0">
                      <Bot size={32} />
                    </div>
                  )}
                  <div className={`max-w-[80%] p-8 rounded-[40px] text-3xl leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-white/10 text-white/90 rounded-tl-none border border-white/10'
                  }`}>
                    {msg.text}
                  </div>
                  {msg.role === 'user' && (
                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                      <User size={32} />
                    </div>
                  )}
                </motion.div>
              ))}
              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center">
                    <Bot size={32} />
                  </div>
                  <div className="bg-white/10 p-8 rounded-[40px] rounded-tl-none flex gap-2">
                    <div className="w-3 h-3 bg-white/50 rounded-full animate-bounce" />
                    <div className="w-3 h-3 bg-white/50 rounded-full animate-bounce delay-100" />
                    <div className="w-3 h-3 bg-white/50 rounded-full animate-bounce delay-200" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Input Area */}
          <div className="mt-8 space-y-8">
            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(s)}
                  className="whitespace-nowrap px-8 py-4 bg-white/10 border border-white/10 rounded-full text-2xl font-medium hover:bg-white/20 transition-all text-blue-300"
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="flex gap-6 items-center">
              <button className="p-8 bg-blue-600 rounded-full text-white animate-pulse shadow-xl shadow-blue-600/30">
                <Mic size={56} />
              </button>
              
              <div className="flex-1 relative">
                <input 
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend(query)}
                  placeholder={t('ai_placeholder')}
                  className="w-full bg-white/10 border-2 border-white/10 rounded-[40px] p-10 pr-24 text-3xl focus:border-blue-500/50 outline-none transition-all"
                />
                <button 
                  onClick={() => handleSend(query)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 p-6 text-blue-400 hover:text-white transition-colors"
                >
                  <Send size={48} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <button 
          onClick={() => { setMessages([]); setQuery(''); }}
          className="flex items-center justify-center gap-4 text-white/40 text-2xl font-bold hover:text-white transition-colors"
        >
          <RotateCcw size={32} />
          {t('another_query')}
        </button>
      </div>
    </Layout>
  );
};
