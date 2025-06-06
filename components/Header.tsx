
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-waiting-bg/90 backdrop-blur-sm border-b border-waiting-text/10"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-30 h-10  flex items-center justify-center">
              <Image src={'/logoo.svg'}  alt={''} width={20} height={20} className='w-17'/>
            </div>
          </motion.div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="#about" className="hover:text-waiting-text/80 transition-colors">About</Link>
            <Link href="#features" className="hover:text-waiting-text/80 transition-colors">Features</Link>
            <Link href="#survey" className="hover:text-waiting-text/80 transition-colors">Survey</Link>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
