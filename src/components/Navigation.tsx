import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  items: { label: string; href: string }[];
  useWhiteLogo?: boolean;
}

const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  ({ className, items, useWhiteLogo = false, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <nav
        ref={ref}
        className={cn(
          "absolute md:fixed top-0 left-0 right-0 z-50 px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8",
          className
        )}
        {...props}
      >
        {/* Desktop Menu */}
        <div className="hidden md:flex justify-between items-center gap-8 relative">
          {/* Desktop Logo - Only show on pages with white logo */}
          {useWhiteLogo && (
            <Link to="/" className="flex-shrink-0">
              <img
                src="/myway-logo-white.png"
                alt="MYWAY CATERING Logo"
                className="h-32 w-auto max-w-[400px] object-contain pb-[15px]"
              />
            </Link>
          )}

          {/* Navigation Items */}
          <div className={`rounded-full bg-earthy-green backdrop-blur-sm px-10 py-4 shadow-lg border border-earthy-green ${useWhiteLogo ? '' : 'mx-auto'}`}>
            <ul className="flex items-center gap-8">
              {items.map((item) => (
                <li key={item.label}>
                  {item.href.startsWith('#') ? (
                    <a
                      href={item.href}
                      className="text-sm font-medium text-white transition-colors hover:text-yellow-400"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-sm font-medium text-white transition-colors hover:text-yellow-400"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Spacer for alignment when logo is shown */}
          {useWhiteLogo && <div className="flex-shrink-0 w-32"></div>}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex justify-between items-center gap-4">
          {/* Mobile Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={useWhiteLogo ? "/myway-logo-white.png" : "/myway-logo.svg"}
              alt="MYWAY CATERING Logo"
              className="h-32 w-auto max-w-[400px] object-contain pb-[15px]"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="rounded-full bg-earthy-green/80 backdrop-blur-sm p-4 shadow-lg border border-earthy-green/50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden absolute top-40 left-4 right-4 rounded-2xl bg-background/95 backdrop-blur-sm shadow-xl border border-border/50 overflow-hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="py-4">
                {items.map((item) => (
                  <li key={item.label}>
                    {item.href.startsWith('#') ? (
                      <a
                        href={item.href}
                        className="block px-8 py-4 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className="block px-8 py-4 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    );
  }
);

Navigation.displayName = "Navigation";

export { Navigation, type NavigationProps };
