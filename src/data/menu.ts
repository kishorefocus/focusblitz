export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: 'classic-thalis' | 'meal-combos' | 'seafood-specials';
  description: string;
  inclusions: string[];
  specifications: { label: string; value: string }[];
  isAvailable: boolean;
  neonColor: 'amber' | 'blue';
  image: string;
}

export const MENU_CATEGORIES = [
  { id: 'classic-thalis', name: 'Classic Thalis' },
  { id: 'meal-combos', name: 'Meal Combos' },
  { id: 'seafood-specials', name: 'Seafood Specials' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // CLASSIC THALIS
  {
    id: 'veg-thali1',
    name: 'Classic Veg Thali',
    price: 180,
    category: 'classic-thalis',
    description: 'A hearty collection of traditional vegetarian dishes prepared with freshly ground spices and authentic Bengaluru home-style touch.',
    inclusions: [
      'Two Seasonal Veg Gravies',
      'Dal Fry / Dal Tadka',
      'Steamed Basmati Rice',
      '2 Fresh Chapatis',
      'Papad & Pickle'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '780 kcal' },
      { label: 'PROTEIN_LOAD', value: '24g' },
      { label: 'CARB_CHARGE', value: '95g' },
      { label: 'PREP_CYCLES', value: '15 mins' }
    ],
    isAvailable: true,
    neonColor: 'blue',
    image: '/images/mealsthali.png'
  },
  {
    id: 'non-veg-thali2',
    name: 'Classic Non-Veg Thali',
    price: 240,
    category: 'classic-thalis',
    description: 'A flavorful non-vegetarian spread featuring tender meat cooked in a rich, aromatic Karnataka-style masala gravy.',
    inclusions: [
      'Authentic Chicken Gravy',
      'Mutton Masala Gravy',
      'Steamed Basmati Rice',
      '2 Fresh Chapatis',
      'Raita & Green Salad'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '940 kcal' },
      { label: 'PROTEIN_LOAD', value: '42g' },
      { label: 'CARB_CHARGE', value: '85g' },
      { label: 'PREP_CYCLES', value: '18 mins' }
    ],
    isAvailable: true,
    neonColor: 'amber',
    image: '/images/muttoncurry.png'
  },

  // MEAL COMBOS
  {
    id: 'veg-meal3',
    name: 'Neo Veg Meal Combo',
    price: 220,
    category: 'meal-combos',
    description: 'A comprehensive, nutrient-dense modular combo packed with traditional sides and a refreshing beverage.',
    inclusions: [
      'Steamed Rice',
      'Dal Tadka',
      'Traditional Dahi Baingan',
      'Mix Ghanta (Odia-style mixed veg)',
      'Crispy Papad',
      'Green Salad',
      'Chilled Soft Beverage (250ml)'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '880 kcal' },
      { label: 'PROTEIN_LOAD', value: '26g' },
      { label: 'CARB_CHARGE', value: '110g' },
      { label: 'FLUID_REFRESH', value: 'Electro-Cola' }
    ],
    isAvailable: true,
    neonColor: 'blue',
    image: '/images/muttoncurry.png'
  },
  {
    id: 'non-veg-meal4',
    name: 'Neo Non-Veg Meal Combo',
    price: 280,
    category: 'meal-combos',
    description: 'An elite non-vegetarian feast featuring our signature non-veg mix and Odia classic Non-Veg Ghanta.',
    inclusions: [
      'Steamed Rice',
      'Dal Tadka',
      'Traditional Dahi Baingan',
      'Non-Veg Ghanta (Mutton/Fish head mixed veg)',
      'Crispy Papad',
      'Green Salad',
      'Chilled Soft Beverage (250ml)'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '1080 kcal' },
      { label: 'PROTEIN_LOAD', value: '48g' },
      { label: 'CARB_CHARGE', value: '105g' },
      { label: 'FLUID_REFRESH', value: 'Electro-Cola' }
    ],
    isAvailable: true,
    neonColor: 'amber',
    image: '/images/freshjuice.png'
  },
  {
    id: 'non-veg-meal5',
    name: 'Neo Non-Veg Meal Combo',
    price: 280,
    category: 'meal-combos',
    description: 'An elite non-vegetarian feast featuring our signature non-veg mix and Odia classic Non-Veg Ghanta.',
    inclusions: [
      'Steamed Rice',
      'Dal Tadka',
      'Traditional Dahi Baingan',
      'Non-Veg Ghanta (Mutton/Fish head mixed veg)',
      'Crispy Papad',
      'Green Salad',
      'Chilled Soft Beverage (250ml)'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '1080 kcal' },
      { label: 'PROTEIN_LOAD', value: '48g' },
      { label: 'CARB_CHARGE', value: '105g' },
      { label: 'FLUID_REFRESH', value: 'Electro-Cola' }
    ],
    isAvailable: true,
    neonColor: 'amber',
    image: '/images/freshjuice.png'
  },
  {
    id: 'non-veg-meal6',
    name: 'Neo Non-Veg Meal Combo',
    price: 280,
    category: 'meal-combos',
    description: 'An elite non-vegetarian feast featuring our signature non-veg mix and Odia classic Non-Veg Ghanta.',
    inclusions: [
      'Steamed Rice',
      'Dal Tadka',
      'Traditional Dahi Baingan',
      'Non-Veg Ghanta (Mutton/Fish head mixed veg)',
      'Crispy Papad',
      'Green Salad',
      'Chilled Soft Beverage (250ml)'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '1080 kcal' },
      { label: 'PROTEIN_LOAD', value: '48g' },
      { label: 'CARB_CHARGE', value: '105g' },
      { label: 'FLUID_REFRESH', value: 'Electro-Cola' }
    ],
    isAvailable: true,
    neonColor: 'amber',
    image: '/images/freshjuice.png'
  },

  // SEAFOOD SPECIALS
  {
    id: 'fish-thali7',
    name: 'Premium Fish Thali',
    price: 320,
    category: 'seafood-specials',
    description: 'Fresh catch of the day marinated in coastal spices and simmered in a tangy tamarind-coconut curry. Served with mutton gravy side.',
    inclusions: [
      'Rawa Fried Fish (1pc)',
      'Authentic Fish Curry',
      'Rich Mutton Gravy Side',
      'Steamed Basmati Rice',
      '2 Fresh Chapatis',
      'Solkadhi / Raita'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '920 kcal' },
      { label: 'PROTEIN_LOAD', value: '38g' },
      { label: 'OMEGA_LEVEL', value: 'HIGH' },
      { label: 'AVAILABILITY', value: 'LIMITED' }
    ],
    isAvailable: true,
    neonColor: 'blue',
    image: '/images/freshjuice.png'
  },
  {
    id: 'mini-fish-thali8',
    name: 'Mini Fish Thali',
    price: 220,
    category: 'seafood-specials',
    description: 'A light version of our coastal seafood feast featuring a single fish curry alongside rice and standard sides.',
    inclusions: [
      'Authentic Fish Curry',
      'Steamed Rice',
      'Chapati (1pc)',
      'Dal Fry',
      'Green Salad'
    ],
    specifications: [
      { label: 'ENERGY_OUTPUT', value: '690 kcal' },
      { label: 'PROTEIN_LOAD', value: '28g' },
      { label: 'PREP_CYCLES', value: '12 mins' },
      { label: 'AVAILABILITY', value: 'SUBJECT_TO_CATCH' }
    ],
    isAvailable: false,
    neonColor: 'amber',
    image: '/images/freshjuice.png'
  }
];
