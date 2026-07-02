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
  { id: 'surti-specials', name: 'Signature Juices' },
  { id: 'vada-pav-specials', name: 'Mocktails & Coolers' },
  { id: 'chatpate-chaat', name: 'Fresh Shakes & Shots' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // SIGNATURE JUICES
  {
    id: 'surti-khaman',
    name: 'Avocado Honey Shake',
    price: 150,
    category: 'surti-specials',
    description: 'Ultra-creamy fresh avocado blended with pure organic honey, whole milk, and served ice cold with chopped almonds.',
    inclusions: [
      'Fresh Avocado Pulp',
      'Organic Wild Honey',
      'Chilled Whole Milk',
      'Crushed Almond Garnish'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '310 kcal' },
      { label: 'VITAMIN_LOAD', value: 'High Vit E & K' },
      { label: 'HEALTH_INDEX', value: '95%' },
      { label: 'PREP_CYCLES', value: '5 mins' }
    ],
    isAvailable: true,
    neonColor: 'blue',
    image: '/images/breakfastidli.png'
  },
  {
    id: 'surti-khaman-butter',
    name: 'Green Detox Booster',
    price: 130,
    category: 'surti-specials',
    description: 'Refreshing cold-pressed green juice made from fresh spinach, green apple, cucumber, mint, and a dash of lemon juice.',
    inclusions: [
      'Cold-Pressed Spinach & Mint',
      'Green Apple & Cucumber',
      'Fresh Lemon Squeeze'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '110 kcal' },
      { label: 'SUGAR_LEVEL', value: 'VERY LOW' },
      { label: 'ANTIOXIDANTS', value: 'SUPER-LOADED' },
      { label: 'PREP_CYCLES', value: '5 mins' }
    ],
    isAvailable: true,
    neonColor: 'amber',
    image: '/images/breakfastidli.png'
  },
  {
    id: 'surti-khaman-cheese',
    name: 'Kiwi Mint Slush',
    price: 140,
    category: 'surti-specials',
    description: 'Refreshing blended icy slush made with fresh tangy kiwi fruit, crushed ice, and a dash of sweet mint syrup.',
    inclusions: [
      'Fresh Pulp of Kiwi (2 Pcs)',
      'Crushed Crystal Ice',
      'Fresh Mint Extract'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '160 kcal' },
      { label: 'VITAMIN_C', value: '250mg' },
      { label: 'TEMPRATURE', value: 'SUB-ZERO' },
      { label: 'PREP_CYCLES', value: '4 mins' }
    ],
    isAvailable: true,
    neonColor: 'blue',
    image: '/images/breakfastidli.png'
  },
  {
    id: 'sev-khamani',
    name: 'Pulpy Orange Splash',
    price: 120,
    category: 'surti-specials',
    description: '100% natural, freshly squeezed orange juice with lots of real fruit pulp, served chilled without any added sugar.',
    inclusions: [
      'Fresh Orange Pulp Extract',
      'Squeeze of Lime',
      'Mint Leaf Garnish'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '140 kcal' },
      { label: 'PULP_LEVEL', value: 'HEAVY' },
      { label: 'SUGAR_STATUS', value: 'NO ADDED SUGAR' },
      { label: 'PREP_CYCLES', value: '4 mins' }
    ],
    isAvailable: true,
    neonColor: 'amber',
    image: '/images/samosachaat.png'
  },
  {
    id: 'khichu',
    name: 'Cucumber Mint Cooler',
    price: 100,
    category: 'surti-specials',
    description: 'Crisp and hydrating juice blend of cucumber, fresh mint leaves, lemon juice, and a pinch of black salt.',
    inclusions: [
      'Hydrating Cucumber Juice',
      'Crushed Mint Leaves',
      'Black Salt & Lemon'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '60 kcal' },
      { label: 'HYDRATION', value: 'OPTIMAL' },
      { label: 'SUGAR_LEVEL', value: 'ZERO' },
      { label: 'PREP_CYCLES', value: '4 mins' }
    ],
    isAvailable: true,
    neonColor: 'blue',
    image: '/images/breakfastidli.png'
  },
  {
    id: 'ragda-pav',
    name: 'Delhi Fruit Cream Bowl',
    price: 160,
    category: 'surti-specials',
    description: 'A lavish dessert bowl featuring fresh seasonal fruits mixed in thick sweet cream, garnished with raisins and cashews.',
    inclusions: [
      'Fresh Mango, Apple & Banana cubes',
      'Thick Sweet Dairy Cream',
      'Dry Fruits & Cherry Garnish'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '380 kcal' },
      { label: 'FAT_LOAD', value: 'Rich Creamy' },
      { label: 'CARB_CHARGE', value: '44g' },
      { label: 'PREP_CYCLES', value: '6 mins' }
    ],
    isAvailable: true,
    neonColor: 'amber',
    image: '/images/puri.png'
  },
  {
    id: 'dakor-gota',
    name: 'Pomegranate Energizer',
    price: 140,
    category: 'surti-specials',
    description: 'Freshly pressed sweet pomegranate juice rich in nutrients, served chilled. Great for blood circulation and energy.',
    inclusions: [
      'Fresh Pomegranate Seeds Press',
      'Dash of Black Salt',
      'Ice Cubes'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '180 kcal' },
      { label: 'ANTIOXIDANTS', value: 'HIGH' },
      { label: 'SPICE_LEVEL', value: 'SWEET-TART' },
      { label: 'PREP_CYCLES', value: '5 mins' }
    ],
    isAvailable: true,
    neonColor: 'blue',
    image: '/images/samosachaat.png'
  },
  {
    id: 'poha',
    name: 'Green Apple Cooler',
    price: 130,
    category: 'surti-specials',
    description: 'Tangy and crisp juice from fresh green apples, blended with mint and ginger for a warm finish.',
    inclusions: [
      'Green Apple Juice (250ml)',
      'Fresh Ginger Juice extract',
      'Mint Leaves'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '150 kcal' },
      { label: 'ACIDITY_LEVEL', value: 'TART' },
      { label: 'SPICE_PROFILE', value: 'Ginger Kick' },
      { label: 'PREP_CYCLES', value: '4 mins' }
    ],
    isAvailable: true,
    neonColor: 'amber',
    image: '/images/breakfastidli.png'
  },

  // MOCKTAILS & COOLERS
  {
    id: 'cheese-vada-pav',
    name: 'Watermelon Mint Mojito',
    price: 110,
    category: 'vada-pav-specials',
    description: 'Refreshing summer cooler made with muddled watermelon chunks, fresh mint, lime juice, topped with sparkling club soda.',
    inclusions: [
      'Muddled Sweet Watermelon',
      'Fresh Mint & Lime juice',
      'Carbonated Sparkling Soda'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '130 kcal' },
      { label: 'FIZZ_LEVEL', value: 'HIGH' },
      { label: 'HYDRATION', value: 'EXCELLENT' },
      { label: 'PREP_CYCLES', value: '3 mins' }
    ],
    isAvailable: true,
    neonColor: 'blue',
    image: '/images/muttoncurry.png'
  },
  {
    id: 'schezwan-vada-pav',
    name: 'Blue Lagoon Iced Mocktail',
    price: 120,
    category: 'vada-pav-specials',
    description: 'A vibrant blue mocktail with a tangy orange-lemon flavour profile, mixed with sprite and crushed ice.',
    inclusions: [
      'Blue Curacao Syrup',
      'Fresh Lemon & Lime Slices',
      'Chilled Lemon-Lime Soda'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '180 kcal' },
      { label: 'SWEETNESS', value: 'MEDIUM-HIGH' },
      { label: 'TEMPRATURE', value: 'ICE COLD' },
      { label: 'PREP_CYCLES', value: '3 mins' }
    ],
    isAvailable: true,
    neonColor: 'amber',
    image: '/images/muttoncurry.png'
  },
  {
    id: 'ulta-vada-pav',
    name: 'Classic Virgin Mojito',
    price: 100,
    category: 'vada-pav-specials',
    description: 'The timeless cooler. Fresh mint leaves and lemon wedges muddled with brown sugar, topped with club soda and ice.',
    inclusions: [
      'Muddled Mint & Lime Wedges',
      'Brown Demerara Sugar',
      'Carbonated Club Soda'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '110 kcal' },
      { label: 'FIZZ_LEVEL', value: 'HIGH' },
      { label: 'SPICE_LEVEL', value: 'CITRUS-MINT' },
      { label: 'PREP_CYCLES', value: '3 mins' }
    ],
    isAvailable: true,
    neonColor: 'blue',
    image: '/images/muttoncurry.png'
  },
  {
    id: 'sabudana-vada',
    name: 'Tropical Alfonso Mango Shake',
    price: 140,
    category: 'vada-pav-specials',
    description: 'Thick and luscious milkshake made with ripe premium Alfonso mango pulp, organic milk, topped with a scoop of vanilla ice cream.',
    inclusions: [
      'Alfonso Mango Puree',
      'Creamy Whole Milk',
      'Vanilla Ice Cream Scoop'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '340 kcal' },
      { label: 'DAIRY_LOAD', value: 'HEAVY' },
      { label: 'FRUIT_PERCENT', value: '100% REAL MANGO' },
      { label: 'PREP_CYCLES', value: '5 mins' }
    ],
    isAvailable: true,
    neonColor: 'amber',
    image: '/images/freshjuice.png'
  },
  {
    id: 'masala-pav',
    name: 'Spiced Masala Lemonade',
    price: 80,
    category: 'vada-pav-specials',
    description: 'Tangy Indian-style shikanji. Fresh lemon juice mixed with roasted cumin seeds, black salt, and a hint of sweet syrup.',
    inclusions: [
      'Squeezed Lemon Juice',
      'Special Roasted Shikanji Masala',
      'Mint Leaves garnish'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '90 kcal' },
      { label: 'SPICE_LEVEL', value: 'TANGY-SPICY' },
      { label: 'CARB_CHARGE', value: '22g' },
      { label: 'PREP_CYCLES', value: '3 mins' }
    ],
    isAvailable: true,
    neonColor: 'blue',
    image: '/images/muttoncurry.png'
  },

  // FRESH SHAKES & SHOTS
  {
    id: 'aloo-chaat',
    name: 'Sweet Strawberry Smoothie',
    price: 130,
    category: 'chatpate-chaat',
    description: 'Creamy yogurt-based smoothie blended with sweet red strawberries, honey, and a touch of vanilla.',
    inclusions: [
      'Sweet Red Strawberries',
      'Chilled Greek Yogurt Base',
      'Pure Honey'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '220 kcal' },
      { label: 'FAT_CONTENT', value: '4g' },
      { label: 'FRUIT_TYPE', value: 'INDORE BERRY' },
      { label: 'PREP_CYCLES', value: '4 mins' }
    ],
    isAvailable: true,
    neonColor: 'blue',
    image: '/images/samosachaat.png'
  },
  {
    id: 'aloo-tikki-chaat',
    name: 'Mixed Berry Bliss Shake',
    price: 150,
    category: 'chatpate-chaat',
    description: 'A luxurious purple shake containing blue berries, raspberries, and black berries blended with low fat milk and yogurt.',
    inclusions: [
      'Blueberry, Raspberry & Blackberry',
      'Chilled Creamy Milk',
      'Honey Drizzle'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '270 kcal' },
      { label: 'ANTIOXIDANTS', value: 'MAX LOAD' },
      { label: 'FIBER_CONTENT', value: '6g' },
      { label: 'PREP_CYCLES', value: '5 mins' }
    ],
    isAvailable: true,
    neonColor: 'amber',
    image: '/images/samosachaat.png'
  },
  {
    id: 'dahi-vada',
    name: 'Creamy Chilled Cold Coffee',
    price: 120,
    category: 'chatpate-chaat',
    description: 'Thick, frothy coffee blended with premium coffee powder, whole milk, sugar, and decorated with chocolate syrup.',
    inclusions: [
      'Espresso Decoction Blend',
      'Full Cream Cold Milk',
      'Hershey Chocolate Drizzle'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '290 kcal' },
      { label: 'CAFFEINE_LOAD', value: '80mg' },
      { label: 'FROTH_LEVEL', value: 'HEAVY' },
      { label: 'PREP_CYCLES', value: '4 mins' }
    ],
    isAvailable: true,
    neonColor: 'blue',
    image: '/images/freshjuice.png'
  },
  {
    id: 'mumbai-bhel-puri',
    name: 'Chilled Rose Milk Shake',
    price: 100,
    category: 'chatpate-chaat',
    description: 'Fragrant and floral. Premium rose syrup blended with boiled cold milk and topped with sweet basil seeds (sabja).',
    inclusions: [
      'Organic Rose Syrup',
      'Chilled Whole Milk',
      'Soaked Sabja Seeds (Basil)'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '230 kcal' },
      { label: 'COOLING_EFFECT', value: 'EXCELLENT' },
      { label: 'FAT_CONTENT', value: '6g' },
      { label: 'PREP_CYCLES', value: '3 mins' }
    ],
    isAvailable: true,
    neonColor: 'amber',
    image: '/images/panipuri.png'
  },
  {
    id: 'magical-masala-bhel',
    name: 'Immunity Ginger Shots (6 Pcs)',
    price: 90,
    category: 'chatpate-chaat',
    description: 'Six concentrated shot glasses containing pure ginger extract, lemon juice, raw honey, and a pinch of black pepper to boost digestion.',
    inclusions: [
      'Pure Ginger Extract (60ml)',
      'Lemon & Pepper mix',
      'Raw Wild Honey'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '80 kcal' },
      { label: 'SPICE_LEVEL', value: 'SPICY-ZESTY' },
      { label: 'HEALTH_BOOST', value: 'ANTI-INFLAM' },
      { label: 'PREP_CYCLES', value: '4 mins' }
    ],
    isAvailable: true,
    neonColor: 'blue',
    image: '/images/panipuri.png'
  },
  {
    id: 'sukha-bhel-puri',
    name: 'Tangy Lemon Mint Shots (6 Pcs)',
    price: 80,
    category: 'chatpate-chaat',
    description: 'Six shots of tangy lemon juice, mint essence, honey, and green tea concentrate. A perfect quick metabolism kicker.',
    inclusions: [
      'Lemon Juice & Mint Extract',
      'Green Tea Extract',
      'Organic Honey'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '60 kcal' },
      { label: 'CALORIE_LEVEL', value: 'MINIMAL' },
      { label: 'METABOLISM', value: 'STIMULATED' },
      { label: 'PREP_CYCLES', value: '3 mins' }
    ],
    isAvailable: true,
    neonColor: 'amber',
    image: '/images/panipuri.png'
  },
  {
    id: 'nippat-masala',
    name: 'Pina Colada Mocktail',
    price: 130,
    category: 'chatpate-chaat',
    description: 'A creamy blend of sweet pineapple juice, thick coconut milk, served with crushed ice and pineapple wedge garnish.',
    inclusions: [
      'Alfonso Pineapple Juice',
      'Organic Coconut Milk Cream',
      'Pineapple Slice Garnish'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '260 kcal' },
      { label: 'CREAMINESS', value: 'HIGH' },
      { label: 'ALCOHOL_STAT', value: '0.0% (NON-ALC)' },
      { label: 'PREP_CYCLES', value: '4 mins' }
    ],
    isAvailable: true,
    neonColor: 'blue',
    image: '/images/puri.png'
  },
  {
    id: 'panipuri',
    name: '5-Flavor Juice Shots (6 Pcs)',
    price: 100,
    category: 'chatpate-chaat',
    description: 'Six juice shot glasses featuring six distinct flavors (Tangy Mango, Sweet Grape, Tart Kiwi, Spicy Ginger-Lime, Watermelon-Mint, and Blueberry).',
    inclusions: [
      '6 Flavor Juice concentrates',
      'Chilled Water bases',
      'Mint garnishes'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '110 kcal' },
      { label: 'SHOT_COUNT', value: '6 Glasses' },
      { label: 'VARIETY', value: '6 DISTINCT FLAVOURS' },
      { label: 'PREP_CYCLES', value: '4 mins' }
    ],
    isAvailable: true,
    neonColor: 'amber',
    image: '/images/panipuri.png'
  }
];
