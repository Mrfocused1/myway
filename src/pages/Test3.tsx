// TEST PAGE 3: CSS Grid with 3 Rows (auto 1fr auto)
// Logo in row 1, content in row 2, scrolling text in row 3

import { ScrollVelocity } from '../components/ScrollVelocity'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { motion } from 'framer-motion'
import { cn } from "@/lib/utils";
import React from 'react'

function Test3() {
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
          { label: "Test 1", href: "/1" },
          { label: "Test 2", href: "/2" },
          { label: "Test 3", href: "/3" },
          { label: "Test 4", href: "/4" },
          { label: "Test 5", href: "/5" },
          { label: "Test 6", href: "/6" },
        ]}
      />

      {/* Hero Section - CSS Grid 3 Rows */}
      <motion.section
        className={cn(
          "relative w-full overflow-hidden bg-background text-foreground pt-40 sm:pt-48 md:pt-0"
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Grid Container with 3 rows: auto 1fr auto */}
        <div className="grid grid-cols-1 grid-rows-[auto_1fr_auto] p-8 md:absolute md:top-0 md:left-0 md:w-1/2 md:h-[700px] md:p-12 lg:w-3/5 lg:p-16">
          {/* Logo at TOP - Row 1 */}
          <motion.div variants={itemVariants}>
            <img src="/myway-logo.svg" alt="MYWAY CATERING Logo" className="h-40 w-auto max-w-[600px] object-contain pb-[15px] brightness-0" style={{ filter: 'brightness(0) saturate(100%) invert(28%) sepia(89%) saturate(1453%) hue-rotate(130deg) brightness(95%) contrast(101%)' }} />
          </motion.div>

          {/* Content in MIDDLE - Row 2 (1fr expands to fill space) */}
          <div className="flex items-center">
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

          {/* Scrolling text at BOTTOM - Row 3 */}
          <motion.footer className="w-full" variants={itemVariants}>
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
        <div className="relative w-full min-h-[300px] md:absolute md:top-0 md:right-0 md:w-1/2 md:h-[700px] lg:w-2/5 overflow-hidden">
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
        <h2 className="text-3xl font-bold mb-4">Test Page 3</h2>
        <p className="text-lg text-muted-foreground">CSS Grid with 3 rows (auto 1fr auto)</p>
      </div>

      <Footer />
    </div>
  )
}

export default Test3
