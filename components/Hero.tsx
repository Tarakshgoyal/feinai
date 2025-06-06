'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute top-20 right-20 w-32 h-32 border border-waiting-text/20 rounded-full"
        />

        <motion.div 
          animate={{ rotate: -360, y: [0, -20, 0] }}
          transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
          className="absolute bottom-32 left-16 w-24 h-24 border border-waiting-text/30 rounded-full"
        />

        <div className="text-center z-10 px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold text-[#ddf1a5] mb-6 bg-gradient-to-r from-waiting-text to-waiting-text/70 bg-clip-text "
          >
            FEIN AI
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 opacity-80"
          >
            Your Financial Sidekick is Coming Soon
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="animate-bounce"
          >
            <Link
              to="about"
              smooth={true}
              duration={700}
              offset={-50}
              className="cursor-pointer"
            >
              <ChevronDown size={32} className="mx-auto" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
