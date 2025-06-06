
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-waiting-text/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3 mb-6 md:mb-0"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-waiting-text to-waiting-text/70 rounded-lg flex items-center justify-center">
              <span className="text-waiting-bg font-bold text-sm">F</span>
            </div>
            <span className="text-lg font-bold">FEIN AI</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center space-x-6"
          >
            <span className="text-sm opacity-60">Follow us:</span>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-waiting-text/10 rounded-full hover:bg-waiting-text/20 transition-colors"
            >
              <Instagram size={20} />
            </motion.a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-8 pt-8 border-t border-waiting-text/10"
        >
          <p className="text-sm opacity-60">
            © 2024 FEIN AI. All rights reserved. Building the future of financial intelligence.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
