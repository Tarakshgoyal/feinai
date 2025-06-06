'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, Shield, Zap, PieChart, Target } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Get personalized financial advice powered by advanced machine learning algorithms.'
  },
  {
    icon: TrendingUp,
    title: 'Smart Investments',
    description: 'Discover investment opportunities tailored to your risk profile and financial goals.'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Bank-level security ensures your financial data is always protected and encrypted.'
  },
  {
    icon: Zap,
    title: 'Real-time Updates',
    description: 'Stay informed with instant notifications about market changes and opportunities.'
  },
  {
    icon: PieChart,
    title: 'Budget Optimization',
    description: 'Optimize your spending with intelligent budget recommendations and tracking.'
  },
  {
    icon: Target,
    title: 'Goal Achievement',
    description: 'Set and track financial goals with AI-assisted planning and milestone tracking.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Powerful Features</h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Discover how FEIN AI will transform your financial future with cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="bg-waiting-text/5 p-6 rounded-lg border border-waiting-text/10 hover:border-waiting-text/30 transition-all duration-300"
            >
              <feature.icon size={48} className="mb-4 text-waiting-text" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="opacity-80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
