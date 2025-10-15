import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <img
              src="/myway-logo.svg"
              alt="MYWAY CATERING Logo"
              className="h-20 mb-4 object-contain"
            />
            <p className="text-white/70 mb-4 leading-relaxed">
              Where exceptional culinary experiences meet personalised service. We take pride in crafting delicious meals tailored to your unique events.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-emerald-700 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-white/70 hover:text-emerald-700 transition-colors">
                  Our Menus
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-emerald-700 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about#contact" className="text-white/70 hover:text-emerald-700 transition-colors">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase">Contact Us</h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <a href="tel:+4471961032314" className="hover:text-white transition-colors">
                  +44 7196 103 2314
                </a>
              </li>
              <li>
                <a href="mailto:mariam@mywaycatering.com" className="hover:text-white transition-colors">
                  mariam@mywaycatering.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Myway Catering. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
