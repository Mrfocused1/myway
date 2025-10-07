import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  img: string;
  quote: string;
  name: string;
  role: string;
  bgColor: string;
  title: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  className?: string;
}

export const Testimonials = ({ testimonials, className }: TestimonialsProps) => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number>(0);
  const [autorotate, setAutorotate] = useState<boolean>(true);
  const autorotateTiming: number = 7000;

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive(
        active + 1 === testimonials.length ? 0 : (active) => active + 1,
      );
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [active, autorotate, testimonials.length]);

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement)
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className={cn("py-16 px-8 transition-colors duration-700", testimonials[active].bgColor)}>
      <div className="mb-12 text-center">
        <AnimatePresence mode="wait">
          <motion.h2
            key={active}
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {testimonials[active].title}
          </motion.h2>
        </AnimatePresence>
        <div className="mx-auto h-1 w-20 bg-white"></div>
      </div>
      <div className={cn("mx-auto w-full max-w-3xl text-center", className)}>
        <div className="relative h-80 mb-8">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2">
          <div className="h-80">
            {testimonials.map((testimonial, index) => (
              <AnimatePresence key={index} mode="wait">
                {active === index && (
                  <motion.div
                    className="absolute inset-0 -z-10 h-full"
                    initial={{
                      opacity: 0,
                      x: -400,
                      y: 200
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                      transition: {
                        duration: 0.8,
                        delay: 0.6,
                        ease: [0.22, 1, 0.36, 1]
                      }
                    }}
                    exit={{
                      opacity: 0,
                      x: 400,
                      y: 200,
                      transition: {
                        duration: 0.6,
                        ease: [0.64, 0, 0.78, 0]
                      }
                    }}
                    onAnimationStart={() => heightFix()}
                  >
                    <img
                      className="relative left-1/2 top-11 -translate-x-1/2 rounded-full object-cover"
                      src={testimonial.img}
                      width={280}
                      height={280}
                      alt={testimonial.name}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-6 md:mb-6 mb-[100px] max-h-[100px] transition-all delay-300 duration-150 ease-in-out">
        <div className="relative flex flex-col" ref={testimonialsRef}>
          {testimonials.map((testimonial, index) => (
            <AnimatePresence key={index} mode="wait">
              {active === index && (
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 16 }}
                  transition={{
                    enter: { duration: 0.5, delay: 0.2 },
                    exit: { duration: 0.3, delay: 0.3 }
                  }}
                  onAnimationStart={() => heightFix()}
                >
                  <div className="text-2xl font-bold text-white before:content-['\201C'] after:content-['\201D']">
                    {testimonial.quote}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>
      <div className="-m-1.5 flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            className={cn(
              "m-1.5 inline-flex justify-center whitespace-nowrap rounded-lg px-8 py-3 text-sm font-semibold shadow-lg transition-all duration-150 focus-visible:outline-none focus-visible:ring focus-visible:ring-primary/30",
              active === index
                ? "bg-foreground text-background hover:bg-foreground/90 hover:scale-105"
                : "bg-secondary text-foreground hover:bg-secondary/80 hover:scale-105"
            )}
            onClick={() => {
              setActive(index);
              setAutorotate(false);
            }}
          >
            <span>{testimonial.name}</span>{" "}
            <span className={active === index ? "text-background/60" : "text-muted-foreground"}>-</span>{" "}
            <span>{testimonial.role}</span>
          </button>
        ))}
      </div>
      </div>
    </section>
  );
};
