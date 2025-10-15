import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export function TermsOfServicePage() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Our Menus", href: "/menu" },
    { label: "Catering Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Get a Quote", href: "/about#contact" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation items={navItems} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 bg-slate-800 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Last updated: October 15, 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">

            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Agreement to Terms</h2>
              <div className="h-1 w-20 bg-emerald-700 mb-6"></div>
              <p className="text-foreground/80 leading-relaxed mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and MYWAY Catering
                ("Company," "we," "us," or "our") concerning your access to and use of our website (www.samplesites.space)
                and catering services.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                By accessing our website or using our services, you agree to be bound by these Terms. If you do not agree
                to these Terms, please do not access the website or use our services.
              </p>
            </div>

            {/* Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Services</h2>
              <div className="h-1 w-20 bg-emerald-700 mb-6"></div>
              <p className="text-foreground/80 leading-relaxed mb-4">
                MYWAY Catering provides professional catering services specializing in Nigerian, Caribbean, and European
                cuisine for various events including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-foreground/80 space-y-2">
                <li>Corporate events and business functions</li>
                <li>Private celebrations (weddings, birthdays, anniversaries)</li>
                <li>Custom catering solutions</li>
                <li>Event planning and consultation</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                We reserve the right to refuse service to anyone for any reason at any time, and to modify or discontinue
                our services with or without notice.
              </p>
            </div>

            {/* Booking and Reservations */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Booking and Reservations</h2>
              <div className="h-1 w-20 bg-emerald-700 mb-6"></div>

              <h3 className="text-xl font-bold text-foreground mb-3">Quotes and Proposals</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                All quotes provided are estimates based on the information you provide. Final pricing may vary based on
                actual guest count, menu selections, venue requirements, and additional services requested.
              </p>

              <h3 className="text-xl font-bold text-foreground mb-3">Booking Confirmation</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                A booking is confirmed only upon:
              </p>
              <ul className="list-disc pl-6 mb-6 text-foreground/80 space-y-2">
                <li>Receipt of signed contract or booking agreement</li>
                <li>Payment of required deposit</li>
                <li>Written confirmation from MYWAY Catering</li>
              </ul>

              <h3 className="text-xl font-bold text-foreground mb-3">Minimum Guest Count</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Certain services may require a minimum guest count. This will be communicated during the booking process
                and specified in your service agreement.
              </p>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Payment Terms</h2>
              <div className="h-1 w-20 bg-emerald-700 mb-6"></div>

              <h3 className="text-xl font-bold text-foreground mb-3">Deposit</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                A non-refundable deposit is required to secure your booking. The deposit amount will be specified in your
                service agreement and is typically 50% of the total estimated cost.
              </p>

              <h3 className="text-xl font-bold text-foreground mb-3">Final Payment</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Full payment is due no later than 7 days before the event date unless otherwise agreed in writing. Events
                may be cancelled if payment is not received by the due date.
              </p>

              <h3 className="text-xl font-bold text-foreground mb-3">Payment Methods</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We accept payment via bank transfer, credit/debit cards, and other methods as agreed. All prices are in
                GBP unless otherwise stated.
              </p>

              <h3 className="text-xl font-bold text-foreground mb-3">Additional Charges</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Additional charges may apply for:
              </p>
              <ul className="list-disc pl-6 mb-6 text-foreground/80 space-y-2">
                <li>Changes to guest count (increases only)</li>
                <li>Menu modifications after booking confirmation</li>
                <li>Additional services or equipment</li>
                <li>Travel beyond agreed service area</li>
                <li>Extended service hours</li>
              </ul>
            </div>

            {/* Cancellations and Changes */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Cancellations and Changes</h2>
              <div className="h-1 w-20 bg-emerald-700 mb-6"></div>

              <h3 className="text-xl font-bold text-foreground mb-3">Client Cancellations</h3>
              <ul className="list-disc pl-6 mb-6 text-foreground/80 space-y-2">
                <li><strong>More than 30 days before event:</strong> Deposit retained; no further charges</li>
                <li><strong>15-30 days before event:</strong> 50% of total contract value due</li>
                <li><strong>Less than 15 days before event:</strong> 100% of total contract value due</li>
              </ul>

              <h3 className="text-xl font-bold text-foreground mb-3">Changes to Booking</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Changes to your booking must be made in writing and confirmed by us. Changes requested within 14 days of
                the event may incur additional charges and are subject to availability.
              </p>

              <h3 className="text-xl font-bold text-foreground mb-3">Force Majeure</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We shall not be liable for failure to perform our obligations due to circumstances beyond our reasonable
                control, including but not limited to natural disasters, severe weather, pandemics, or government
                restrictions. In such cases, we will work with you to reschedule or provide alternative solutions.
              </p>
            </div>

            {/* Food Safety and Dietary Requirements */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Food Safety and Dietary Requirements</h2>
              <div className="h-1 w-20 bg-emerald-700 mb-6"></div>

              <h3 className="text-xl font-bold text-foreground mb-3">Food Safety Standards</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We comply with all applicable food safety regulations and maintain high standards of food hygiene and
                preparation. All our staff are trained in food safety practices.
              </p>

              <h3 className="text-xl font-bold text-foreground mb-3">Allergens and Dietary Requirements</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We make every effort to accommodate dietary requirements and allergen concerns when notified in advance.
                However, we cannot guarantee a completely allergen-free environment. Clients are responsible for informing
                their guests about menu contents and potential allergens.
              </p>

              <h3 className="text-xl font-bold text-foreground mb-3">Food Storage and Consumption</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Food must be consumed on the day of service. We are not responsible for food stored or consumed after our
                service period ends. Any leftover food becomes the responsibility of the client.
              </p>
            </div>

            {/* Venue Access and Requirements */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Venue Access and Requirements</h2>
              <div className="h-1 w-20 bg-emerald-700 mb-6"></div>
              <p className="text-foreground/80 leading-relaxed mb-4">
                The client is responsible for:
              </p>
              <ul className="list-disc pl-6 mb-6 text-foreground/80 space-y-2">
                <li>Ensuring adequate access to the venue for our team and equipment</li>
                <li>Providing access to necessary facilities (kitchen, water, electricity)</li>
                <li>Obtaining any required permits or licenses from the venue</li>
                <li>Informing us of any venue restrictions or requirements in advance</li>
                <li>Providing safe working conditions for our staff</li>
              </ul>
            </div>

            {/* Liability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Limitation of Liability</h2>
              <div className="h-1 w-20 bg-emerald-700 mb-6"></div>
              <p className="text-foreground/80 leading-relaxed mb-4">
                To the fullest extent permitted by law:
              </p>
              <ul className="list-disc pl-6 mb-6 text-foreground/80 space-y-2">
                <li>Our total liability shall not exceed the total amount paid by you for our services</li>
                <li>We are not liable for any indirect, consequential, or special damages</li>
                <li>We are not responsible for items lost, stolen, or damaged at the event venue</li>
                <li>We are not liable for guest conduct, venue conditions, or third-party actions</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                Nothing in these Terms shall limit our liability for death or personal injury caused by our negligence,
                fraud, or any other liability that cannot be excluded by law.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Intellectual Property</h2>
              <div className="h-1 w-20 bg-emerald-700 mb-6"></div>
              <p className="text-foreground/80 leading-relaxed mb-4">
                All content on our website, including text, graphics, logos, images, and software, is the property of
                MYWAY Catering and is protected by copyright and other intellectual property laws. You may not use,
                reproduce, or distribute our content without our written permission.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                We may use photographs or testimonials from your event for marketing purposes unless you request otherwise
                in writing.
              </p>
            </div>

            {/* User Conduct */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">User Conduct</h2>
              <div className="h-1 w-20 bg-emerald-700 mb-6"></div>
              <p className="text-foreground/80 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-foreground/80 space-y-2">
                <li>Use our services for any unlawful purpose</li>
                <li>Provide false or misleading information</li>
                <li>Interfere with our website or services</li>
                <li>Harass, threaten, or abuse our staff</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Governing Law and Disputes</h2>
              <div className="h-1 w-20 bg-emerald-700 mb-6"></div>
              <p className="text-foreground/80 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any
                disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the
                courts of England and Wales.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                We encourage you to contact us first to resolve any disputes informally before pursuing legal action.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Changes to Terms</h2>
              <div className="h-1 w-20 bg-emerald-700 mb-6"></div>
              <p className="text-foreground/80 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of material changes by posting
                the updated Terms on our website with a new "Last updated" date. Your continued use of our services after
                such changes constitutes acceptance of the modified Terms.
              </p>
            </div>

            {/* Severability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Severability</h2>
              <div className="h-1 w-20 bg-emerald-700 mb-6"></div>
              <p className="text-foreground/80 leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited
                or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force
                and effect.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Contact Us</h2>
              <div className="h-1 w-20 bg-emerald-700 mb-6"></div>
              <p className="text-foreground/80 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-slate-100 p-6 rounded-lg">
                <p className="text-foreground font-semibold mb-2">MYWAY Catering</p>
                <p className="text-foreground/80">Email: <a href="mailto:mariam@mywaycatering.com" className="text-emerald-700 hover:text-emerald-600">mariam@mywaycatering.com</a></p>
                <p className="text-foreground/80">Phone: <a href="tel:+4471961032314" className="text-emerald-700 hover:text-emerald-600">+44 7196 103 2314</a></p>
              </div>
            </div>

            {/* Acceptance */}
            <div className="mb-12 bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-700">
              <p className="text-foreground font-semibold mb-2">Acceptance of Terms</p>
              <p className="text-foreground/80 leading-relaxed">
                By using our website or services, you acknowledge that you have read, understood, and agree to be bound
                by these Terms of Service.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
