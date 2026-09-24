import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUp, Navigation, Phone } from 'lucide-react';
import { businessConfig } from '../config/business';
import { WhatsAppIcon } from './icons';

export const FloatingActionBar: React.FC = () => {
  const { contact } = businessConfig;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Mobile & tablet: quick contact bar */}
          <motion.div
            key="bar"
            className="lg:hidden fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pointer-events-none"
            initial={{ y: 96, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 96, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 380, damping: 34 }}
          >
            <nav
              aria-label="تماس سریع"
              className="pointer-events-auto mx-auto max-w-md grid grid-cols-3 gap-1.5 p-1.5 rounded-2xl bg-ink/95 backdrop-blur-md shadow-deep ring-1 ring-gold-bright/30"
            >
              <a href={contact.telUri} className="btn min-h-11 px-2 text-xs bg-surface text-ink">
                <Phone className="w-4 h-4" strokeWidth={1.75} />
                تماس
              </a>
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn min-h-11 px-2 text-xs bg-whatsapp text-white"
              >
                <WhatsAppIcon className="w-4 h-4" />
                واتس‌اپ
              </a>
              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn min-h-11 px-2 text-xs bg-white/10 text-white"
              >
                <Navigation className="w-4 h-4 text-gold-soft" strokeWidth={1.75} />
                مسیریابی
              </a>
            </nav>
          </motion.div>

          {/* Desktop: back to top */}
          <motion.button
            key="top"
            type="button"
            onClick={scrollToTop}
            className="hidden lg:flex fixed bottom-6 left-6 z-40 w-12 h-12 items-center justify-center rounded-full bg-ink text-gold-soft shadow-lift ring-1 ring-gold-bright/30 hover:bg-ink-soft transition-colors"
            aria-label="بازگشت به بالای صفحه"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </>
      )}
    </AnimatePresence>
  );
};
