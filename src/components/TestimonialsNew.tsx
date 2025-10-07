// import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialCard, type TestimonialAuthor } from './ui/testimonial-card';

interface Testimonial {
  author: TestimonialAuthor;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    author: {
      name: "Sarah Johnson",
      role: "Event Director",
      company: "Tech Innovations Inc."
    },
    text: "My Way Catering exceeded all expectations for our corporate gala. The Jollof rice was phenomenal, and our guests couldn't stop raving about the authentic flavors. Professional service from start to finish!"
  },
  {
    author: {
      name: "Michael & Lisa Chen",
      role: "Happy Couple"
    },
    text: "We hired My Way Catering for our wedding reception and it was the best decision we made. The Ethiopian platter was a showstopper, and they accommodated all our dietary requirements perfectly."
  },
  {
    author: {
      name: "David Williams",
      role: "Conference Manager",
      company: "Global Summit Events"
    },
    text: "As a conference organizer, I need reliable catering partners. My Way Catering has become our go-to for all events. Their Peri-Peri chicken and professional setup make every event seamless."
  },
  {
    author: {
      name: "Patricia Anderson",
      role: "Client"
    },
    text: "The custom menu they created for our anniversary celebration was outstanding. Every dish was beautifully presented and bursting with flavor. Our guests are still talking about it months later!"
  },
  {
    author: {
      name: "James Rodriguez",
      role: "HR Director",
      company: "Future Tech Solutions"
    },
    text: "Working with My Way Catering for our quarterly team building events has been fantastic. They understand corporate needs and always deliver quality African cuisine that impresses our team."
  },
  {
    author: {
      name: "Rachel Thompson",
      role: "Client"
    },
    text: "From the initial consultation to the final cleanup, everything was handled with utmost professionalism. The Suya skewers were a hit at our birthday party. Highly recommend!"
  }
];

export function TestimonialsNew() {
  return (
    <section className="py-20 px-0 bg-slate-800 overflow-hidden">
      <div className="mx-auto flex flex-col items-center gap-16">
        {/* Section Header */}
        <motion.div
          className="text-center px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <div className="h-1 w-20 bg-emerald-700 mx-auto mb-6"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Don't just take our word for it—hear from those who've experienced our exceptional catering
          </p>
        </motion.div>

        {/* Testimonials Marquee */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(4)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          {/* Gradient Overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-slate-800 sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-slate-800 sm:block" />
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg text-white/80 mb-6">
            Ready to create your own success story?
          </p>
          <a
            href="/about#contact"
            className="inline-block bg-emerald-700 text-white font-semibold px-10 py-4 rounded-lg shadow-lg hover:bg-emerald-600 transition-all hover:scale-105"
          >
            Book Your Event Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
