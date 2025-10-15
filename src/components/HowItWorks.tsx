// import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: 1,
    title: "Initial Consultation",
    description: "Share your vision with us. We'll discuss your event type, guest count, dietary requirements, and preferences to understand your needs."
  },
  {
    number: 2,
    title: "Custom Menu Design",
    description: "Our chefs create a personalized menu tailored to your event. Choose from our extensive African cuisine offerings or request custom dishes."
  },
  {
    number: 3,
    title: "Final Details & Confirmation",
    description: "We finalize the menu, confirm quantities, discuss presentation style, and coordinate event logistics to ensure everything runs smoothly."
  },
  {
    number: 4,
    title: "Event Day Excellence",
    description: "Our team handles everything—from setup to service to cleanup. You focus on your guests while we deliver an exceptional culinary experience."
  }
];

export function HowItWorks() {
  return (
    <section className="py-16 px-8 bg-earthy-brown">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How It Works
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-earthy-green mx-auto mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.p
            className="text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            From your first inquiry to the final cleanup, we make catering effortless
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Connector Line (hidden on mobile, shown on larger screens) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-earthy-green/20 -z-10" />
              )}

              {/* Step Card */}
              <div className="relative bg-background border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
                {/* Step Number Circle */}
                <div className="absolute -top-4 left-6 w-12 h-12 rounded-full bg-earthy-green flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">{step.number}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 leading-tight mt-6">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="/about#contact"
            className="inline-block bg-earthy-green text-white font-semibold px-10 py-4 rounded-lg shadow-lg hover:bg-earthy-green-dark transition-all hover:scale-105"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
