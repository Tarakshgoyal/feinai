'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const flashVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const listItemVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.2 + i * 0.1 }
    })
  };

  return (
    <section id="about" ref={ref} className="py-20 px-6">
      <motion.div className="container mx-auto max-w-4xl">
        <motion.div
          variants={flashVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Welcome to FEIN AI</h2>
        </motion.div>

        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-lg leading-relaxed"
        >
          <p className="text-xl text-[#ddf1a5]">
            Your Financial Sidekick is Coming Soon
          </p>

          <p>
            FEIN AI is on a mission to simplify and supercharge your finances using cutting-edge AI.
            From smart budgeting to personalized investment advice — we're building the future of financial intelligence.
          </p>

          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.8 }}
            className="border-t border-waiting-text/20 pt-8 mt-8"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center justify-center">
              🔒 Be the First to Experience:
            </h3>

            <ul className="space-y-4 text-left max-w-2xl mx-auto">
              {[
                "AI-driven financial guidance to build wealth",
                "Smart saving & investment insights",
                "Real-time financial health monitoring",
                "Tax-saving recommendations"
              ].map((text, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={listItemVariant}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="flex items-start"
                >
                  <span className="mr-3">•</span>
                  {text}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.8 }}
            className="border-t border-waiting-text/20 pt-8 mt-8"
          >
            <p className="text-xl flex items-center justify-center">
              💡 Join the waitlist and stay ahead.
            </p>
            <p className="mt-4">
              We're almost ready — and trust us, it'll be worth it.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
