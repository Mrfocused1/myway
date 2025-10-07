export interface MenuItem {
  name: string;
  description: string;
  price?: string;
  category: string;
  cuisine: string;
  allergens: string[];
  mayContain: string[];
}

export const allMenuItems: MenuItem[] = [
  // ========== NIGERIAN CUISINE ==========

  // Nigerian Starters
  { name: "Puff Puff", description: "Light and fluffy golden fried dough balls, slightly sweet and perfect as an appetizer", category: "Starters", cuisine: "Nigerian", allergens: ["Gluten", "Eggs"], mayContain: ["Milk", "Soya Beans"] },
  { name: "Akara (Bean Cakes)", description: "Deep-fried bean fritters made from black-eyed peas, onions, and peppers", category: "Starters", cuisine: "Nigerian", allergens: ["Soya Beans"], mayContain: ["Gluten"] },
  { name: "Moi Moi", description: "Steamed bean pudding made from blended black-eyed peas with spices", category: "Starters", cuisine: "Nigerian", allergens: ["Soya Beans"], mayContain: ["Fish", "Eggs"] },
  { name: "Chin Chin", description: "Crunchy sweet fried dough snacks with a hint of nutmeg", category: "Starters", cuisine: "Nigerian", allergens: ["Gluten", "Eggs", "Milk"], mayContain: ["Nuts"] },
  { name: "Meat Pie", description: "Flaky pastry filled with seasoned minced meat and potatoes", category: "Starters", cuisine: "Nigerian", allergens: ["Gluten", "Eggs"], mayContain: ["Milk", "Celery"] },
  { name: "Spring Rolls", description: "Crispy vegetable-filled rolls with sweet chili sauce", category: "Starters", cuisine: "Nigerian", allergens: ["Gluten", "Soya Beans"], mayContain: ["Eggs", "Celery"] },
  { name: "Samosa", description: "Crispy triangular pastries filled with spiced vegetables or meat", category: "Starters", cuisine: "Nigerian", allergens: ["Gluten"], mayContain: ["Eggs", "Celery"] },

  // Nigerian Soups & Stews
  { name: "Egusi Soup", description: "Rich melon seed soup with assorted meat, fish, and leafy vegetables", category: "Soups & Stews", cuisine: "Nigerian", allergens: ["Fish", "Nuts"], mayContain: ["Crustaceans", "Celery"] },
  { name: "Ogbono Soup", description: "Draw soup made from African wild mango seeds with your choice of protein", category: "Soups & Stews", cuisine: "Nigerian", allergens: ["Fish"], mayContain: ["Crustaceans", "Nuts"] },
  { name: "Pepper Soup", description: "Spicy clear broth with fish or goat meat, flavored with African spices", category: "Soups & Stews", cuisine: "Nigerian", allergens: ["Fish", "Celery"], mayContain: ["Crustaceans"] },
  { name: "Efo Riro", description: "Nigerian spinach stew with assorted meats and stockfish in palm oil base", category: "Soups & Stews", cuisine: "Nigerian", allergens: ["Fish"], mayContain: ["Crustaceans", "Celery"] },
  { name: "Okra Soup", description: "Delicious soup made with fresh okra and seafood", category: "Soups & Stews", cuisine: "Nigerian", allergens: ["Fish", "Crustaceans"], mayContain: ["Celery"] },
  { name: "Banga Soup", description: "Rich palm nut soup with catfish and traditional spices", category: "Soups & Stews", cuisine: "Nigerian", allergens: ["Fish", "Nuts"], mayContain: ["Celery"] },
  { name: "Groundnut Soup", description: "Creamy peanut-based soup with tender meat and traditional seasonings", category: "Soups & Stews", cuisine: "Nigerian", allergens: ["Peanuts", "Nuts"], mayContain: ["Fish", "Celery"] },
  { name: "Afang Soup", description: "Vegetable soup made with wild spinach and water leaves", category: "Soups & Stews", cuisine: "Nigerian", allergens: ["Fish", "Crustaceans"], mayContain: ["Nuts", "Celery"] },

  // Nigerian Rice Dishes
  { name: "Jollof Rice", description: "West African party rice cooked in a rich tomato sauce with aromatic spices", category: "Rice Dishes", cuisine: "Nigerian", allergens: ["Celery"], mayContain: ["Fish", "Crustaceans"] },
  { name: "Fried Rice", description: "Colorful rice stir-fried with mixed vegetables, liver, and shrimp", category: "Rice Dishes", cuisine: "Nigerian", allergens: ["Crustaceans", "Eggs", "Soya Beans"], mayContain: ["Fish", "Celery"] },
  { name: "Ofada Rice with Ayamase", description: "Local unpolished rice served with spicy green pepper stew", category: "Rice Dishes", cuisine: "Nigerian", allergens: ["Fish", "Celery"], mayContain: ["Crustaceans"] },
  { name: "Native Rice", description: "Traditional rice dish cooked with palm oil and local spices", category: "Rice Dishes", cuisine: "Nigerian", allergens: [], mayContain: ["Fish", "Celery"] },
  { name: "Coconut Rice", description: "Fragrant rice cooked in coconut milk with vegetables", category: "Rice Dishes", cuisine: "Nigerian", allergens: ["Nuts"], mayContain: ["Celery"] },

  // Nigerian Proteins
  { name: "Suya (Beef Skewers)", description: "Grilled beef skewers marinated in spicy peanut-based rub", category: "Proteins", cuisine: "Nigerian", allergens: ["Peanuts", "Nuts"], mayContain: ["Soya Beans", "Celery"] },
  { name: "Asun (Spicy Goat Meat)", description: "Chopped goat meat grilled with peppers and onions", category: "Proteins", cuisine: "Nigerian", allergens: [], mayContain: ["Celery", "Mustard"] },
  { name: "Kilishi", description: "Nigerian beef jerky seasoned with peanut spice mix", category: "Proteins", cuisine: "Nigerian", allergens: ["Peanuts", "Nuts"], mayContain: ["Soya Beans"] },
  { name: "Catfish Pepper Soup", description: "Fresh catfish in spicy broth with traditional herbs", category: "Proteins", cuisine: "Nigerian", allergens: ["Fish", "Celery"], mayContain: [] },
  { name: "Grilled Tilapia", description: "Whole tilapia fish seasoned and grilled to perfection", category: "Proteins", cuisine: "Nigerian", allergens: ["Fish"], mayContain: ["Celery", "Mustard"] },
  { name: "Peppered Snail", description: "Tender snails in spicy pepper sauce", category: "Proteins", cuisine: "Nigerian", allergens: ["Molluscs"], mayContain: ["Celery"] },
  { name: "Gizdodo", description: "Spicy gizzard and plantain in pepper sauce", category: "Proteins", cuisine: "Nigerian", allergens: [], mayContain: ["Celery"] },

  // Nigerian Swallow & Sides
  { name: "Pounded Yam", description: "Smooth and stretchy traditional yam fufu", category: "Swallow & Sides", cuisine: "Nigerian", allergens: [], mayContain: [] },
  { name: "Eba (Garri)", description: "Cassava-based swallow, firm and elastic", category: "Swallow & Sides", cuisine: "Nigerian", allergens: [], mayContain: [] },
  { name: "Fufu", description: "Soft and smooth cassava and plantain swallow", category: "Swallow & Sides", cuisine: "Nigerian", allergens: [], mayContain: [] },
  { name: "Amala", description: "Yam flour swallow with distinctive brown color and earthy flavor", category: "Swallow & Sides", cuisine: "Nigerian", allergens: [], mayContain: [] },
  { name: "Semovita", description: "Wheat-based swallow with smooth texture", category: "Swallow & Sides", cuisine: "Nigerian", allergens: ["Gluten"], mayContain: [] },
  { name: "Semo", description: "Semolina swallow, light and fluffy", category: "Swallow & Sides", cuisine: "Nigerian", allergens: ["Gluten"], mayContain: [] },
  { name: "Fried Plantain (Dodo)", description: "Sweet ripe plantains fried to caramelized perfection", category: "Swallow & Sides", cuisine: "Nigerian", allergens: [], mayContain: [] },
  { name: "Boiled Yam", description: "Tender boiled yam pieces served with oil or stew", category: "Swallow & Sides", cuisine: "Nigerian", allergens: [], mayContain: [] },

  // ========== CARIBBEAN CUISINE ==========

  // Caribbean Starters
  { name: "Saltfish Fritters", description: "Crispy codfish fritters with peppers and herbs", category: "Starters", cuisine: "Caribbean", allergens: ["Fish", "Gluten"], mayContain: ["Eggs"] },
  { name: "Plantain Chips", description: "Thinly sliced and perfectly fried plantains served with spicy pepper sauce", category: "Starters", cuisine: "Caribbean", allergens: [], mayContain: ["Celery", "Mustard"] },
  { name: "Jerk Chicken Wings", description: "Spicy marinated chicken wings with authentic jerk seasoning", category: "Starters", cuisine: "Caribbean", allergens: [], mayContain: ["Celery", "Mustard"] },
  { name: "Ackee Fritters", description: "Golden fried fritters made with Jamaica's national fruit", category: "Starters", cuisine: "Caribbean", allergens: ["Gluten"], mayContain: ["Eggs"] },
  { name: "Patties", description: "Flaky pastry filled with spicy beef or chicken", category: "Starters", cuisine: "Caribbean", allergens: ["Gluten"], mayContain: ["Eggs", "Milk"] },
  { name: "Conch Fritters", description: "Crispy fritters made with conch meat and Caribbean spices", category: "Starters", cuisine: "Caribbean", allergens: ["Molluscs", "Gluten"], mayContain: ["Eggs"] },

  // Caribbean Soups & Stews
  { name: "Callaloo Soup", description: "Creamy Caribbean greens soup with coconut milk", category: "Soups & Stews", cuisine: "Caribbean", allergens: ["Nuts"], mayContain: ["Crustaceans"] },
  { name: "Pepperpot Stew", description: "Rich Guyanese meat stew with cassareep and warming spices", category: "Soups & Stews", cuisine: "Caribbean", allergens: [], mayContain: ["Celery"] },
  { name: "Red Bean Soup", description: "Hearty kidney bean soup with dumplings", category: "Soups & Stews", cuisine: "Caribbean", allergens: ["Gluten"], mayContain: ["Celery"] },
  { name: "Jamaican Pumpkin Soup", description: "Creamy pumpkin soup with Caribbean spices", category: "Soups & Stews", cuisine: "Caribbean", allergens: [], mayContain: ["Milk", "Celery"] },

  // Caribbean Rice Dishes
  { name: "Rice and Peas", description: "Coconut rice with kidney beans and Caribbean spices", category: "Rice Dishes", cuisine: "Caribbean", allergens: ["Nuts"], mayContain: [] },
  { name: "Pelau", description: "One-pot rice dish with chicken, pigeon peas, and caramelized sugar", category: "Rice Dishes", cuisine: "Caribbean", allergens: [], mayContain: ["Celery"] },
  { name: "Cook-up Rice", description: "Guyanese one-pot rice with black-eyed peas and coconut", category: "Rice Dishes", cuisine: "Caribbean", allergens: ["Nuts", "Soya Beans"], mayContain: ["Celery"] },
  { name: "Yellow Rice", description: "Turmeric-infused rice with vegetables", category: "Rice Dishes", cuisine: "Caribbean", allergens: [], mayContain: [] },

  // Caribbean Proteins
  { name: "Jerk Chicken", description: "Grilled chicken marinated in authentic jerk seasoning", category: "Proteins", cuisine: "Caribbean", allergens: [], mayContain: ["Celery", "Mustard"] },
  { name: "Curry Goat", description: "Tender goat meat slow-cooked in Caribbean curry sauce", category: "Proteins", cuisine: "Caribbean", allergens: ["Celery"], mayContain: ["Mustard"] },
  { name: "Escovitch Fish", description: "Fried fish topped with spicy pickled vegetables", category: "Proteins", cuisine: "Caribbean", allergens: ["Fish"], mayContain: ["Gluten", "Celery"] },
  { name: "Oxtail Stew", description: "Fall-off-the-bone oxtail in rich gravy with butter beans", category: "Proteins", cuisine: "Caribbean", allergens: [], mayContain: ["Celery"] },
  { name: "Jerk Pork", description: "Spicy grilled pork with traditional jerk marinade", category: "Proteins", cuisine: "Caribbean", allergens: [], mayContain: ["Celery", "Mustard"] },
  { name: "Curry Chicken", description: "Chicken pieces in aromatic Caribbean curry sauce", category: "Proteins", cuisine: "Caribbean", allergens: ["Celery"], mayContain: ["Mustard"] },
  { name: "Brown Stew Chicken", description: "Chicken braised in rich brown gravy", category: "Proteins", cuisine: "Caribbean", allergens: [], mayContain: ["Celery"] },

  // Caribbean Sides
  { name: "Fried Plantain", description: "Sweet ripe plantains fried to caramelized perfection", category: "Swallow & Sides", cuisine: "Caribbean", allergens: [], mayContain: [] },
  { name: "Festival", description: "Sweet fried dumplings, crispy outside and soft inside", category: "Swallow & Sides", cuisine: "Caribbean", allergens: ["Gluten"], mayContain: ["Milk"] },
  { name: "Bammy", description: "Traditional cassava flatbread, fried or grilled", category: "Swallow & Sides", cuisine: "Caribbean", allergens: [], mayContain: [] },
  { name: "Johnny Cakes", description: "Fried bread dough, crispy and golden", category: "Swallow & Sides", cuisine: "Caribbean", allergens: ["Gluten"], mayContain: ["Milk"] },
  { name: "Macaroni Pie", description: "Caribbean-style baked macaroni and cheese", category: "Swallow & Sides", cuisine: "Caribbean", allergens: ["Gluten", "Milk", "Eggs"], mayContain: [] },

  // ========== EUROPEAN CUISINE ==========

  // European Starters
  { name: "Scotch Eggs", description: "Hard-boiled eggs wrapped in sausage meat, breaded and fried", category: "Starters", cuisine: "European", allergens: ["Eggs", "Gluten"], mayContain: ["Milk", "Mustard"] },
  { name: "Sausage Rolls", description: "Flaky puff pastry filled with seasoned sausage meat", category: "Starters", cuisine: "European", allergens: ["Gluten"], mayContain: ["Eggs", "Milk"] },
  { name: "Prawn Cocktail", description: "Classic British starter with prawns in Marie Rose sauce", category: "Starters", cuisine: "European", allergens: ["Crustaceans", "Eggs"], mayContain: ["Celery", "Mustard"] },
  { name: "Pâté on Toast", description: "Smooth chicken liver pâté on toasted brioche", category: "Starters", cuisine: "European", allergens: ["Gluten", "Milk"], mayContain: ["Eggs"] },
  { name: "Soup of the Day", description: "Chef's special soup served with crusty bread", category: "Starters", cuisine: "European", allergens: ["Gluten"], mayContain: ["Milk", "Celery"] },

  // European Soups
  { name: "Cream of Tomato Soup", description: "Smooth and creamy tomato soup with basil", category: "Soups & Stews", cuisine: "European", allergens: ["Milk"], mayContain: ["Celery"] },
  { name: "Chicken & Vegetable Soup", description: "Hearty chicken soup with seasonal vegetables", category: "Soups & Stews", cuisine: "European", allergens: ["Celery"], mayContain: ["Gluten"] },
  { name: "Minestrone", description: "Italian vegetable soup with pasta and beans", category: "Soups & Stews", cuisine: "European", allergens: ["Gluten"], mayContain: ["Celery"] },
  { name: "French Onion Soup", description: "Caramelized onions in rich broth with cheese croutons", category: "Soups & Stews", cuisine: "European", allergens: ["Gluten", "Milk"], mayContain: ["Celery"] },

  // European Mains
  { name: "Roast Beef with Yorkshire Pudding", description: "Classic Sunday roast with tender beef and crispy Yorkshire pudding", category: "Proteins", cuisine: "European", allergens: ["Gluten", "Eggs", "Milk"], mayContain: ["Mustard"] },
  { name: "Fish and Chips", description: "Beer-battered fish with chunky chips and mushy peas", category: "Proteins", cuisine: "European", allergens: ["Fish", "Gluten"], mayContain: ["Eggs"] },
  { name: "Shepherd's Pie", description: "Minced lamb topped with creamy mashed potatoes", category: "Proteins", cuisine: "European", allergens: ["Milk"], mayContain: ["Celery"] },
  { name: "Bangers and Mash", description: "Pork sausages with mashed potatoes and onion gravy", category: "Proteins", cuisine: "European", allergens: ["Gluten", "Milk"], mayContain: ["Celery", "Mustard"] },
  { name: "Chicken Tikka Masala", description: "British-Indian classic with creamy tomato sauce", category: "Proteins", cuisine: "European", allergens: ["Milk"], mayContain: ["Nuts", "Celery"] },
  { name: "Beef Wellington", description: "Tender beef fillet wrapped in puff pastry with mushroom duxelles", category: "Proteins", cuisine: "European", allergens: ["Gluten", "Eggs"], mayContain: ["Milk"] },
  { name: "Roast Chicken", description: "Herb-roasted chicken with gravy", category: "Proteins", cuisine: "European", allergens: [], mayContain: ["Gluten", "Celery"] },
  { name: "Steak and Kidney Pie", description: "Traditional pie filled with beef and kidney in rich gravy", category: "Proteins", cuisine: "European", allergens: ["Gluten"], mayContain: ["Eggs", "Milk"] },

  // European Sides
  { name: "Roast Potatoes", description: "Crispy golden roasted potatoes", category: "Swallow & Sides", cuisine: "European", allergens: [], mayContain: [] },
  { name: "Coleslaw", description: "Fresh cabbage and carrot salad with creamy dressing", category: "Swallow & Sides", cuisine: "European", allergens: ["Eggs", "Mustard"], mayContain: ["Milk"] },
  { name: "Garden Salad", description: "Mixed greens with tomatoes, cucumbers, and vinaigrette", category: "Swallow & Sides", cuisine: "European", allergens: [], mayContain: ["Mustard"] },
  { name: "Garlic Bread", description: "Crispy baguette with herb butter and garlic", category: "Swallow & Sides", cuisine: "European", allergens: ["Gluten", "Milk"], mayContain: [] },
  { name: "Mashed Potatoes", description: "Creamy mashed potatoes with butter", category: "Swallow & Sides", cuisine: "European", allergens: ["Milk"], mayContain: [] },
  { name: "Chips (French Fries)", description: "Crispy golden chips", category: "Swallow & Sides", cuisine: "European", allergens: [], mayContain: [] },
  { name: "Mushy Peas", description: "Traditional British side of marrowfat peas", category: "Swallow & Sides", cuisine: "European", allergens: [], mayContain: [] },

  // Specials
  { name: "Waakye", description: "Ghanaian rice and beans cooked with millet leaves", category: "Specials", cuisine: "Nigerian", allergens: ["Soya Beans"], mayContain: ["Fish", "Celery"] },
  { name: "Kelewele", description: "Spicy fried plantain cubes seasoned with ginger and cayenne pepper", category: "Specials", cuisine: "Nigerian", allergens: [], mayContain: ["Celery"] },
  { name: "Roti with Curry", description: "Caribbean flatbread with curry filling", category: "Specials", cuisine: "Caribbean", allergens: ["Gluten"], mayContain: ["Milk", "Celery"] },
  { name: "Cornish Pasty", description: "Traditional pastry filled with beef and vegetables", category: "Specials", cuisine: "European", allergens: ["Gluten"], mayContain: ["Milk", "Celery"] },
];
