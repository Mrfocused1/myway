import { useState, useMemo, useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { supabase, MenuItemDB } from '../lib/supabase';

const categories = ["All", "Starters", "Soups & Stews", "Rice Dishes", "Proteins", "Swallow & Sides", "Specials"];
const cuisines = ["All", "Nigerian", "Caribbean", "European"];

export function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItemDB[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch menu items from Supabase
  useEffect(() => {
    const fetchMenuItems = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('menu_items')
        .select('*')
        .order('cuisine')
        .order('category')
        .order('name');

      if (error) {
        console.error('Error fetching menu items:', error);
      } else {
        setMenuItems(data || []);
      }
      setLoading(false);
    };

    fetchMenuItems();
  }, []);

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Our Menus", href: "/menu" },
    { label: "Catering Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Get a Quote", href: "/about#contact" },
  ];

  // Group items by cuisine first, then by category
  const groupedItems = useMemo(() => {
    let items = menuItems;

    // Filter by search query first
    if (searchQuery.trim()) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by cuisine type
    if (selectedCuisine !== "All") {
      items = items.filter(item => item.cuisine === selectedCuisine);
    }

    // Filter by category
    if (selectedCategory !== "All") {
      items = items.filter(item => item.category === selectedCategory);
    }

    // Group by cuisine first, then by category within each cuisine
    const grouped: { [cuisine: string]: { [category: string]: MenuItemDB[] } } = {};

    items.forEach(item => {
      if (!grouped[item.cuisine]) {
        grouped[item.cuisine] = {};
      }
      if (!grouped[item.cuisine][item.category]) {
        grouped[item.cuisine][item.category] = [];
      }
      grouped[item.cuisine][item.category].push(item);
    });

    return grouped;
  }, [selectedCategory, selectedCuisine, searchQuery, menuItems]);

  // Calculate total items (unused but kept for future features)
  // const totalItems = useMemo(() => {
  //   return Object.values(groupedItems).reduce((sum, cuisineCategories) => {
  //     const cuisineTotal = Object.values(cuisineCategories).reduce((catSum, items) => catSum + items.length, 0);
  //     return sum + cuisineTotal;
  //   }, 0);
  // }, [groupedItems]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Our Menus - MYWAY Catering | Nigerian, Caribbean & European Cuisine"
        description="Browse our extensive menu featuring authentic Nigerian, Caribbean, and European dishes. From Jollof rice to jerk chicken to traditional roasts. Perfect for any event or celebration."
        keywords="MYWAY Catering menu, Nigerian food menu, Caribbean food menu, European catering menu, Jollof rice, jerk chicken, African cuisine, wedding menu, corporate catering menu"
        canonical="https://www.mywaycatering.com/menu"
      />
      <Navigation items={navItems} useWhiteLogo />

      {/* Hero Section */}
      <section
        className="pt-32 pb-16 px-8 bg-earthy-brown text-white relative bg-cover bg-center"
        style={{
          backgroundImage: `url(https://github.com/Mrfocused1/YouTube-directory/blob/main/background.png?raw=true)`,
        }}
      >
        <div className="absolute inset-0 bg-earthy-brown-dark/60"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Menu</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Explore our authentic African cuisine, crafted with traditional recipes and the finest ingredients
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-8 bg-background border-b border-border">
        <div className="container mx-auto max-w-6xl">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3 pl-12 rounded-lg border-2 border-earthy-green bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-earthy-green focus:border-earthy-green"
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Cuisine Type Filter */}
          <div className="mb-6">
            <div className="max-w-md mx-auto">
              <select
                id="cuisine-select"
                value={selectedCuisine}
                onChange={(e) => setSelectedCuisine(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-earthy-green bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-earthy-green focus:border-earthy-green appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23000000' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                  paddingRight: '3rem'
                }}
              >
                {cuisines.map((cuisine) => (
                  <option key={cuisine} value={cuisine}>
                    {cuisine === "All" ? "All Cuisines" : `${cuisine} Cuisine`}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div>
            <div className="overflow-x-auto scrollbar-hide -mx-8 px-8">
              <div className="flex gap-3 min-w-max md:justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full font-medium text-sm transition-colors whitespace-nowrap ${
                      selectedCategory === category
                        ? 'bg-earthy-green text-white'
                        : 'bg-secondary text-foreground hover:bg-secondary/80'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directory-Style Menu Items */}
      <section className="py-16 px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Loading State */}
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-earthy-green"></div>
              <p className="mt-4 text-foreground">Loading menu items...</p>
            </div>
          ) : Object.keys(groupedItems).length > 0 ? (
            <div className="space-y-20">
              {/* Loop through each cuisine type */}
              {cuisines
                .filter(cuisine => cuisine !== "All" && groupedItems[cuisine])
                .map((cuisine) => (
                  <div key={cuisine} id={cuisine.toLowerCase()}>
                    {/* Cuisine Header */}
                    <div className="mb-12">
                      <h2 className="text-4xl md:text-5xl font-bold text-foreground uppercase mb-3">{cuisine} Cuisine</h2>
                      <div className="h-1 w-24 bg-earthy-green"></div>
                    </div>

                    {/* Categories within this cuisine */}
                    <div className="space-y-12">
                      {categories
                        .filter(cat => cat !== "All" && groupedItems[cuisine][cat])
                        .map((category) => (
                          <div key={`${cuisine}-${category}`} id={`${cuisine.toLowerCase()}-${category.toLowerCase().replace(/\s+/g, '-')}`}>
                            {/* Category Sub-Header */}
                            <div className="mb-6">
                              <h3 className="text-2xl font-bold text-foreground uppercase mb-2">{category}</h3>
                              <div className="h-0.5 w-16 bg-earthy-green/60"></div>
                            </div>

                            {/* Category Items Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {groupedItems[cuisine][category].map((item) => (
                                <div
                                  key={item.id}
                                  className="group p-6 rounded-lg border border-border bg-background hover:bg-secondary/50 transition-colors"
                                >
                                  {/* Item Header */}
                                  <div className="mb-4">
                                    <h4 className="text-xl font-bold text-foreground uppercase mb-3">
                                      {item.name}
                                    </h4>
                                    <p className="text-base text-foreground/90 leading-relaxed">
                                      {item.description}
                                    </p>
                                  </div>

                                  {/* Allergens Section */}
                                  <div className="space-y-3 text-sm">
                                    {/* Main Allergens */}
                                    {item.allergens.length > 0 && (
                                      <div>
                                        <h5 className="font-bold text-foreground uppercase mb-1">Allergens</h5>
                                        <p className="text-foreground/80">{item.allergens.join(", ")}</p>
                                      </div>
                                    )}

                                    {/* May Contain */}
                                    {item.may_contain.length > 0 && (
                                      <div>
                                        <h5 className="font-bold text-foreground mb-1">May Contain</h5>
                                        <p className="text-foreground/80">{item.may_contain.join(", ")}</p>
                                      </div>
                                    )}

                                    {/* No Allergens Message */}
                                    {item.allergens.length === 0 && item.may_contain.length === 0 && (
                                      <p className="text-muted-foreground italic">No known allergens</p>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No menu items found. Please check back later.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-8 bg-earthy-brown text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us to place your catering order or visit us for dine-in
          </p>
          <a
            href="#contact"
            className="inline-block bg-earthy-green text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-earthy-green-dark transition-all hover:scale-105"
          >
            Get a Quote
          </a>
        </div>
      </section>

      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-earthy-green text-white p-4 rounded-full shadow-lg hover:bg-earthy-green-dark transition-all hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}
