import React from 'react';
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';

// Prop types for the HeroSection component
interface HeroSectionProps {
  logo?: {
    url: string;
    alt: string;
    text?: string;
  };
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  callToAction: {
    text: string;
    href: string;
  };
  backgroundImages: string[];
  scrollingText?: React.ReactNode;
  className?: string;
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ className, logo, title, subtitle, callToAction, backgroundImages, scrollingText }, ref) => {

    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    // Auto-advance images every 5 seconds
    React.useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }, [backgroundImages.length]);

    // Animation variants for the container to orchestrate children animations
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    };

    // Animation variants for individual text/UI elements
    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      },
    };

    return (
      <motion.section
        ref={ref}
        className={cn(
          "relative flex w-full flex-col overflow-hidden bg-background text-foreground md:flex-row pt-40 sm:pt-48 md:pt-56 lg:pt-64",
          className
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Side: Content */}
        <div className="flex w-full flex-col justify-between p-8 md:w-1/2 md:p-12 md:pt-[63px] lg:w-3/5 lg:p-16 lg:pt-[79px]">
            {/* Top Section: Logo & Main Content */}
            <div>
                <motion.header className="mb-4 md:-mt-[160px] lg:-mt-[180px]" variants={itemVariants}>
                    {logo && (
                        <div>
                            <img src={logo.url} alt={logo.alt} className="h-40 w-auto max-w-[600px] object-contain pb-[15px] brightness-0" style={{ filter: 'brightness(0) saturate(100%) invert(28%) sepia(89%) saturate(1453%) hue-rotate(130deg) brightness(95%) contrast(101%)' }} />
                        </div>
                    )}
                </motion.header>

                <motion.main variants={containerVariants} className="md:-mt-[240px]">
                    <motion.h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl" variants={itemVariants}>
                        {title}
                    </motion.h1>
                    <motion.div className="my-6 h-1 w-20 bg-emerald-700" variants={itemVariants}></motion.div>
                    <motion.p className="mb-8 max-w-md text-base text-black hidden md:block" variants={itemVariants}>
                        {subtitle}
                    </motion.p>
                    <motion.a href={callToAction.href} className="text-lg font-bold tracking-widest text-emerald-700 transition-colors hover:text-emerald-600" variants={itemVariants}>
                        {callToAction.text}
                    </motion.a>
                </motion.main>
            </div>

            {/* Bottom Section: Scrolling Text */}
            {scrollingText && (
                <motion.footer className="mt-12 w-full" variants={itemVariants}>
                    {scrollingText}
                </motion.footer>
            )}
        </div>

        {/* Right Side: Image Slider with Clip Path Animation */}
        <div className="relative w-full min-h-[300px] md:absolute md:top-0 md:right-0 md:w-1/2 md:h-[600px] lg:w-2/5 lg:h-[700px] overflow-hidden">
          {backgroundImages.map((image, index) => (
            <motion.div
              key={image}
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${image})`,
              }}
              initial={{
                clipPath: index === 0 ? 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' : 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
                x: index === 0 ? 0 : '100%'
              }}
              animate={{
                clipPath: currentImageIndex === index ? 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' : 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)',
                x: currentImageIndex === index ? 0 : currentImageIndex > index ? '-100%' : '100%',
                opacity: currentImageIndex === index ? 1 : 0
              }}
              transition={{
                clipPath: { duration: 1.2, ease: "circOut" },
                x: { duration: 0.8, ease: "easeInOut" },
                opacity: { duration: 0.5 }
              }}
            />
          ))}
        </div>
      </motion.section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
