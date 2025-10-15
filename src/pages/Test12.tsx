// TEST PAGE 12: Grid + Reduced Padding (Section + Container)
// Based on Test 3 spacing, reduces both section and container padding

import { ScrollVelocity } from '../components/ScrollVelocity'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { motion } from 'framer-motion'
import { cn } from "@/lib/utils";
import React from 'react'

function Test12() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const backgroundImages = [
    "https://github.com/Mrfocused1/YouTube-directory/blob/main/hero%20image%201.jpg?raw=true",
    "https://github.com/Mrfocused1/YouTube-directory/blob/main/patties.jpg?raw=true",
    "https://github.com/Mrfocused1/YouTube-directory/blob/main/italian%20food-2.jpg?raw=true"
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

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
    <div className="min-h-screen">
      <Navigation
        items={[
          { label: "Home", href: "/" },
          { label: "Test 7", href: "/7" },
          { label: "Test 8", href: "/8" },
          { label: "Test 9", href: "/9" },
          { label: "Test 10", href: "/10" },
          { label: "Test 11", href: "/11" },
          { label: "Test 12", href: "/12" },
        ]}
      />

      {/* Hero Section - Grid + Reduced Section & Container Padding */}
      <motion.section
        className={cn(
          "relative w-full overflow-hidden bg-background text-foreground pt-40 sm:pt-48 md:pt-[90px] lg:pt-[110px]"
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Grid Container with REDUCED INTERNAL PADDING */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] md:grid-rows-[auto_1fr_auto] gap-4 p-8 md:w-1/2 md:p-6 lg:w-3/5 lg:p-8">
          {/* Logo */}
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <img src="/myway-logo.svg" alt="MYWAY CATERING Logo" className="h-40 w-auto max-w-[600px] object-contain pb-[15px] brightness-0" style={{ filter: 'brightness(0) saturate(100%) invert(28%) sepia(89%) saturate(1453%) hue-rotate(130deg) brightness(95%) contrast(101%)' }} />
          </motion.div>

          {/* Content */}
          <div className="md:col-span-2">
            <motion.main variants={containerVariants}>
              <motion.h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl" variants={itemVariants}>
                Myway Catering
                <br />
                Catering Your Way
              </motion.h1>
              <motion.div className="my-6 h-1 w-20 bg-emerald-700" variants={itemVariants}></motion.div>
              <motion.p className="mb-8 max-w-md text-base text-black hidden md:block" variants={itemVariants}>
                Welcome to Myway Catering, where exceptional culinary experiences meet personalised service. We take pride in crafting delicious meals tailored to your unique events.
              </motion.p>
              <motion.a href="/about#contact" className="text-lg font-bold tracking-widest text-emerald-700 transition-colors hover:text-emerald-600" variants={itemVariants}>
                REQUEST A QUOTE →
              </motion.a>
            </motion.main>
          </div>

          {/* Scrolling text */}
          <motion.footer className="md:col-span-2 w-full" variants={itemVariants}>
            <ScrollVelocity velocity={2} className="text-xs">
              {[
                <span key="item1">Nigerian • Caribbean • European Cuisine</span>,
                <span key="item2">Corporate Events • Weddings • Private Celebrations</span>,
                <span key="item3">Fresh Ingredients • Authentic Recipes • Professional Service</span>,
                <span key="item4">+44 7196 103 2314 • mariam@mywaycatering.com</span>,
              ]}
            </ScrollVelocity>
          </motion.footer>
        </div>

        {/* Right Side: Image Slider */}
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

      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Test Page 12</h2>
        <p className="text-lg text-muted-foreground">Grid + Reduced padding on both section (pt-[90px]) and container (p-6)</p>
      </div>

      <Footer />
    </div>
  )
}

export default Test12
