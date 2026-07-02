export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: 'surti-specials' | 'vada-pav-specials' | 'chatpate-chaat';
  description: string;
  inclusions: string[];
  specifications: { label: string; value: string }[];
  isAvailable: boolean;
  neonColor: 'amber' | 'blue';
  image: string;
}

export const MENU_CATEGORIES = [
  { id: 'surti-specials', name: 'Mane Specials' },
  { id: 'vada-pav-specials', name: 'Buns & Vada Pav' },
  { id: 'chatpate-chaat', name: 'Chaats & Coolers' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // FLAVOUR SIGNATURES
  {
    id: 'surti-khaman',
    name: 'Traditional Steamed Idli (4 Pcs)',
    price: 100,
    category: 'surti-specials',
    description: 'Traditional soft, fluffy and spongy steamed rice cakes, tempered with light mustard seeds and served hot with fresh green chillies and chutney.',
    inclusions: [
      'Soft Steamed Idli (4 Pcs)',
      'Fried Green Chillies',
      'Spicy Mint-Coriander Chutney',
      'Sambhar Garnish'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '240 kcal' },
      { label: 'PROTEIN_LOAD', value: '8g' },
      { label: 'CARB_CHARGE', value: '34g' },
      { label: 'PREP_CYCLES', value: '10 mins' }
    ],
    isAvailable: true,
    neonColor: 'blue',
    image: '/images/breakfastidli.png'
  },
  {
    id: 'surti-khaman-butter',
    name: 'Butter Ghee Masala Idli',
    price: 110,
    category: 'surti-specials',
    description: 'Our traditional steamed idli served hot and topped with a generous layer of pure melted butter and aromatic podi for a rich, comforting taste.',
    inclusions: [
      'Soft Idli (4 Pcs)',
      'Melted Amul Butter & Ghee',
      'Spicy Garlic-Podi Chutney'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '310 kcal' },
      { label: 'FAT_CONTENT', value: '12g' },
      { label: 'PROTEIN_LOAD', value: '8g' },
      { label: 'PREP_CYCLES', value: '10 mins' }
    ],
    isAvailable: true,
    neonColor: 'amber',
    image: '/images/breakfastidli.png'
  },
  {
    id: 'surti-khaman-cheese',
    name: 'Cheese Loaded Steamed Idli',
    price: 120,
    category: 'surti-specials',
    description: 'Fluffy steamed idli loaded with a thick blanket of freshly grated processed cheese. A modern fusion twist to a classic south Indian staple.',
    inclusions: [
      'Soft Idli (4 Pcs)',
      'Grated Cheddar & Mozzarella',
      'Sweet and Sour Chutney'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '360 kcal' },
      { label: 'CHEESE_LOAD', value: 'LOADED' },
      { label: 'PROTEIN_LOAD', value: '12g' },
      { label: 'PREP_CYCLES', value: '10 mins' }
    ],
    isAvailable: true,
    neonColor: 'blue',
    image: '/images/breakfastidli.png'
  },
  {
    id: 'sev-khamani',
    name: 'Special Samosa Chaat',
    price: 100,
    category: 'surti-specials',
    description: 'Crispy golden samosas crumbled and topped with yellow peas ragda, sweetened curd, tamarind chutney, fine nylon sev, and fresh pomegranate seeds.',
    inclusions: [
      'Crumbled Spiced Samosas',
      'Crispy Nylon Sev',
      'Pomegranate Seeds',
      'Fresh Coriander & Lemon'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '290 kcal' },
      { label: 'PROTEIN_LOAD', value: '7g' },
      { label: 'CARB_CHARGE', value: '36g' },
      { label: 'PREP_CYCLES', value: '12 mins' }
    ],
    isAvailable: true,
    neonColor: 'amber',
    image: '/images/samosachaat.png'
  },
  {
    id: 'khichu',
    name: 'Classic Rava Idli (2 Pcs)',
    price: 80,
    category: 'surti-specials',
    description: 'A comforting, warm rava idli seasoned with green chillies, mustard seeds, and cashews, served hot drizzled with raw ghee.',
    inclusions: [
      'Hot Spiced Rava Idli',
      'Pure Desi Ghee',
      'Coconut & Garlic Masala Chutney'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '180 kcal' },
      { label: 'GLUTEN_STATUS', value: 'CONTAINS RAVA' },
      { label: 'SPICE_PROFILE', value: 'Peppery & Cashews' },
      { label: 'PREP_CYCLES', value: '8 mins' }
    ],
    isAvailable: true,
    neonColor: 'blue',
    image: '/images/breakfastidli.png'
  },
  {
    id: 'ragda-pav',
    name: 'Delhi Chole Bhature Combo',
    price: 90,
    category: 'surti-specials',
    description: 'A classic street food meal featuring hot and spicy chickpea gravy (chole) garnished with onions, served alongside two soft puffed bhature.',
    inclusions: [
      'Spicy Kabuli Chana Chole (250ml)',
      '2 Puffed Golden Bhature',
      'Chopped Onions & Pickle',
      'Green Mint Chutney'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '420 kcal' },
      { label: 'PROTEIN_LOAD', value: '12g' },
      { label: 'CARB_CHARGE', value: '64g' },
      { label: 'PREP_CYCLES', value: '10 mins' }
    ],
    isAvailable: true,
    neonColor: 'amber',
    image: '/images/puri.png'
  },
  {
    id: 'dakor-gota',
    name: 'Punjabi Samosa (2 Pcs)',
    price: 120,
    category: 'surti-specials',
    description: 'Traditional golden-fried triangles stuffed with spiced potato and peas, uniquely seasoned with coriander seeds and fennel. Crispy outside, soft inside.',
    inclusions: [
      'Punjabi Samosas (2 Pcs)',
      'Tangy Tamarind Chutney',
      'Fried Green Chilli'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '340 kcal' },
      { label: 'PROTEIN_LOAD', value: '9g' },
      { label: 'SPICE_LEVEL', value: 'MEDIUM-SPICY' },
      { label: 'PREP_CYCLES', value: '12 mins' }
    ],
    isAvailable: true,
    neonColor: 'blue',
    image: '/images/samosachaat.png'
  },
  {
    id: 'poha',
    name: 'Steamed Poha with Sev',
    price: 70,
    category: 'surti-specials',
    description: 'Light and fluffy flattened rice steamed with turmeric, curry leaves, and mustard seeds, topped with spicy and crunchy Indori sev.',
    inclusions: [
      'Steamed Spiced Poha',
      'indori Sev',
      'Fried Groundnuts & Pomegranate',
      'Fresh Lemon Wedge'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '220 kcal' },
      { label: 'FAT_CONTENT', value: '5g' },
      { label: 'CARB_CHARGE', value: '38g' },
      { label: 'PREP_CYCLES', value: '8 mins' }
    ],
    isAvailable: true,
    neonColor: 'amber',
    image: '/images/breakfastidli.png'
  },

  // VADA PAV & MORE
  {
    id: 'cheese-vada-pav',
    name: 'Signature Cheese Vada Pav',
    price: 90,
    category: 'vada-pav-specials',
    description: 'Crispy batter-fried potato dumpling placed inside a fresh pav lined with spicy green and dry garlic chutneys, loaded with melted cheddar cheese.',
    inclusions: [
      '1 Loaded Cheese Vada Pav',
      'Dry Garlic Lasun Chutney',
      'Fried Chilli'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '380 kcal' },
      { label: 'CHEESE_LEVEL', value: 'MODERATE' },
      { label: 'PROTEIN_LOAD', value: '9g' },
      { label: 'PREP_CYCLES', value: '5 mins' }
    ],
    isAvailable: true,
    neonColor: 'blue',
    image: '/images/muttoncurry.png'
  },
  {
    id: 'schezwan-vada-pav',
    name: 'Fiery Schezwan Vada Pav',
    price: 80,
    category: 'vada-pav-specials',
    description: 'A fusion street snack featuring our classic hot potato vada inside a pav bun loaded with spicy Schezwan sauce, dry garlic powder, and sweet-sour chutney.',
    inclusions: [
      '1 Schezwan Vada Pav',
      'Fiery Schezwan Paste',
      'Crispy Batter Crunchies'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '310 kcal' },
      { label: 'SPICE_LEVEL', value: 'HIGH' },
      { label: 'CARB_CHARGE', value: '38g' },
      { label: 'PREP_CYCLES', value: '5 mins' }
    ],
    isAvailable: true,
    neonColor: 'amber',
    image: '/images/muttoncurry.png'
  },
  {
    id: 'ulta-vada-pav',
    name: 'Ulta Vada Pav (Deep Fried)',
    price: 70,
    category: 'vada-pav-specials',
    description: 'Inside-out Vada Pav where the pav is stuffed with spiced potato filling, coated in a chickpea batter, and deep-fried until golden and crispy.',
    inclusions: [
      '1 Crispy Fried Ulta Vada Pav',
      'Sweet Tamarind Dip',
      'Mint Chutney'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '340 kcal' },
      { label: 'COATING_TYPE', value: 'Besan Batter' },
      { label: 'PROTEIN_LOAD', value: '7g' },
      { label: 'PREP_CYCLES', value: '8 mins' }
    ],
    isAvailable: true,
    neonColor: 'blue',
    image: '/images/muttoncurry.png'
  },
  {
    id: 'sabudana-vada',
    name: 'Chilled Mango Lassi (Sweet)',
    price: 90,
    category: 'vada-pav-specials',
    description: 'Creamy yogurt beverage blended with ripe mango pulp and topped with chopped almonds and pistachios. Served chilled.',
    inclusions: [
      'Alfonso Mango Yogurt Blend',
      'Almond & Pistachio toppings',
      'Saffron syrup drizzle'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '320 kcal' },
      { label: 'GLUTEN_STATUS', value: 'GLUTEN-FREE' },
      { label: 'DAIRY_PROFILE', value: 'Thick Yogurt Lassi' },
      { label: 'PREP_CYCLES', value: '10 mins' }
    ],
    isAvailable: true,
    neonColor: 'amber',
    image: '/images/freshjuice.png'
  },
  {
    id: 'masala-pav',
    name: 'Mumbai Butter Masala Pav',
    price: 70,
    category: 'vada-pav-specials',
    description: 'Soft pav buns sliced and tossed on a flat tawa in an aromatic, spicy, buttery mixture of tomatoes, capsicum, onions, and pav bhaji masala.',
    inclusions: [
      '2 Butter-Tossed Masala Pavs',
      'Tawa Onion-Tomato Gravy coating',
      'Fresh Lemon & Coriander'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '290 kcal' },
      { label: 'BUTTER_LOAD', value: 'GENEROUS' },
      { label: 'CARB_CHARGE', value: '44g' },
      { label: 'PREP_CYCLES', value: '7 mins' }
    ],
    isAvailable: true,
    neonColor: 'blue',
    image: '/images/muttoncurry.png'
  },

  // CHATPATE CHAAT
  {
    id: 'aloo-chaat',
    name: 'Crispy Samosa Chaat Bowl',
    price: 90,
    category: 'chatpate-chaat',
    description: 'Crispy samosa triangles tossed in chaat masala, tangy tamarind chutney, spicy green mint chutney, finished with a squeeze of fresh lime.',
    inclusions: [
      'Crispy Samosa Bites',
      'Sweet & Sour Chutney Mix',
      'Chopped Onions & Sev'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '260 kcal' },
      { label: 'SPICE_LEVEL', value: 'MEDIUM-HIGH' },
      { label: 'FAT_CONTENT', value: '9g' },
      { label: 'PREP_CYCLES', value: '8 mins' }
    ],
    isAvailable: true,
    neonColor: 'blue',
    image: '/images/samosachaat.png'
  },
  {
    id: 'aloo-tikki-chaat',
    name: 'Aloo Tikki Chaat Special',
    price: 100,
    category: 'chatpate-chaat',
    description: 'Golden shallow-fried potato patties placed on a bed of warm yellow pea ragda, topped with sweetened curd, mint-tamarind chutneys, onions, and fine sev.',
    inclusions: [
      '2 Golden Aloo Tikkis',
      'Yellow Peas Ragda Base',
      'Yogurt & Chutneys drizzle',
      'Nylon Sev & Coriander'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '380 kcal' },
      { label: 'PROTEIN_LOAD', value: '10g' },
      { label: 'CARB_CHARGE', value: '54g' },
      { label: 'PREP_CYCLES', value: '10 mins' }
    ],
    isAvailable: true,
    neonColor: 'amber',
    image: '/images/samosachaat.png'
  },
  {
    id: 'dahi-vada',
    name: 'Sweet Chilled Lassi (Glass)',
    price: 100,
    category: 'chatpate-chaat',
    description: 'Traditional Punjabi lassi made by churning fresh thick yogurt, flavored with cardamom, and served chilled with a layer of cream.',
    inclusions: [
      'Sweet Churned Cardamom Lassi',
      'Cream (Malai) layer on top',
      'Dry fruits garnish'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '210 kcal' },
      { label: 'PROTEIN_LOAD', value: '9g' },
      { label: 'TEMP_CTRL', value: 'CHILLED' },
      { label: 'PREP_CYCLES', value: '5 mins' }
    ],
    isAvailable: true,
    neonColor: 'blue',
    image: '/images/freshjuice.png'
  },
  {
    id: 'mumbai-bhel-puri',
    name: 'Chowpatty Sev Puri Special',
    price: 100,
    category: 'chatpate-chaat',
    description: 'Flat puris loaded with boiled potatoes, onions, tomatoes, and topped with garlic, mint, tamarind chutneys, nylon sev, and raw mango slices.',
    inclusions: [
      'Flat Puris (6 Pcs)',
      'Potato & Veg toppings',
      'Spicy Mint & Sweet Tamarind Drizzle',
      'Nylon Sev & Coriander'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '190 kcal' },
      { label: 'FAT_CONTENT', value: '4g' },
      { label: 'STYLE_TYPE', value: 'MUMBAI CO-SIDE' },
      { label: 'PREP_CYCLES', value: '5 mins' }
    ],
    isAvailable: true,
    neonColor: 'amber',
    image: '/images/panipuri.png'
  },
  {
    id: 'magical-masala-bhel',
    name: 'Classic Pani Puri (6 Pcs)',
    price: 100,
    category: 'chatpate-chaat',
    description: 'Crispy hollow puris stuffed with potato-chickpea masala, served with chilled spiced mint-coriander water and sweet dates-tamarind water.',
    inclusions: [
      '6 Hollow Crispy Puris',
      'Potato & Kabuli Chana filling',
      'Chilled Mint Spiced Water',
      'Sweet Dates-Tamarind Water'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '200 kcal' },
      { label: 'SPICE_LEVEL', value: 'MEDIUM-SPICY' },
      { label: 'CARB_CHARGE', value: '31g' },
      { label: 'PREP_CYCLES', value: '5 mins' }
    ],
    isAvailable: true,
    neonColor: 'blue',
    image: '/images/panipuri.png'
  },
  {
    id: 'sukha-bhel-puri',
    name: 'Dry Masala Sukha Bhel',
    price: 70,
    category: 'chatpate-chaat',
    description: 'A crunchy mixture of puffed rice, roasted peanuts, sev, papdi, and chopped veggies seasoned only with dry mango powder, lemon juice, and green herbs.',
    inclusions: [
      'Dry Crispy Bhel Mix',
      'Lemon Squeeze',
      'Fresh Coriander',
      'Fine Sev & Papdi'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '150 kcal' },
      { label: 'FAT_CONTENT', value: '3g' },
      { label: 'MOISTURE_LEVEL', value: 'ZERO (DRY)' },
      { label: 'PREP_CYCLES', value: '4 mins' }
    ],
    isAvailable: true,
    neonColor: 'amber',
    image: '/images/panipuri.png'
  },
  {
    id: 'nippat-masala',
    name: 'Crispy Nippat Masala',
    price: 100,
    category: 'chatpate-chaat',
    description: 'A popular Karnataka snack made by crushing flat, crunchy fried Nippat biscuits and tossing them with grated carrots, chopped onions, tamarind-garlic chutney, and red chilli powder.',
    inclusions: [
      'Crushed Spiced Nippats',
      'Carrot & Onion Salad mix',
      'Sweet and Tangy Chutney Drizzle',
      'Roasted Peanuts'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '280 kcal' },
      { label: 'PROTEIN_LOAD', value: '6g' },
      { label: 'BASE_SNACK', value: 'Nippat Biscuits' },
      { label: 'PREP_CYCLES', value: '6 mins' }
    ],
    isAvailable: true,
    neonColor: 'blue',
    image: '/images/puri.png'
  },
  {
    id: 'panipuri',
    name: 'Fiery 5-Water Pani Puri',
    price: 80,
    category: 'chatpate-chaat',
    description: 'Six crispy flour semolina balls stuffed with spicy potato-chickpea mixture, served with five distinct flavors of spiced chilled water (Mint, Garlic, Hing, Lemon, Sweet Tamarind).',
    inclusions: [
      '6 Crispy Semolina Puris',
      'Spiced Potato & Chana filling',
      '5 Flavors of Chilled Spiced Water',
      'Sweet Tamarind Chutney'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '120 kcal' },
      { label: 'PURI_COUNT', value: '6 Pcs' },
      { label: 'WATER_VARIETY', value: '5 FLAVOURS' },
      { label: 'PREP_CYCLES', value: '5 mins' }
    ],
    isAvailable: true,
    neonColor: 'amber',
    image: '/images/panipuri.png'
  }
];
