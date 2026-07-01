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
  { id: 'surti-specials', name: 'Surti Specials' },
  { id: 'vada-pav-specials', name: 'Vada Pav Specials' },
  { id: 'chatpate-chaat', name: 'Chatpate Chaat' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // SURTI SPECIALS
  {
    id: 'surti-khaman',
    name: 'Surti Khaman (Traditional)',
    price: 100,
    category: 'surti-specials',
    description: 'Traditional soft, fluffy and spongy Gujarati snack made from fresh chana dal, steamed to perfection and tempered with mustard seeds and green chillies.',
    inclusions: [
      'Soft Khaman (4 Pcs)',
      'Fried Green Chillies',
      'Spicy Mint-Coriander Chutney',
      'Nylon Sev Garnish'
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
    name: 'Surti Kaman (Topped With Butter)',
    price: 110,
    category: 'surti-specials',
    description: 'Our traditional steamed Khaman served hot and topped with a generous layer of pure melted butter for a rich, comforting taste.',
    inclusions: [
      'Soft Khaman (4 Pcs)',
      'Melted Amul Butter',
      'Spicy Garlic-Chilli Chutney'
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
    name: 'Surti Kaman (Topped With Cheese)',
    price: 120,
    category: 'surti-specials',
    description: 'Authentic steamed Khaman loaded with a thick blanket of freshly grated processed cheese. A modern fusion twist to a classic street food.',
    inclusions: [
      'Soft Khaman (4 Pcs)',
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
    name: 'Sev Khamani',
    price: 100,
    category: 'surti-specials',
    description: 'A popular Surti street snack made by crumbling freshly steamed Khaman, tempering it with ginger, garlic, and chillies, and topping it with nylon sev and sweet pomegranate seeds.',
    inclusions: [
      'Crumbled Spiced Khaman',
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
    name: 'Khichu',
    price: 80,
    category: 'surti-specials',
    description: 'A comforting, warm rice flour dough seasoned with green chillies, cumin seeds, and soda bi-carb, served hot drizzled with raw peanut oil and methi masala.',
    inclusions: [
      'Hot Spiced Rice Dough',
      'Raw Groundnut Oil',
      'Gujarati Methi Masala'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '180 kcal' },
      { label: 'GLUTEN_STATUS', value: 'GLUTEN-FREE' },
      { label: 'SPICE_PROFILE', value: 'Peppery & Cumin' },
      { label: 'PREP_CYCLES', value: '8 mins' }
    ],
    isAvailable: true,
    neonColor: 'blue',
    image: '/images/breakfastidli.png'
  },
  {
    id: 'ragda-pav',
    name: 'Ragda Pav (Served With 2 Pav)',
    price: 90,
    category: 'surti-specials',
    description: 'A classic street food meal featuring a hot and spicy yellow peas gravy (ragda) garnished with chopped onions and chutneys, served alongside soft pav buns.',
    inclusions: [
      'Spicy Pea Ragda (250ml)',
      '2 Butter-Toasted Pavs',
      'Chopped Onions & Coriander',
      'Tamarind Chutney'
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
    name: 'Dakor na Gota',
    price: 120,
    category: 'surti-specials',
    description: 'Traditional golden-fried gram flour fritters from the town of Dakor, uniquely flavored with sesame seeds, fennel seeds, and coriander seeds. Crispy outside, soft inside.',
    inclusions: [
      'Dakor Gota Fritters (6 Pcs)',
      'Tangy Tamarind Chutney',
      'Fried Green Chilli'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '340 kcal' },
      { label: 'PROTEIN_LOAD', value: '9g' },
      { label: 'SPICE_LEVEL', value: 'MILD-SWEET' },
      { label: 'PREP_CYCLES', value: '12 mins' }
    ],
    isAvailable: true,
    neonColor: 'blue',
    image: '/images/samosachaat.png'
  },
  {
    id: 'poha',
    name: 'Poha (Topped with Ratlami Sev)',
    price: 70,
    category: 'surti-specials',
    description: 'Light and fluffy flattened rice steamed with turmeric, curry leaves, and mustard seeds, topped with spicy and crunchy Indori Ratlami sev.',
    inclusions: [
      'Steamed Spiced Poha',
      'indori Ratlami Sev',
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
    name: 'Cheese Vada Pav (1 Pc)',
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
    name: 'Schezwan Vada Pav (1 Pc)',
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
    name: 'Ulta Vada Pav (1 Pc)',
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
    name: 'Sabudana Vada (2 Pcs)',
    price: 90,
    category: 'vada-pav-specials',
    description: 'Crispy deep-fried patties made of soaked tapioca pearls (sabudana), mashed potatoes, green chillies, and roasted peanuts. Served with sweetened curd.',
    inclusions: [
      '2 Sabudana Vada Patties',
      'Chilled Sweetened Curd Bowl',
      'Mint Chutney'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '320 kcal' },
      { label: 'GLUTEN_STATUS', value: 'GLUTEN-FREE' },
      { label: 'PEANUT_CONTENT', value: 'Crushed Roasted' },
      { label: 'PREP_CYCLES', value: '10 mins' }
    ],
    isAvailable: true,
    neonColor: 'amber',
    image: '/images/freshjuice.png'
  },
  {
    id: 'masala-pav',
    name: 'Masala Pav (2 Pcs)',
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
    name: 'Aloo Chaat',
    price: 90,
    category: 'chatpate-chaat',
    description: 'Crispy double-fried potato cubes tossed in chaat masala, tangy tamarind chutney, spicy green mint chutney, finished with a squeeze of fresh lime.',
    inclusions: [
      'Crispy Potato Cubes',
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
    name: 'Aloo Tikki Chaat',
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
    name: 'Dahi Vada (2 Pcs)',
    price: 100,
    category: 'chatpate-chaat',
    description: 'Soft lentil dumplings soaked in sweetened chilled yogurt, garnished with roasted cumin powder, red chilli powder, black salt, and sweet tamarind chutney.',
    inclusions: [
      '2 Soft Lentil Dumplings',
      'Chilled Sweetened Yogurt',
      'Tamarind Chutney',
      'Roasted Cumin & Chilli Powder'
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
    name: 'Mumbai Chowpatty Bhel Puri',
    price: 100,
    category: 'chatpate-chaat',
    description: 'Light and crunchy mix of puffed rice, roasted peanuts, diced onions, tomatoes, and boiled potatoes tossed in garlic, mint, and sour tamarind chutneys.',
    inclusions: [
      'Puffed Rice & Peanut Mix',
      'Garlic-Chilli Chutney (Spicy)',
      'Tamarind Chutney (Sweet)',
      'Papdi & Nylon Sev'
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
    name: 'Magical Masala Spicy Bhel',
    price: 100,
    category: 'chatpate-chaat',
    description: 'A fiery variation of our classic Bhel Puri, tossed with extra green chillies and a special secret hot masala powder that packs a punch.',
    inclusions: [
      'Puffed Rice & Spiced Peanuts',
      'Special Spicy Masala Dust',
      'Green Chilli Paste & Garlic Chutney',
      'Sev & Papdi crunchies'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '200 kcal' },
      { label: 'SPICE_LEVEL', value: 'EXTREME' },
      { label: 'CARB_CHARGE', value: '31g' },
      { label: 'PREP_CYCLES', value: '5 mins' }
    ],
    isAvailable: true,
    neonColor: 'blue',
    image: '/images/panipuri.png'
  },
  {
    id: 'sukha-bhel-puri',
    name: 'Sukha (Dry) Bhel Puri',
    price: 70,
    category: 'chatpate-chaat',
    description: 'A crunchy mixture of puffed rice, roasted peanuts, sev, papdi, and chopped veggies seasoned only with dry mango powder, lemon juice, and green herbs (no wet chutneys).',
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
    name: 'Nippat Masala Dry',
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
    name: 'Pani Puri (Gol Gappe)',
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
