import { useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { supabase, CateringPackageDB } from '../lib/supabase';

export function CateringServicesPage() {
  const [packages, setPackages] = useState<CateringPackageDB[]>([]);
  const [loading, setLoading] = useState(true);
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Our Menus", href: "/menu" },
    { label: "Catering Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Get a Quote", href: "/about#contact" },
  ];

  const services = [
    {
      title: "Corporate Catering",
      description: "At our company, we provide top-tier Commercial Catering services that stand out for their culinary excellence and professional service. We take the time to understand your specific requirements and craft a menu that fits your vision, ensuring every event is executed flawlessly. Let's work together to create a memorable experience for your attendees.",
      features: [
        "Business meetings and conferences",
        "Product launches and corporate galas",
        "Team building events and workshops",
        "Executive luncheons and dinners",
        "Culinary excellence and professional service",
        "Custom menus tailored to your vision"
      ],
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80"
    },
    {
      title: "Wedding Catering",
      description: "Make your special day unforgettable with our wedding catering services. We create personalized menus that reflect your style and make your celebration truly special.",
      features: [
        "Personalized wedding menus",
        "Engagement parties and receptions",
        "Elegant presentation and service",
        "Professional staff and coordination",
        "Custom menu development",
        "Full-service wedding catering"
      ],
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80"
    },
    {
      title: "Custom Catering",
      description: "At Myway Catering, we believe that every event deserves a unique and unforgettable experience. With our custom catering service, I work closely with clients to create menus that reflect their tastes and preferences, ensuring each dish is a perfect fit for the occasion. Whether it's an intimate gathering or a grand celebration, I'm dedicated to bringing your vision to life with exquisite flavors and impeccable presentation.",
      features: [
        "Personalized menu development",
        "Menus that reflect your tastes",
        "Perfect fit for any occasion",
        "Intimate gatherings to grand celebrations",
        "Exquisite flavors and presentation",
        "Close collaboration with clients"
      ],
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80"
    },
    {
      title: "Full-Service Experience",
      description: "Beyond exceptional food, we provide comprehensive event support to ensure your occasion runs smoothly from start to finish.",
      features: [
        "Professional service staff",
        "Complete setup and breakdown",
        "Elegant presentation and plating",
        "Equipment and tableware rental",
        "Event coordination support",
        "Post-event cleanup"
      ],
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
    }
  ];

  useEffect(() => {
    const fetchPackages = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('catering_packages')
        .select('*')
        .order('display_order');

      if (!error && data) {
        setPackages(data);
      }
      setLoading(false);
    };

    fetchPackages();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation items={navItems} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 bg-slate-800 text-white">
        <div className="container mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Catering Services
          </motion.h1>
          <motion.p
            className="text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional catering solutions for every occasion, delivered with excellence and authentic African flavors
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <div className="h-1 w-20 bg-emerald-700 mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive catering solutions tailored to your needs
            </p>
          </motion.div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <h3 className="text-3xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-700 flex items-center justify-center text-white text-xs font-bold mt-0.5">
                          ✓
                        </span>
                        <span className="text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-8 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Catering Packages
            </h2>
            <div className="h-1 w-20 bg-emerald-700 mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the package that best fits your event needs and budget
            </p>
          </motion.div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-700"></div>
              <p className="mt-4 text-muted-foreground">Loading packages...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                className={`relative p-8 rounded-2xl border-2 ${
                  pkg.featured
                    ? 'border-emerald-700 bg-white shadow-xl scale-105'
                    : 'border-border bg-background'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-700 text-white px-6 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-emerald-700 mb-2">{pkg.price}</p>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.includes.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-700/10 flex items-center justify-center text-emerald-700 text-xs font-bold mt-0.5">
                        ✓
                      </span>
                      <span className="text-foreground/90 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="/about#contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                    pkg.featured
                      ? 'bg-emerald-700 text-white hover:bg-emerald-600'
                      : 'bg-secondary text-foreground hover:bg-secondary/80'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
              ))}
            </div>
          )}

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-muted-foreground mb-4">
              All packages can be customized to suit your specific needs and dietary requirements
            </p>
            <a
              href="/about#contact"
              className="inline-block text-emerald-700 font-semibold hover:underline"
            >
              Contact us for a custom quote →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-8 bg-slate-800 text-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose My Way Catering
            </h2>
            <div className="h-1 w-20 bg-emerald-700 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Authentic Flavors",
                description: "Traditional African recipes prepared with authentic ingredients and techniques"
              },
              {
                title: "Professional Service",
                description: "Experienced staff dedicated to making your event seamless and memorable"
              },
              {
                title: "Flexible Options",
                description: "Customizable menus to accommodate all dietary needs and preferences"
              },
              {
                title: "Quality Guaranteed",
                description: "Fresh ingredients, expert preparation, and presentation excellence"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-emerald-700 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2 items-center">
                {/* Image Side */}
                <div className="relative h-64 md:h-full min-h-[400px]">
                  <img
                    src="https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80"
                    alt="Catering Event"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/60 to-transparent"></div>
                </div>

                {/* Content Side */}
                <div className="p-8 md:p-12 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Ready to Plan Your Event?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Let's create an unforgettable culinary experience for your guests. Contact us today for a personalized quote.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/about#contact"
                      className="inline-block bg-emerald-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-emerald-600 transition-all hover:scale-105"
                    >
                      Request a Quote
                    </a>
                    <a
                      href="/menu"
                      className="inline-block bg-secondary text-foreground font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-secondary/80 transition-all hover:scale-105"
                    >
                      View Our Menu
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
