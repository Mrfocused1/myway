import { useEffect } from 'react';

export function StructuredData() {
  useEffect(() => {
    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "FoodEstablishment",
      "@id": "https://www.mywaycatering.com/#organization",
      "name": "MYWAY Catering",
      "alternateName": "Myway Catering",
      "url": "https://www.mywaycatering.com",
      "logo": "https://www.mywaycatering.com/myway-logo.svg",
      "image": "https://www.mywaycatering.com/myway-logo.svg",
      "description": "MYWAY Catering offers exceptional catering services featuring authentic Nigerian, Caribbean, and European cuisine. Perfect for corporate events, weddings, and private celebrations.",
      "telephone": "+447961032314",
      "email": "mariam@mywaycatering.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "GB",
        "addressRegion": "United Kingdom"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "addressCountry": "GB"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "servesCuisine": [
        "Nigerian",
        "Caribbean",
        "European",
        "African"
      ],
      "priceRange": "££",
      "sameAs": [
        "https://www.mywaycatering.com"
      ]
    };

    // Local Business Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.mywaycatering.com/#localbusiness",
      "name": "MYWAY Catering",
      "image": "https://www.mywaycatering.com/myway-logo.svg",
      "description": "Professional catering services specializing in authentic Nigerian, Caribbean, and European cuisine for corporate events, weddings, and private celebrations throughout the UK.",
      "url": "https://www.mywaycatering.com",
      "telephone": "+447961032314",
      "email": "mariam@mywaycatering.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "GB"
      },
      "priceRange": "££",
      "paymentAccepted": "Cash, Credit Card, Debit Card, Bank Transfer"
    };

    // Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://www.mywaycatering.com/#service",
      "serviceType": "Catering Service",
      "provider": {
        "@type": "FoodEstablishment",
        "name": "MYWAY Catering",
        "telephone": "+447961032314",
        "email": "mariam@mywaycatering.com"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United Kingdom"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Catering Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Corporate Event Catering",
              "description": "Professional catering services for business meetings, conferences, and corporate gatherings"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Wedding Catering",
              "description": "Exquisite cuisine for weddings with personalized menu options"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Private Celebration Catering",
              "description": "Catering for anniversaries, birthdays, and special occasions"
            }
          }
        ]
      }
    };

    // WebSite Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://www.mywaycatering.com/#website",
      "url": "https://www.mywaycatering.com",
      "name": "MYWAY Catering",
      "description": "Professional catering services featuring authentic Nigerian, Caribbean, and European cuisine",
      "publisher": {
        "@type": "Organization",
        "name": "MYWAY Catering",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.mywaycatering.com/myway-logo.svg"
        }
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.mywaycatering.com/menu?search={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    // BreadcrumbList Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.mywaycatering.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Our Menus",
          "item": "https://www.mywaycatering.com/menu"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Catering Services",
          "item": "https://www.mywaycatering.com/services"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "About Us",
          "item": "https://www.mywaycatering.com/about"
        }
      ]
    };

    // Add all schemas to the page
    const schemas = [
      organizationSchema,
      localBusinessSchema,
      serviceSchema,
      websiteSchema,
      breadcrumbSchema
    ];

    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = `structured-data-${index}`;
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    // Cleanup function to remove schemas when component unmounts
    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`structured-data-${index}`);
        if (script) {
          document.head.removeChild(script);
        }
      });
    };
  }, []);

  return null;
}
