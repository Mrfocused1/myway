import { useState } from 'react';

// --- Data for the image accordion ---
const accordionItems = [
  {
    id: 1,
    title: 'Nigerian Cuisine',
    imageUrl: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Caribbean Cuisine',
    imageUrl: 'https://github.com/Mrfocused1/YouTube-directory/blob/main/curry%20goat.jpg?raw=true',
  },
  {
    id: 3,
    title: 'European Cuisine',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1974&auto=format&fit=crop',
  },
];

// --- Accordion Item Component ---
const AccordionItem = ({ item, isActive, onMouseEnter }: { item: any; isActive: boolean; onMouseEnter: () => void }) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-[400px]' : 'w-[60px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Caption Text */}
      <span
        className={`
          absolute text-white font-bold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0 text-xl' // Active state: horizontal, bottom-center
              // Inactive state: vertical, positioned at the bottom
              : 'w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90 text-lg'
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};


// --- Main Component ---
export function AccordionSection() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-emerald-700 font-sans">
      <section className="container mx-auto px-8 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Authentic Cuisine from Around the World
            </h2>
            <p className="mt-6 text-base text-white/90 max-w-xl mx-auto md:mx-0">
              Explore our signature dishes featuring Nigerian, Caribbean, and European flavors, crafted with traditional recipes and the finest ingredients. We bring authentic culinary experiences to every event.
            </p>
            <div className="mt-8">
              <a
                href="/menu"
                className="inline-block bg-white text-emerald-700 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-white/90 transition-all hover:scale-105"
              >
                View Full Menu
              </a>
            </div>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-row items-center justify-center gap-4 overflow-x-auto p-4">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
