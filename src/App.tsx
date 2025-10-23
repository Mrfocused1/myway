import { HeroSection } from './components/HeroSection'
import { ScrollVelocity } from './components/ScrollVelocity'
import { Navigation } from './components/Navigation'
import { FeatureCard } from './components/FeatureCard'
import { AccordionSection } from './components/AccordionSection'
import { HowItWorks } from './components/HowItWorks'
import { InfiniteMovingCards } from './components/ui/infinite-moving-cards'
import { Footer } from './components/Footer'
import { motion } from 'framer-motion'
import { useState } from 'react'

function App() {
  const [flippedCards, setFlippedCards] = useState<{[key: string]: boolean}>({
    nigerian: false,
    caribbean: false,
    european: false
  });

  const toggleCard = (cardName: string) => {
    setFlippedCards(prev => ({
      ...prev,
      [cardName]: !prev[cardName]
    }));
  };
  return (
    <div className="min-h-screen">
      <Navigation
        items={[
          { label: "Home", href: "/" },
          { label: "Our Menus", href: "/menu" },
          { label: "Catering Services", href: "/services" },
          { label: "About Us", href: "/about" },
          { label: "Get a Quote", href: "/about#contact" },
        ]}
      />
      <HeroSection
        logo={{
          url: "/myway-logo.svg",
          alt: "MYWAY CATERING Logo"
        }}
        title={
          <>
            Myway Catering
            <br />
            Catering Your Way
          </>
        }
        subtitle="Welcome to Myway Catering, where exceptional culinary experiences meet personalised service. We take pride in crafting delicious meals tailored to your unique events."
        callToAction={{
          text: "REQUEST A QUOTE →",
          href: "/about#contact",
        }}
        backgroundImages={[
          "https://github.com/Mrfocused1/byway-training/blob/main/mariamm.jpg?raw=true",
          "https://github.com/Mrfocused1/YouTube-directory/blob/main/hero%20image%201.jpg?raw=true",
          "https://github.com/Mrfocused1/YouTube-directory/blob/main/patties.jpg?raw=true",
          "https://github.com/Mrfocused1/YouTube-directory/blob/main/italian%20food-2.jpg?raw=true"
        ]}
        scrollingText={
          <ScrollVelocity velocity={2} className="text-xs">
            {[
              <span key="item1">Nigerian • Caribbean • European Cuisine</span>,
              <span key="item2">Corporate Events • Weddings • Private Celebrations</span>,
              <span key="item3">Fresh Ingredients • Authentic Recipes • Professional Service</span>,
              <span key="item4">+44 7196 103 2314 • mariam@mywaycatering.com</span>,
            ]}
          </ScrollVelocity>
        }
      />

      {/* Section 2: How It Works */}
      <HowItWorks />

      <AccordionSection />

      {/* Section 4: Feature Cards */}
      <section className="py-20 px-8 pb-10 bg-earthy-cream">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-earthy-brown-dark mb-4">
              Our Services
            </h2>
            <div className="h-1 w-20 bg-earthy-green mx-auto mb-6"></div>
            <p className="text-xl text-earthy-brown max-w-3xl mx-auto">
              Tailored catering solutions for every occasion, from corporate functions to intimate celebrations
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              <FeatureCard
                title="Corporate Events"
                description="Professional catering services tailored for business meetings, conferences, and corporate gatherings"
                buttonText="Learn More"
                buttonHref="/about"
                backgroundImage="https://github.com/Mrfocused1/YouTube-directory/blob/main/top.jpg?raw=true"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FeatureCard
                title="Private Celebrations"
                description="Exquisite cuisine for weddings, anniversaries, and special occasions with personalized menu options"
                buttonText="View Menus"
                buttonHref="/menu"
                backgroundImage="https://github.com/Mrfocused1/YouTube-directory/blob/main/Image_fx-11.jpg?raw=true"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <FeatureCard
                title="Custom Catering"
                description="Bespoke catering solutions designed around your unique vision and dietary requirements"
                buttonText="Get Started"
                buttonHref="/about#contact"
                backgroundImage="https://github.com/Mrfocused1/YouTube-directory/blob/main/bulk-order-image.png?raw=true"
              />
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-lg text-earthy-brown mb-6">
              Not sure which service is right for you?
            </p>
            <a
              href="/about#contact"
              className="inline-block bg-earthy-green text-white font-semibold px-10 py-4 rounded-lg shadow-lg hover:bg-earthy-green-dark transition-all hover:scale-105"
            >
              Contact Us for Consultation
            </a>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Types of Cuisines */}
      <section className="relative py-20 bg-earthy-cream overflow-visible">
        {/* Top Paint Splatter Effect */}
        <div className="absolute top-0 left-0 right-0 h-16 -mt-16 overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,50 Q50,20 100,45 T200,50 Q250,30 300,50 T400,45 Q450,25 500,50 T600,48 Q650,28 700,50 T800,47 Q850,22 900,50 T1000,49 Q1050,25 1100,50 T1200,50 L1200,100 L0,100 Z"
                  fill="#FAF6F1"
                  opacity="1"/>
            <path d="M0,60 Q60,40 120,55 T240,60 Q300,45 360,60 T480,58 Q540,42 600,65 T720,62 Q780,48 840,65 T960,63 Q1020,45 1080,65 T1200,65 L1200,100 L0,100 Z"
                  fill="#FAF6F1"
                  opacity="0.8"/>
          </svg>
        </div>

        {/* Bottom Paint Splatter Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-16 -mb-16 overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 L0,50 Q50,70 100,45 T200,50 Q250,75 300,50 T400,55 Q450,78 500,50 T600,52 Q650,74 700,50 T800,53 Q850,80 900,50 T1000,51 Q1050,76 1100,50 T1200,50 L1200,0 Z"
                  fill="#FAF6F1"
                  opacity="1"/>
            <path d="M0,0 L0,40 Q60,65 120,35 T240,40 Q300,60 360,40 T480,42 Q540,62 600,35 T720,38 Q780,58 840,35 T960,37 Q1020,60 1080,35 T1200,35 L1200,0 Z"
                  fill="#FAF6F1"
                  opacity="0.8"/>
          </svg>
        </div>
        <div className="container mx-auto max-w-7xl px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-earthy-brown-dark mb-4">
              Explore Our Cuisines
            </h2>
            <div className="h-1 w-20 bg-earthy-brown-dark mx-auto mb-6"></div>
            <p className="text-xl text-earthy-brown max-w-3xl mx-auto">
              A world of authentic flavors, crafted with passion and tradition
            </p>
          </motion.div>

          {/* Cuisine Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Nigerian Cuisine Card */}
            <motion.div
              className="relative h-[500px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              style={{ perspective: '1000px' }}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${flippedCards.nigerian ? 'rotate-y-180' : ''}`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flippedCards.nigerian ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
              >
                {/* Front of Card */}
                <div
                  className="absolute inset-0 group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="relative h-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=800&q=80"
                      alt="Nigerian Cuisine"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-3">Nigerian</h3>
                    <p className="text-white/90 mb-6 leading-relaxed">
                      Rich, bold flavors featuring traditional Jollof rice, savory soups, and authentic West African spices that celebrate our heritage.
                    </p>
                    <button
                      onClick={() => toggleCard('nigerian')}
                      className="inline-flex items-center gap-2 bg-earthy-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-earthy-green-dark transition-colors"
                    >
                      Read More
                      <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Back of Card */}
                <div
                  className="absolute inset-0 bg-white rounded-2xl shadow-xl p-8 overflow-y-auto"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <h3 className="text-3xl font-bold text-foreground mb-4">Nigerian Cuisine</h3>
                  <div className="h-1 w-20 bg-earthy-green mb-6"></div>
                  <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                    Experience the essence of Africa through my catering service specializing in African cuisine. I offer a diverse menu that highlights the unique spices, fresh ingredients, and time-honored recipes that have been passed down through generations. Whether for a special event or an intimate gathering, allow me to bring the warmth and richness of Africa to your table.
                  </p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => toggleCard('nigerian')}
                      className="inline-flex items-center gap-2 bg-secondary text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/80 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                      </svg>
                      Back
                    </button>
                    <a
                      href="/menu"
                      className="inline-flex items-center gap-2 bg-earthy-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-earthy-green-dark transition-colors"
                    >
                      View Menu
                      <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Caribbean Cuisine Card */}
            <motion.div
              className="relative h-[500px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ perspective: '1000px' }}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${flippedCards.caribbean ? 'rotate-y-180' : ''}`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flippedCards.caribbean ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
              >
                {/* Front of Card */}
                <div
                  className="absolute inset-0 group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="relative h-full overflow-hidden">
                    <img
                      src="https://github.com/Mrfocused1/YouTube-directory/blob/main/jerk.jpg?raw=true"
                      alt="Caribbean Cuisine"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-3">Caribbean</h3>
                    <p className="text-white/90 mb-6 leading-relaxed">
                      Vibrant island flavors with jerk chicken, tropical spices, and colorful dishes that bring the spirit of the Caribbean to life.
                    </p>
                    <button
                      onClick={() => toggleCard('caribbean')}
                      className="inline-flex items-center gap-2 bg-earthy-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-earthy-green-dark transition-colors"
                    >
                      Read More
                      <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Back of Card */}
                <div
                  className="absolute inset-0 bg-white rounded-2xl shadow-xl p-8 overflow-y-auto"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <h3 className="text-3xl font-bold text-foreground mb-4">Caribbean Cuisine</h3>
                  <div className="h-1 w-20 bg-earthy-cream mb-6"></div>
                  <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                    Immerse yourself in a vibrant culinary experience with our Caribbean cuisine catering service. I create each dish with a passion for the bold flavors and colorful ingredients that define this unique culture. From traditional jerk chicken to refreshing tropical salads, my menu is designed to transport your guests straight to the islands. Let's celebrate your next event with an unforgettable taste of the Caribbean!
                  </p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => toggleCard('caribbean')}
                      className="inline-flex items-center gap-2 bg-secondary text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/80 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                      </svg>
                      Back
                    </button>
                    <a
                      href="/menu"
                      className="inline-flex items-center gap-2 bg-earthy-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-earthy-green-dark transition-colors"
                    >
                      View Menu
                      <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* European Cuisine Card */}
            <motion.div
              className="relative h-[500px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ perspective: '1000px' }}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${flippedCards.european ? 'rotate-y-180' : ''}`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flippedCards.european ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
              >
                {/* Front of Card */}
                <div
                  className="absolute inset-0 group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="relative h-full overflow-hidden">
                    <img
                      src="https://github.com/Mrfocused1/byway-training/blob/main/marimm.jpg?raw=true"
                      alt="European Cuisine"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-3">European</h3>
                    <p className="text-white/90 mb-6 leading-relaxed">
                      Classic comfort food with traditional roasts, elegant presentation, and timeless recipes that honor European culinary heritage.
                    </p>
                    <button
                      onClick={() => toggleCard('european')}
                      className="inline-flex items-center gap-2 bg-earthy-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-earthy-green-dark transition-colors"
                    >
                      Read More
                      <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Back of Card */}
                <div
                  className="absolute inset-0 bg-white rounded-2xl shadow-xl p-8 overflow-y-auto"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <h3 className="text-3xl font-bold text-foreground mb-4">European Cuisine</h3>
                  <div className="h-1 w-20 bg-earthy-green mb-6"></div>
                  <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                    Elevate your next event with our exceptional English Cuisine catering service. Whether it's a corporate gathering, a wedding, or a family celebration, I take pride in delivering authentic English dishes that showcase quality and tradition. From classic roasts to delightful desserts, every meal is prepared with care and attention to detail, ensuring a memorable dining experience for you and your guests.
                  </p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => toggleCard('european')}
                      className="inline-flex items-center gap-2 bg-secondary text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/80 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                      </svg>
                      Back
                    </button>
                    <a
                      href="/menu"
                      className="inline-flex items-center gap-2 bg-earthy-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-earthy-green-dark transition-colors"
                    >
                      View Menu
                      <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6: Testimonials */}
      <section className="relative py-20 bg-earthy-brown overflow-visible">
        {/* Bottom Paint Splatter Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-16 -mb-16 overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 L0,50 Q50,70 100,45 T200,50 Q250,75 300,50 T400,55 Q450,78 500,50 T600,52 Q650,74 700,50 T800,53 Q850,80 900,50 T1000,51 Q1050,76 1100,50 T1200,50 L1200,0 Z"
                  fill="#5D4E37"
                  opacity="1"/>
            <path d="M0,0 L0,40 Q60,65 120,35 T240,40 Q300,60 360,40 T480,42 Q540,62 600,35 T720,38 Q780,58 840,35 T960,37 Q1020,60 1080,35 T1200,35 L1200,0 Z"
                  fill="#5D4E37"
                  opacity="0.8"/>
          </svg>
        </div>
        <div className="mx-auto flex flex-col items-center">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16 px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <div className="h-1 w-20 bg-earthy-green mx-auto mb-6"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Don't just take our word for it—hear from those who've experienced our exceptional catering
            </p>
          </motion.div>

          {/* Infinite Moving Cards */}
          <InfiniteMovingCards
            items={[
              {
                quote: "My Way Catering exceeded all expectations for our corporate gala. The Jollof rice was phenomenal, and our guests couldn't stop raving about the authentic flavors. Professional service from start to finish!",
                name: "Sarah Johnson",
                title: "Event Director • Tech Innovations Inc."
              },
              {
                quote: "We hired My Way Catering for our wedding reception and it was the best decision we made. The Ethiopian platter was a showstopper, and they accommodated all our dietary requirements perfectly.",
                name: "Michael & Lisa Chen",
                title: "Happy Couple"
              },
              {
                quote: "As a conference organizer, I need reliable catering partners. My Way Catering has become our go-to for all events. Their Peri-Peri chicken and professional setup make every event seamless.",
                name: "David Williams",
                title: "Conference Manager • Global Summit Events"
              },
              {
                quote: "The custom menu they created for our anniversary celebration was outstanding. Every dish was beautifully presented and bursting with flavor. Our guests are still talking about it months later!",
                name: "Patricia Anderson",
                title: "Client"
              },
              {
                quote: "Working with My Way Catering for our quarterly team building events has been fantastic. They understand corporate needs and always deliver quality African cuisine that impresses our team.",
                name: "James Rodriguez",
                title: "HR Director • Future Tech Solutions"
              },
              {
                quote: "From the initial consultation to the final cleanup, everything was handled with utmost professionalism. The Suya skewers were a hit at our birthday party. Highly recommend!",
                name: "Rachel Thompson",
                title: "Client"
              }
            ]}
            direction="left"
            speed="slow"
          />

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16 px-8"
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
              className="inline-block bg-earthy-green text-white font-semibold px-10 py-4 rounded-lg shadow-lg hover:bg-earthy-green-dark transition-all hover:scale-105"
            >
              Book Your Event Today
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
