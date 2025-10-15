import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export function PrivacyPolicyPage() {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Introduction</h2>
              <div className="h-1 w-20 bg-emerald-700 mb-6"></div>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Welcome to MYWAY Catering ("we," "our," or "us"). We are committed to protecting your personal information
                and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website www.samplesites.space and use our catering services.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy,
                please do not access the site or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Information We Collect</h2>
              <div className="h-1 w-20 bg-emerald-700 mb-6"></div>

              <h3 className="text-xl font-bold text-foreground mb-3">Personal Information You Provide</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mb-6 text-foreground/80 space-y-2">
                <li>Request a quote or consultation for catering services</li>
                <li>Fill out contact forms on our website</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Book our catering services for an event</li>
                <li>Communicate with us via email or phone</li>
              </ul>

              <p className="text-foreground/80 leading-relaxed mb-4">
                The personal information we may collect includes:
              </p>
              <ul className="list-disc pl-6 mb-6 text-foreground/80 space-y-2">
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Event details (date, location, guest count, event type)</li>
                <li>Dietary requirements and food preferences</li>
                <li>Payment and billing information</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-bold text-foreground mb-3">Information Automatically Collected</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                When you visit our website, we may automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-foreground/80 space-y-2">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>IP address</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">How We Use Your Information</h2>
              <div className="h-1 w-20 bg-emerald-700 mb-6"></div>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-6 text-foreground/80 space-y-2">
                <li>To provide and manage our catering services</li>
                <li>To respond to your inquiries and fulfill your requests</li>
                <li>To process your bookings and payments</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
                <li>To protect against fraudulent or illegal activity</li>
              </ul>
            </div>

            {/* How We Share Your Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">How We Share Your Information</h2>
              <div className="h-1 w-20 bg-emerald-700 mb-6"></div>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We may share your information in the following situations:
              </p>
              <ul className="list-disc pl-6 mb-6 text-foreground/80 space-y-2">
                <li><strong>Service Providers:</strong> We may share your information with third-party service providers who assist us in operating our business (e.g., payment processors, email service providers)</li>
                <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with a merger, sale, or acquisition of our business</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities</li>
                <li><strong>With Your Consent:</strong> We may share your information with third parties when you have given us explicit consent to do so</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                We do not sell or rent your personal information to third parties for their marketing purposes.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Data Security</h2>
              <div className="h-1 w-20 bg-emerald-700 mb-6"></div>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over
                the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Your Privacy Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Your Privacy Rights</h2>
              <div className="h-1 w-20 bg-emerald-700 mb-6"></div>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-6 text-foreground/80 space-y-2">
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Objection:</strong> Object to our processing of your personal information</li>
                <li><strong>Restriction:</strong> Request restriction of processing of your personal information</li>
                <li><strong>Data Portability:</strong> Request transfer of your information to another service</li>
                <li><strong>Withdraw Consent:</strong> Withdraw your consent to processing where we rely on consent</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                To exercise any of these rights, please contact us at mariam@mywaycatering.com or +44 7196 103 2314.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Cookies and Tracking Technologies</h2>
              <div className="h-1 w-20 bg-emerald-700 mb-6"></div>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We may use cookies and similar tracking technologies to collect and track information about your browsing
                activities on our website. Cookies are small data files stored on your device that help us improve our website
                and your experience.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                You can control cookies through your browser settings. However, disabling cookies may affect your ability to
                use certain features of our website.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Third-Party Websites</h2>
              <div className="h-1 w-20 bg-emerald-700 mb-6"></div>
              <p className="text-foreground/80 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or
                content of these third-party sites. We encourage you to review the privacy policies of any third-party sites
                you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Children's Privacy</h2>
              <div className="h-1 w-20 bg-emerald-700 mb-6"></div>
              <p className="text-foreground/80 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
                information from children. If you believe we have collected information from a child, please contact us
                immediately so we can delete such information.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Changes to This Privacy Policy</h2>
              <div className="h-1 w-20 bg-emerald-700 mb-6"></div>
              <p className="text-foreground/80 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy
                Policy periodically for any changes.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Contact Us</h2>
              <div className="h-1 w-20 bg-emerald-700 mb-6"></div>
              <p className="text-foreground/80 leading-relaxed mb-4">
                If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-slate-100 p-6 rounded-lg">
                <p className="text-foreground font-semibold mb-2">MYWAY Catering</p>
                <p className="text-foreground/80">Email: <a href="mailto:mariam@mywaycatering.com" className="text-emerald-700 hover:text-emerald-600">mariam@mywaycatering.com</a></p>
                <p className="text-foreground/80">Phone: <a href="tel:+4471961032314" className="text-emerald-700 hover:text-emerald-600">+44 7196 103 2314</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
