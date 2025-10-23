import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';

export function AboutPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    guestCount: '',
    message: ''
  });

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Our Menus", href: "/menu" },
    { label: "Catering Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Get a Quote", href: "/about#contact" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format event type for better readability
    const eventTypeDisplay = formData.eventType.charAt(0).toUpperCase() + formData.eventType.slice(1);

    // Create email subject and body
    const subject = `New Catering Inquiry from ${formData.name}`;
    const body = `
Hello MYWAY Catering,

I would like to request a catering quote for my upcoming event.

EVENT DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Event Date: ${formData.eventDate}
Event Type: ${eventTypeDisplay}
Expected Guest Count: ${formData.guestCount}

ADDITIONAL DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.message || 'No additional details provided.'}

Please get back to me at your earliest convenience.

Thank you!
${formData.name}
    `.trim();

    // Create mailto link with encoded parameters
    const mailtoLink = `mailto:mariam@mywaycatering.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open default email client
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Us - MYWAY Catering | Professional Catering Services"
        description="Learn about MYWAY Catering's commitment to excellence. We specialize in authentic Nigerian, Caribbean, and European cuisine for corporate events, weddings, and celebrations. Contact us for a quote."
        keywords="about MYWAY Catering, professional catering company, Nigerian caterers, Caribbean caterers, event catering company, wedding caterers UK, catering company near me"
        canonical="https://www.mywaycatering.com/about"
      />
      <Navigation items={navItems} useWhiteLogo />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 bg-earthy-brown text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Bringing the authentic flavors of Africa to your special events
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">We Take Pride in Catering</h2>
            <div className="h-1 w-20 bg-earthy-green mb-6"></div>
            <div className="text-lg text-foreground/90 leading-relaxed">
              <p>
                Welcome to Myway Catering, where exceptional culinary experiences meet personalized service. We specialize in authentic Nigerian, Caribbean, and European cuisine, crafting delicious meals tailored to your unique events. From intimate gatherings to grand celebrations, we work closely with clients to create menus that reflect their tastes and preferences, bringing your vision to life with exquisite flavors and impeccable presentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 px-8 bg-earthy-green">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div
              className="p-8 rounded-lg bg-white border border-border relative overflow-hidden flex items-end min-h-[220px]"
              style={{
                backgroundImage: `url(https://github.com/Mrfocused1/YouTube-directory/blob/main/cooking.jpg?raw=true)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  To deliver exceptional African cuisine experiences that elevate every event, celebrating culture and
                  creating lasting memories through authentic flavors and professional service.
                </p>
              </div>
            </div>

            {/* Quality */}
            <div
              className="p-8 rounded-lg bg-white border border-border relative overflow-hidden flex items-end min-h-[220px]"
              style={{
                backgroundImage: `url(https://github.com/Mrfocused1/YouTube-directory/blob/main/top%20down%20view.jpg?raw=true)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">Quality First</h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  We source only the finest ingredients and prepare every dish with meticulous attention to detail,
                  ensuring authentic flavors that honor traditional recipes while meeting the highest culinary standards.
                </p>
              </div>
            </div>

            {/* Service */}
            <div
              className="p-8 rounded-lg bg-white border border-border relative overflow-hidden flex items-end min-h-[220px]"
              style={{
                backgroundImage: `url(https://github.com/Mrfocused1/YouTube-directory/blob/main/behind.jpg?raw=true)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  From initial consultation to final cleanup, we provide seamless, professional service tailored to your
                  unique needs, making your event planning effortless and stress-free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">What We Do</h2>
            <div className="h-1 w-20 bg-earthy-green mb-6"></div>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-earthy-green flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Corporate Events</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Professional catering for business meetings, conferences, seminars, and corporate gatherings.
                  We understand the importance of impressing clients and colleagues with quality cuisine.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-earthy-green flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Private Celebrations</h3>
                <p className="text-foreground/80 leading-relaxed">
                  From weddings to anniversaries, birthdays to family reunions, we create personalized menus that
                  reflect your taste and make your celebration truly special.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-earthy-green flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Custom Catering</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Every event is unique. We work closely with you to design bespoke menus that accommodate dietary
                  requirements, preferences, and cultural considerations.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-earthy-green flex items-center justify-center text-white font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Full-Service Experience</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Beyond food preparation, we provide complete event support including setup, service staff,
                  presentation, and cleanup—so you can focus on enjoying your event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 px-8 bg-earthy-brown">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <div className="h-1 w-20 bg-earthy-green mx-auto mb-6"></div>
            <p className="text-xl text-white/80">
              Ready to plan your next event? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-earthy-green focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-earthy-green focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-foreground mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-earthy-green focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Event Date */}
              <div>
                <label htmlFor="eventDate" className="block text-sm font-bold text-foreground mb-2">
                  Event Date *
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  required
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-earthy-green focus:border-transparent"
                />
              </div>

              {/* Event Type */}
              <div>
                <label htmlFor="eventType" className="block text-sm font-bold text-foreground mb-2">
                  Event Type *
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-earthy-green focus:border-transparent appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23374151' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    paddingRight: '3rem'
                  }}
                >
                  <option value="">Select event type</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="conference">Conference</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Guest Count */}
              <div>
                <label htmlFor="guestCount" className="block text-sm font-bold text-foreground mb-2">
                  Expected Guest Count *
                </label>
                <input
                  type="number"
                  id="guestCount"
                  name="guestCount"
                  required
                  min="1"
                  value={formData.guestCount}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-earthy-green focus:border-transparent"
                  placeholder="50"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2">
                Additional Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-earthy-green focus:border-transparent resize-none"
                placeholder="Tell us about your event, dietary requirements, or any special requests..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-block bg-earthy-green text-white font-semibold px-12 py-4 rounded-lg shadow-lg hover:bg-earthy-green-dark transition-all hover:scale-105"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-8 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Let's Create Something Amazing Together</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether it's a corporate gala or an intimate celebration, we're here to make it unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="inline-block bg-secondary text-foreground font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-secondary/80 transition-all hover:scale-105"
            >
              View Our Menu
            </a>
            <a
              href="tel:+447961032314"
              className="inline-block bg-earthy-green text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-earthy-green-dark transition-all hover:scale-105"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
