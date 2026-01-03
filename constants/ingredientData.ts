/**
 * Comprehensive Ingredient Metadata
 * Maps ingredient names to emoji, category, and display label
 * Supports 653+ ingredients with proper categorization
 */

export interface IngredientMetadata {
  emoji: string;
  category: string;
  label: string;
}

export const INGREDIENT_CATEGORIES = {
  FRUITS: "Fruits",
  VEGETABLES: "Vegetables",
  MEAT_POULTRY: "Meat & Poultry",
  SEAFOOD: "Seafood",
  DAIRY_EGGS: "Dairy & Eggs",
  GRAINS_PASTA: "Grains & Pasta",
  SPICES_HERBS: "Spices & Herbs",
  BAKERY: "Bakery",
  NUTS_SEEDS: "Nuts & Seeds",
  LEGUMES: "Legumes",
  BEVERAGES: "Beverages",
  CONDIMENTS: "Condiments & Sauces",
  OILS_FATS: "Oils & Fats",
  DESSERTS: "Desserts & Sweets",
  CANNED: "Canned & Preserved",
  OTHER: "Other"
} as const;

export const CATEGORY_EMOJIS: Record<string, string> = {
  [INGREDIENT_CATEGORIES.FRUITS]: "🍎",
  [INGREDIENT_CATEGORIES.VEGETABLES]: "🥦",
  [INGREDIENT_CATEGORIES.MEAT_POULTRY]: "🥩",
  [INGREDIENT_CATEGORIES.SEAFOOD]: "🐟",
  [INGREDIENT_CATEGORIES.DAIRY_EGGS]: "🥛",
  [INGREDIENT_CATEGORIES.GRAINS_PASTA]: "🌾",
  [INGREDIENT_CATEGORIES.SPICES_HERBS]: "🧂",
  [INGREDIENT_CATEGORIES.BAKERY]: "🍞",
  [INGREDIENT_CATEGORIES.NUTS_SEEDS]: "🥜",
  [INGREDIENT_CATEGORIES.LEGUMES]: "🫘",
  [INGREDIENT_CATEGORIES.BEVERAGES]: "🍷",
  [INGREDIENT_CATEGORIES.CONDIMENTS]: "🍯",
  [INGREDIENT_CATEGORIES.OILS_FATS]: "🧈",
  [INGREDIENT_CATEGORIES.DESSERTS]: "🍰",
  [INGREDIENT_CATEGORIES.CANNED]: "🥫",
  [INGREDIENT_CATEGORIES.OTHER]: "🥘"
};

export const INGREDIENT_METADATA: Record<string, IngredientMetadata> = {
  // ========================================
  // CORE INGREDIENTS (From Cleaned Dataset)
  // ========================================
  "salt": { emoji: "🧂", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Salt" },
  "olive oil": { emoji: "🫒", category: INGREDIENT_CATEGORIES.OILS_FATS, label: "Olive Oil" },
  "sugar": { emoji: "🧂", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Sugar" },
  "garlic": { emoji: "🧄", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Garlic" },
  "pepper": { emoji: "🧂", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Pepper" },
  "butter": { emoji: "🧈", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Butter" },
  "egg": { emoji: "🥚", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Egg" },
  "flour": { emoji: "🌾", category: INGREDIENT_CATEGORIES.GRAINS_PASTA, label: "Flour" },
  "lemon juice": { emoji: "🍋", category: INGREDIENT_CATEGORIES.FRUITS, label: "Lemon Juice" },
  "water": { emoji: "💧", category: INGREDIENT_CATEGORIES.BEVERAGES, label: "Water" },
  "onion": { emoji: "🧅", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Onion" },
  "vegetable oil": { emoji: "🧈", category: INGREDIENT_CATEGORIES.OILS_FATS, label: "Vegetable Oil" },
  "cream": { emoji: "🥛", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Cream" },
  "milk": { emoji: "🥛", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Milk" },
  "coriander": { emoji: "🌿", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Coriander" },
  "thyme": { emoji: "🌿", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Thyme" },
  "vanilla extract": { emoji: "🍦", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Vanilla Extract" },
  "ginger": { emoji: "🫚", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Ginger" },
  "shallot": { emoji: "🧅", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Shallot" },
  "green onion": { emoji: "🧅", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Green Onion" },
  "baking powder": { emoji: "🧂", category: INGREDIENT_CATEGORIES.BAKERY, label: "Baking Powder" },
  "lime juice": { emoji: "🍋", category: INGREDIENT_CATEGORIES.FRUITS, label: "Lime Juice" },
  "cinnamon": { emoji: "🧂", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Cinnamon" },
  "egg yolk": { emoji: "🥚", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Egg Yolk" },
  "honey": { emoji: "🍯", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Honey" },
  "mint": { emoji: "🌿", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Mint" },
  "baking soda": { emoji: "🧂", category: INGREDIENT_CATEGORIES.BAKERY, label: "Baking Soda" },
  "tomato": { emoji: "🍅", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Tomato" },
  "basil": { emoji: "🌿", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Basil" },
  "cumin": { emoji: "🧂", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Cumin" },
  "dry white wine": { emoji: "🍷", category: INGREDIENT_CATEGORIES.BEVERAGES, label: "Dry White Wine" },
  "parsley": { emoji: "🌿", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Parsley" },
  "lemon zest": { emoji: "🍋", category: INGREDIENT_CATEGORIES.FRUITS, label: "Lemon Zest" },
  "rosemary": { emoji: "🌿", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Rosemary" },
  "bay": { emoji: "🌿", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Bay Leaf" },
  "chive": { emoji: "🌿", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Chives" },
  "carrot": { emoji: "🥕", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Carrot" },
  "oregano": { emoji: "🌿", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Oregano" },
  "celery": { emoji: "🥬", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Celery" },
  "soy sauce": { emoji: "🍶", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Soy Sauce" },
  "dijon mustard": { emoji: "🫙", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Dijon Mustard" },
  "cornstarch": { emoji: "🌾", category: INGREDIENT_CATEGORIES.GRAINS_PASTA, label: "Cornstarch" },
  "mayonnaise": { emoji: "🥫", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Mayonnaise" },
  "nutmeg": { emoji: "🧂", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Nutmeg" },

  // ========================================
  // FRUITS
  // ========================================
  "açai": { emoji: "🫐", category: INGREDIENT_CATEGORIES.FRUITS, label: "Açai" },
  "apples": { emoji: "🍎", category: INGREDIENT_CATEGORIES.FRUITS, label: "Apples" },
  "apricot": { emoji: "🍑", category: INGREDIENT_CATEGORIES.FRUITS, label: "Apricot" },
  "angelino plums": { emoji: "💜", category: INGREDIENT_CATEGORIES.FRUITS, label: "Angelino Plums" },
  "avocado": { emoji: "🥑", category: INGREDIENT_CATEGORIES.FRUITS, label: "Avocado" },
  "bananas": { emoji: "🍌", category: INGREDIENT_CATEGORIES.FRUITS, label: "Bananas" },
  "berries": { emoji: "🫐", category: INGREDIENT_CATEGORIES.FRUITS, label: "Berries" },
  "blackberries": { emoji: "🫐", category: INGREDIENT_CATEGORIES.FRUITS, label: "Blackberries" },
  "blueberries": { emoji: "🫐", category: INGREDIENT_CATEGORIES.FRUITS, label: "Blueberries" },
  "brandywine tomatoes": { emoji: "🍅", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Brandywine Tomatoes" },
  "cantaloupe": { emoji: "🍈", category: INGREDIENT_CATEGORIES.FRUITS, label: "Cantaloupe" },
  "cherries": { emoji: "🍒", category: INGREDIENT_CATEGORIES.FRUITS, label: "Cherries" },
  "cranberries": { emoji: "🫐", category: INGREDIENT_CATEGORIES.FRUITS, label: "Cranberries" },
  "dates": { emoji: "🫘", category: INGREDIENT_CATEGORIES.FRUITS, label: "Dates" },
  "dragon fruit": { emoji: "🐉", category: INGREDIENT_CATEGORIES.FRUITS, label: "Dragon Fruit" },
  "figs": { emoji: "🌰", category: INGREDIENT_CATEGORIES.FRUITS, label: "Figs" },
  "grapefruit": { emoji: "🍊", category: INGREDIENT_CATEGORIES.FRUITS, label: "Grapefruit" },
  "grapes": { emoji: "🍇", category: INGREDIENT_CATEGORIES.FRUITS, label: "Grapes" },
  "guava": { emoji: "🥭", category: INGREDIENT_CATEGORIES.FRUITS, label: "Guava" },
  "kiwi": { emoji: "🥝", category: INGREDIENT_CATEGORIES.FRUITS, label: "Kiwi" },
  "lemon": { emoji: "🍋", category: INGREDIENT_CATEGORIES.FRUITS, label: "Lemon" },
  "lime": { emoji: "🍋", category: INGREDIENT_CATEGORIES.FRUITS, label: "Lime" },
  "lychee": { emoji: "🍈", category: INGREDIENT_CATEGORIES.FRUITS, label: "Lychee" },
  "mango": { emoji: "🥭", category: INGREDIENT_CATEGORIES.FRUITS, label: "Mango" },
  "melon": { emoji: "🍈", category: INGREDIENT_CATEGORIES.FRUITS, label: "Melon" },
  "nectarine": { emoji: "🍑", category: INGREDIENT_CATEGORIES.FRUITS, label: "Nectarine" },
  "orange": { emoji: "🍊", category: INGREDIENT_CATEGORIES.FRUITS, label: "Orange" },
  "papaya": { emoji: "🧡", category: INGREDIENT_CATEGORIES.FRUITS, label: "Papaya" },
  "passion fruit": { emoji: "💜", category: INGREDIENT_CATEGORIES.FRUITS, label: "Passion Fruit" },
  "peach": { emoji: "🍑", category: INGREDIENT_CATEGORIES.FRUITS, label: "Peach" },
  "pear": { emoji: "🍐", category: INGREDIENT_CATEGORIES.FRUITS, label: "Pear" },
  "pineapple": { emoji: "🍍", category: INGREDIENT_CATEGORIES.FRUITS, label: "Pineapple" },
  "plum": { emoji: "💜", category: INGREDIENT_CATEGORIES.FRUITS, label: "Plum" },
  "pomegranate": { emoji: "🍎", category: INGREDIENT_CATEGORIES.FRUITS, label: "Pomegranate" },
  "raisins": { emoji: "🍇", category: INGREDIENT_CATEGORIES.FRUITS, label: "Raisins" },
  "raspberries": { emoji: "🫐", category: INGREDIENT_CATEGORIES.FRUITS, label: "Raspberries" },
  "strawberries": { emoji: "🍓", category: INGREDIENT_CATEGORIES.FRUITS, label: "Strawberries" },
  "tangerine": { emoji: "🍊", category: INGREDIENT_CATEGORIES.FRUITS, label: "Tangerine" },
  "watermelon": { emoji: "🍉", category: INGREDIENT_CATEGORIES.FRUITS, label: "Watermelon" },

  // VEGETABLES
  "acorn squash": { emoji: "🎃", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Acorn Squash" },
  "alfalfa sprouts": { emoji: "🌱", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Alfalfa Sprouts" },
  "artichoke": { emoji: "🥬", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Artichoke" },
  "arugula": { emoji: "🥬", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Arugula" },
  "asparagus": { emoji: "🥒", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Asparagus" },
  "bell pepper": { emoji: "🫑", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Bell Pepper" },
  "bibb lettuce": { emoji: "🥬", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Bibb Lettuce" },
  "bok choy": { emoji: "🥬", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Bok Choy" },
  "broccoflower": { emoji: "🥦", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Broccoflower" },
  "broccoli": { emoji: "🥦", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Broccoli" },
  "broccolini": { emoji: "🥦", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Broccolini" },
  "burdock root": { emoji: "🥕", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Burdock Root" },
  "cabbage": { emoji: "🥬", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Cabbage" },
  "carrot": { emoji: "🥕", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Carrot" },
  "cauliflower": { emoji: "🥦", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Cauliflower" },
  "celery": { emoji: "🥬", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Celery" },
  "chard": { emoji: "🥬", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Chard" },
  "chives": { emoji: "🌿", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Chives" },
  "collard greens": { emoji: "🥬", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Collard Greens" },
  "corn": { emoji: "🌽", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Corn" },
  "cucumber": { emoji: "🥒", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Cucumber" },
  "eggplant": { emoji: "🍆", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Eggplant" },
  "endive": { emoji: "🥬", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Endive" },
  "fennel": { emoji: "🥬", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Fennel" },
  "garlic": { emoji: "🧄", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Garlic" },
  "ginger": { emoji: "🫚", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Ginger" },
  "green beans": { emoji: "🫛", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Green Beans" },
  "kale": { emoji: "🥬", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Kale" },
  "leek": { emoji: "🥬", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Leek" },
  "lettuce": { emoji: "🥬", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Lettuce" },
  "mushroom": { emoji: "🍄", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Mushroom" },
  "onion": { emoji: "🧅", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Onion" },
  "parsnip": { emoji: "🥕", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Parsnip" },
  "peas": { emoji: "🫛", category: INGREDIENT_CATEGORIES.LEGUMES, label: "Peas" },
  "potato": { emoji: "🥔", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Potato" },
  "pumpkin": { emoji: "🎃", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Pumpkin" },
  "radish": { emoji: "🌰", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Radish" },
  "scallion": { emoji: "🧅", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Scallion" },
  "shallot": { emoji: "🧅", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Shallot" },
  "spinach": { emoji: "🥬", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Spinach" },
  "squash": { emoji: "🎃", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Squash" },
  "sweet potato": { emoji: "🍠", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Sweet Potato" },
  "tomato": { emoji: "🍅", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Tomato" },
  "turnip": { emoji: "🥕", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Turnip" },
  "yam": { emoji: "🍠", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Yam" },
  "zucchini": { emoji: "🥒", category: INGREDIENT_CATEGORIES.VEGETABLES, label: "Zucchini" },

  // MEAT & POULTRY
  "antelope": { emoji: "🦌", category: INGREDIENT_CATEGORIES.MEAT_POULTRY, label: "Antelope" },
  "bacon": { emoji: "🥓", category: INGREDIENT_CATEGORIES.MEAT_POULTRY, label: "Bacon" },
  "beef": { emoji: "🥩", category: INGREDIENT_CATEGORIES.MEAT_POULTRY, label: "Beef" },
  "bison": { emoji: "🦬", category: INGREDIENT_CATEGORIES.MEAT_POULTRY, label: "Bison" },
  "boar": { emoji: "🐗", category: INGREDIENT_CATEGORIES.MEAT_POULTRY, label: "Boar" },
  "bologna": { emoji: "🌭", category: INGREDIENT_CATEGORIES.MEAT_POULTRY, label: "Bologna" },
  "bratwurst": { emoji: "🌭", category: INGREDIENT_CATEGORIES.MEAT_POULTRY, label: "Bratwurst" },
  "bresaola": { emoji: "🥩", category: INGREDIENT_CATEGORIES.MEAT_POULTRY, label: "Bresaola" },
  "brisket": { emoji: "🥩", category: INGREDIENT_CATEGORIES.MEAT_POULTRY, label: "Brisket" },
  "bundnerfleisch": { emoji: "🥩", category: INGREDIENT_CATEGORIES.MEAT_POULTRY, label: "Bundnerfleisch" },
  "chicken": { emoji: "🍗", category: INGREDIENT_CATEGORIES.MEAT_POULTRY, label: "Chicken" },
  "chorizo": { emoji: "🌭", category: INGREDIENT_CATEGORIES.MEAT_POULTRY, label: "Chorizo" },
  "duck": { emoji: "🦆", category: INGREDIENT_CATEGORIES.MEAT_POULTRY, label: "Duck" },
  "elk": { emoji: "🦌", category: INGREDIENT_CATEGORIES.MEAT_POULTRY, label: "Elk" },
  "goose": { emoji: "🦆", category: INGREDIENT_CATEGORIES.MEAT_POULTRY, label: "Goose" },
  "ham": { emoji: "🥓", category: INGREDIENT_CATEGORIES.MEAT_POULTRY, label: "Ham" },
  "hot dog": { emoji: "🌭", category: INGREDIENT_CATEGORIES.MEAT_POULTRY, label: "Hot Dog" },
  "lamb": { emoji: "🐑", category: INGREDIENT_CATEGORIES.MEAT_POULTRY, label: "Lamb" },
  "mutton": { emoji: "🐑", category: INGREDIENT_CATEGORIES.MEAT_POULTRY, label: "Mutton" },
  "pancetta": { emoji: "🥓", category: INGREDIENT_CATEGORIES.MEAT_POULTRY, label: "Pancetta" },
  "pork": { emoji: "🥩", category: INGREDIENT_CATEGORIES.MEAT_POULTRY, label: "Pork" },
  "prosciutto": { emoji: "🥓", category: INGREDIENT_CATEGORIES.MEAT_POULTRY, label: "Prosciutto" },
  "quail": { emoji: "🐦", category: INGREDIENT_CATEGORIES.MEAT_POULTRY, label: "Quail" },
  "rabbit": { emoji: "🐰", category: INGREDIENT_CATEGORIES.MEAT_POULTRY, label: "Rabbit" },
  "salami": { emoji: "🌭", category: INGREDIENT_CATEGORIES.MEAT_POULTRY, label: "Salami" },
  "sausage": { emoji: "🌭", category: INGREDIENT_CATEGORIES.MEAT_POULTRY, label: "Sausage" },
  "turkey": { emoji: "🦃", category: INGREDIENT_CATEGORIES.MEAT_POULTRY, label: "Turkey" },
  "veal": { emoji: "🥩", category: INGREDIENT_CATEGORIES.MEAT_POULTRY, label: "Veal" },
  "venison": { emoji: "🦌", category: INGREDIENT_CATEGORIES.MEAT_POULTRY, label: "Venison" },

  // SEAFOOD
  "ahi tuna": { emoji: "🐟", category: INGREDIENT_CATEGORIES.SEAFOOD, label: "Ahi Tuna" },
  "anchovies": { emoji: "🐟", category: INGREDIENT_CATEGORIES.SEAFOOD, label: "Anchovies" },
  "bacalao": { emoji: "🐟", category: INGREDIENT_CATEGORIES.SEAFOOD, label: "Bacalao" },
  "baccalà": { emoji: "🐟", category: INGREDIENT_CATEGORIES.SEAFOOD, label: "Baccalà" },
  "barramundi": { emoji: "🐟", category: INGREDIENT_CATEGORIES.SEAFOOD, label: "Barramundi" },
  "brisling sardines": { emoji: "🐟", category: INGREDIENT_CATEGORIES.SEAFOOD, label: "Brisling Sardines" },
  "calamari": { emoji: "🦑", category: INGREDIENT_CATEGORIES.SEAFOOD, label: "Calamari" },
  "caviar": { emoji: "🥚", category: INGREDIENT_CATEGORIES.SEAFOOD, label: "Caviar" },
  "clams": { emoji: "🦪", category: INGREDIENT_CATEGORIES.SEAFOOD, label: "Clams" },
  "cod": { emoji: "🐟", category: INGREDIENT_CATEGORIES.SEAFOOD, label: "Cod" },
  "crab": { emoji: "🦀", category: INGREDIENT_CATEGORIES.SEAFOOD, label: "Crab" },
  "crawfish": { emoji: "🦞", category: INGREDIENT_CATEGORIES.SEAFOOD, label: "Crawfish" },
  "fish": { emoji: "🐟", category: INGREDIENT_CATEGORIES.SEAFOOD, label: "Fish" },
  "halibut": { emoji: "🐟", category: INGREDIENT_CATEGORIES.SEAFOOD, label: "Halibut" },
  "herring": { emoji: "🐟", category: INGREDIENT_CATEGORIES.SEAFOOD, label: "Herring" },
  "lobster": { emoji: "🦞", category: INGREDIENT_CATEGORIES.SEAFOOD, label: "Lobster" },
  "mussels": { emoji: "🦪", category: INGREDIENT_CATEGORIES.SEAFOOD, label: "Mussels" },
  "octopus": { emoji: "🐙", category: INGREDIENT_CATEGORIES.SEAFOOD, label: "Octopus" },
  "oysters": { emoji: "🦪", category: INGREDIENT_CATEGORIES.SEAFOOD, label: "Oysters" },
  "salmon": { emoji: "🐟", category: INGREDIENT_CATEGORIES.SEAFOOD, label: "Salmon" },
  "sardines": { emoji: "🐟", category: INGREDIENT_CATEGORIES.SEAFOOD, label: "Sardines" },
  "scallops": { emoji: "🦪", category: INGREDIENT_CATEGORIES.SEAFOOD, label: "Scallops" },
  "shrimp": { emoji: "🦐", category: INGREDIENT_CATEGORIES.SEAFOOD, label: "Shrimp" },
  "squid": { emoji: "🦑", category: INGREDIENT_CATEGORIES.SEAFOOD, label: "Squid" },
  "tilapia": { emoji: "🐟", category: INGREDIENT_CATEGORIES.SEAFOOD, label: "Tilapia" },
  "trout": { emoji: "🐟", category: INGREDIENT_CATEGORIES.SEAFOOD, label: "Trout" },
  "tuna": { emoji: "🐟", category: INGREDIENT_CATEGORIES.SEAFOOD, label: "Tuna" },

  // DAIRY & EGGS
  "appenzeller": { emoji: "🧀", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Appenzeller" },
  "banon cheese": { emoji: "🧀", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Banon Cheese" },
  "brie": { emoji: "🧀", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Brie" },
  "burrata": { emoji: "🧀", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Burrata" },
  "butter": { emoji: "🧈", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Butter" },
  "buttercream": { emoji: "🧈", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Buttercream" },
  "buttermilk": { emoji: "🥛", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Buttermilk" },
  "caciotta": { emoji: "🧀", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Caciotta" },
  "camembert": { emoji: "🧀", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Camembert" },
  "cheddar": { emoji: "🧀", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Cheddar" },
  "cheese": { emoji: "🧀", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Cheese" },
  "cottage cheese": { emoji: "🧀", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Cottage Cheese" },
  "cream": { emoji: "🥛", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Cream" },
  "cream cheese": { emoji: "🧀", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Cream Cheese" },
  "crème fraîche": { emoji: "🥛", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Crème Fraîche" },
  "egg": { emoji: "🥚", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Egg" },
  "eggs": { emoji: "🥚", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Eggs" },
  "feta": { emoji: "🧀", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Feta" },
  "goat cheese": { emoji: "🧀", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Goat Cheese" },
  "gouda": { emoji: "🧀", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Gouda" },
  "gruyere": { emoji: "🧀", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Gruyere" },
  "ice cream": { emoji: "🍦", category: INGREDIENT_CATEGORIES.DESSERTS, label: "Ice Cream" },
  "mascarpone": { emoji: "🧀", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Mascarpone" },
  "milk": { emoji: "🥛", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Milk" },
  "mozzarella": { emoji: "🧀", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Mozzarella" },
  "parmesan": { emoji: "🧀", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Parmesan" },
  "ricotta": { emoji: "🧀", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Ricotta" },
  "sour cream": { emoji: "🥛", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Sour Cream" },
  "whipped cream": { emoji: "🥛", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Whipped Cream" },
  "yogurt": { emoji: "🥛", category: INGREDIENT_CATEGORIES.DAIRY_EGGS, label: "Yogurt" },

  // GRAINS & PASTA
  "acini di pepe": { emoji: "🍝", category: INGREDIENT_CATEGORIES.GRAINS_PASTA, label: "Acini Di Pepe" },
  "amaranth": { emoji: "🌾", category: INGREDIENT_CATEGORIES.GRAINS_PASTA, label: "Amaranth" },
  "angel hair": { emoji: "🍝", category: INGREDIENT_CATEGORIES.GRAINS_PASTA, label: "Angel Hair" },
  "barley": { emoji: "🌾", category: INGREDIENT_CATEGORIES.GRAINS_PASTA, label: "Barley" },
  "buckwheat": { emoji: "🌾", category: INGREDIENT_CATEGORIES.GRAINS_PASTA, label: "Buckwheat" },
  "bulgur": { emoji: "🌾", category: INGREDIENT_CATEGORIES.GRAINS_PASTA, label: "Bulgur" },
  "couscous": { emoji: "🌾", category: INGREDIENT_CATEGORIES.GRAINS_PASTA, label: "Couscous" },
  "farro": { emoji: "🌾", category: INGREDIENT_CATEGORIES.GRAINS_PASTA, label: "Farro" },
  "fettuccine": { emoji: "🍝", category: INGREDIENT_CATEGORIES.GRAINS_PASTA, label: "Fettuccine" },
  "linguine": { emoji: "🍝", category: INGREDIENT_CATEGORIES.GRAINS_PASTA, label: "Linguine" },
  "macaroni": { emoji: "🍝", category: INGREDIENT_CATEGORIES.GRAINS_PASTA, label: "Macaroni" },
  "noodles": { emoji: "🍜", category: INGREDIENT_CATEGORIES.GRAINS_PASTA, label: "Noodles" },
  "oats": { emoji: "🌾", category: INGREDIENT_CATEGORIES.GRAINS_PASTA, label: "Oats" },
  "orzo": { emoji: "🍝", category: INGREDIENT_CATEGORIES.GRAINS_PASTA, label: "Orzo" },
  "pasta": { emoji: "🍝", category: INGREDIENT_CATEGORIES.GRAINS_PASTA, label: "Pasta" },
  "penne": { emoji: "🍝", category: INGREDIENT_CATEGORIES.GRAINS_PASTA, label: "Penne" },
  "quinoa": { emoji: "🌾", category: INGREDIENT_CATEGORIES.GRAINS_PASTA, label: "Quinoa" },
  "rice": { emoji: "🍚", category: INGREDIENT_CATEGORIES.GRAINS_PASTA, label: "Rice" },
  "risotto": { emoji: "🍚", category: INGREDIENT_CATEGORIES.GRAINS_PASTA, label: "Risotto" },
  "spaghetti": { emoji: "🍝", category: INGREDIENT_CATEGORIES.GRAINS_PASTA, label: "Spaghetti" },
  "wheat": { emoji: "🌾", category: INGREDIENT_CATEGORIES.GRAINS_PASTA, label: "Wheat" },

  // SPICES & HERBS
  "achiote": { emoji: "🌶️", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Achiote" },
  "aleppo pepper": { emoji: "🌶️", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Aleppo Pepper" },
  "allspice": { emoji: "🧂", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Allspice" },
  "baharat": { emoji: "🧂", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Baharat" },
  "basil": { emoji: "🌿", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Basil" },
  "bay leaf": { emoji: "🌿", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Bay Leaf" },
  "black pepper": { emoji: "🧂", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Black Pepper" },
  "borage": { emoji: "🌿", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Borage" },
  "cacao": { emoji: "🍫", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Cacao" },
  "cardamom": { emoji: "🧂", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Cardamom" },
  "cayenne": { emoji: "🌶️", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Cayenne" },
  "chili": { emoji: "🌶️", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Chili" },
  "cilantro": { emoji: "🌿", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Cilantro" },
  "cinnamon": { emoji: "🧂", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Cinnamon" },
  "cloves": { emoji: "🧂", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Cloves" },
  "coriander": { emoji: "🌿", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Coriander" },
  "cumin": { emoji: "🧂", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Cumin" },
  "curry": { emoji: "🍛", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Curry" },
  "dill": { emoji: "🌿", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Dill" },
  "mint": { emoji: "🌿", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Mint" },
  "nutmeg": { emoji: "🧂", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Nutmeg" },
  "oregano": { emoji: "🌿", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Oregano" },
  "paprika": { emoji: "🌶️", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Paprika" },
  "parsley": { emoji: "🌿", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Parsley" },
  "pepper": { emoji: "🧂", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Pepper" },
  "rosemary": { emoji: "🌿", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Rosemary" },
  "saffron": { emoji: "🧂", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Saffron" },
  "sage": { emoji: "🌿", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Sage" },
  "salt": { emoji: "🧂", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Salt" },
  "tarragon": { emoji: "🌿", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Tarragon" },
  "thyme": { emoji: "🌿", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Thyme" },
  "turmeric": { emoji: "🧂", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Turmeric" },
  "vanilla": { emoji: "🍦", category: INGREDIENT_CATEGORIES.SPICES_HERBS, label: "Vanilla" },

  // BAKERY
  "baguette": { emoji: "🥖", category: INGREDIENT_CATEGORIES.BAKERY, label: "Baguette" },
  "biscotti": { emoji: "🍪", category: INGREDIENT_CATEGORIES.BAKERY, label: "Biscotti" },
  "bread": { emoji: "🍞", category: INGREDIENT_CATEGORIES.BAKERY, label: "Bread" },
  "breadsticks": { emoji: "🥖", category: INGREDIENT_CATEGORIES.BAKERY, label: "Breadsticks" },
  "brioche": { emoji: "🍞", category: INGREDIENT_CATEGORIES.BAKERY, label: "Brioche" },
  "croissant": { emoji: "🥐", category: INGREDIENT_CATEGORIES.BAKERY, label: "Croissant" },
  "flour": { emoji: "🌾", category: INGREDIENT_CATEGORIES.GRAINS_PASTA, label: "Flour" },
  "pita": { emoji: "🫓", category: INGREDIENT_CATEGORIES.BAKERY, label: "Pita" },
  "roll": { emoji: "🍞", category: INGREDIENT_CATEGORIES.BAKERY, label: "Roll" },
  "tortilla": { emoji: "🫓", category: INGREDIENT_CATEGORIES.BAKERY, label: "Tortilla" },

  // NUTS & SEEDS
  "almonds": { emoji: "🥜", category: INGREDIENT_CATEGORIES.NUTS_SEEDS, label: "Almonds" },
  "cashews": { emoji: "🥜", category: INGREDIENT_CATEGORIES.NUTS_SEEDS, label: "Cashews" },
  "chia seeds": { emoji: "🌰", category: INGREDIENT_CATEGORIES.NUTS_SEEDS, label: "Chia Seeds" },
  "coconut": { emoji: "🥥", category: INGREDIENT_CATEGORIES.NUTS_SEEDS, label: "Coconut" },
  "hazelnuts": { emoji: "🌰", category: INGREDIENT_CATEGORIES.NUTS_SEEDS, label: "Hazelnuts" },
  "peanuts": { emoji: "🥜", category: INGREDIENT_CATEGORIES.NUTS_SEEDS, label: "Peanuts" },
  "pecans": { emoji: "🌰", category: INGREDIENT_CATEGORIES.NUTS_SEEDS, label: "Pecans" },
  "pine nuts": { emoji: "🌰", category: INGREDIENT_CATEGORIES.NUTS_SEEDS, label: "Pine Nuts" },
  "pistachios": { emoji: "🥜", category: INGREDIENT_CATEGORIES.NUTS_SEEDS, label: "Pistachios" },
  "pumpkin seeds": { emoji: "🌰", category: INGREDIENT_CATEGORIES.NUTS_SEEDS, label: "Pumpkin Seeds" },
  "sesame": { emoji: "🌰", category: INGREDIENT_CATEGORIES.NUTS_SEEDS, label: "Sesame" },
  "sunflower seeds": { emoji: "🌻", category: INGREDIENT_CATEGORIES.NUTS_SEEDS, label: "Sunflower Seeds" },
  "walnuts": { emoji: "🌰", category: INGREDIENT_CATEGORIES.NUTS_SEEDS, label: "Walnuts" },

  // LEGUMES
  "aquafaba": { emoji: "🫘", category: INGREDIENT_CATEGORIES.LEGUMES, label: "Aquafaba" },
  "black beans": { emoji: "🫘", category: INGREDIENT_CATEGORIES.LEGUMES, label: "Black Beans" },
  "chickpeas": { emoji: "🫘", category: INGREDIENT_CATEGORIES.LEGUMES, label: "Chickpeas" },
  "lentils": { emoji: "🫘", category: INGREDIENT_CATEGORIES.LEGUMES, label: "Lentils" },
  "beans": { emoji: "🫘", category: INGREDIENT_CATEGORIES.LEGUMES, label: "Beans" },
  "kidney beans": { emoji: "🫘", category: INGREDIENT_CATEGORIES.LEGUMES, label: "Kidney Beans" },
  "lima beans": { emoji: "🫘", category: INGREDIENT_CATEGORIES.LEGUMES, label: "Lima Beans" },
  "soybeans": { emoji: "🫘", category: INGREDIENT_CATEGORIES.LEGUMES, label: "Soybeans" },
  "tofu": { emoji: "🧆", category: INGREDIENT_CATEGORIES.LEGUMES, label: "Tofu" },

  // BEVERAGES
  "amaretto": { emoji: "🍸", category: INGREDIENT_CATEGORIES.BEVERAGES, label: "Amaretto" },
  "amaro": { emoji: "🍸", category: INGREDIENT_CATEGORIES.BEVERAGES, label: "Amaro" },
  "anisette": { emoji: "🍸", category: INGREDIENT_CATEGORIES.BEVERAGES, label: "Anisette" },
  "armagnac": { emoji: "🥃", category: INGREDIENT_CATEGORIES.BEVERAGES, label: "Armagnac" },
  "beer": { emoji: "🍺", category: INGREDIENT_CATEGORIES.BEVERAGES, label: "Beer" },
  "benedictine": { emoji: "🍸", category: INGREDIENT_CATEGORIES.BEVERAGES, label: "Benedictine" },
  "bock beer": { emoji: "🍺", category: INGREDIENT_CATEGORIES.BEVERAGES, label: "Bock Beer" },
  "bourbon": { emoji: "🥃", category: INGREDIENT_CATEGORIES.BEVERAGES, label: "Bourbon" },
  "brandy": { emoji: "🥃", category: INGREDIENT_CATEGORIES.BEVERAGES, label: "Brandy" },
  "cabernet": { emoji: "🍷", category: INGREDIENT_CATEGORIES.BEVERAGES, label: "Cabernet" },
  "cachaca": { emoji: "🍹", category: INGREDIENT_CATEGORIES.BEVERAGES, label: "Cachaca" },
  "champagne": { emoji: "🍾", category: INGREDIENT_CATEGORIES.BEVERAGES, label: "Champagne" },
  "coffee": { emoji: "☕", category: INGREDIENT_CATEGORIES.BEVERAGES, label: "Coffee" },
  "gin": { emoji: "🍸", category: INGREDIENT_CATEGORIES.BEVERAGES, label: "Gin" },
  "rum": { emoji: "🍹", category: INGREDIENT_CATEGORIES.BEVERAGES, label: "Rum" },
  "tea": { emoji: "🍵", category: INGREDIENT_CATEGORIES.BEVERAGES, label: "Tea" },
  "tequila": { emoji: "🍹", category: INGREDIENT_CATEGORIES.BEVERAGES, label: "Tequila" },
  "vodka": { emoji: "🍸", category: INGREDIENT_CATEGORIES.BEVERAGES, label: "Vodka" },
  "whiskey": { emoji: "🥃", category: INGREDIENT_CATEGORIES.BEVERAGES, label: "Whiskey" },
  "wine": { emoji: "🍷", category: INGREDIENT_CATEGORIES.BEVERAGES, label: "Wine" },

  // CONDIMENTS & SAUCES
  "agave nectar": { emoji: "🍯", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Agave Nectar" },
  "agrodolce": { emoji: "🍯", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Agrodolce" },
  "ajvar": { emoji: "🫙", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Ajvar" },
  "amba": { emoji: "🫙", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Amba" },
  "apple cider vinegar": { emoji: "🍶", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Apple Cider Vinegar" },
  "balsamic vinegar": { emoji: "🍶", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Balsamic Vinegar" },
  "béarnaise": { emoji: "🫙", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Béarnaise" },
  "bouillon": { emoji: "🍲", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Bouillon" },
  "broth": { emoji: "🍲", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Broth" },
  "cajeta": { emoji: "🍯", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Cajeta" },
  "chutney": { emoji: "🫙", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Chutney" },
  "honey": { emoji: "🍯", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Honey" },
  "hot sauce": { emoji: "🌶️", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Hot Sauce" },
  "jam": { emoji: "🍓", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Jam" },
  "ketchup": { emoji: "🍅", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Ketchup" },
  "maple syrup": { emoji: "🍁", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Maple Syrup" },
  "mayonnaise": { emoji: "🥫", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Mayonnaise" },
  "mustard": { emoji: "🫙", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Mustard" },
  "pesto": { emoji: "🫙", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Pesto" },
  "salsa": { emoji: "🫙", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Salsa" },
  "soy sauce": { emoji: "🍶", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Soy Sauce" },
  "sriracha": { emoji: "🌶️", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Sriracha" },
  "sugar": { emoji: "🧂", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Sugar" },
  "brown sugar": { emoji: "🧂", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Brown Sugar" },
  "syrup": { emoji: "🍯", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Syrup" },
  "tahini": { emoji: "🫙", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Tahini" },
  "teriyaki": { emoji: "🍶", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Teriyaki" },
  "vinegar": { emoji: "🍶", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Vinegar" },
  "worcestershire": { emoji: "🍶", category: INGREDIENT_CATEGORIES.CONDIMENTS, label: "Worcestershire" },

  // OILS & FATS
  "coconut oil": { emoji: "🧈", category: INGREDIENT_CATEGORIES.OILS_FATS, label: "Coconut Oil" },
  "canola oil": { emoji: "🧈", category: INGREDIENT_CATEGORIES.OILS_FATS, label: "Canola Oil" },
  "sesame oil": { emoji: "🧈", category: INGREDIENT_CATEGORIES.OILS_FATS, label: "Sesame Oil" },
  "oil": { emoji: "🧈", category: INGREDIENT_CATEGORIES.OILS_FATS, label: "Oil" },
  "lard": { emoji: "🧈", category: INGREDIENT_CATEGORIES.OILS_FATS, label: "Lard" },

  // DESSERTS & SWEETS
  "baba au rhum": { emoji: "🍰", category: INGREDIENT_CATEGORIES.DESSERTS, label: "Baba Au Rhum" },
  "baklava": { emoji: "🍰", category: INGREDIENT_CATEGORIES.DESSERTS, label: "Baklava" },
  "bonbons": { emoji: "🍬", category: INGREDIENT_CATEGORIES.DESSERTS, label: "Bonbons" },
  "brownies": { emoji: "🍫", category: INGREDIENT_CATEGORIES.DESSERTS, label: "Brownies" },
  "bubblegum": { emoji: "🍬", category: INGREDIENT_CATEGORIES.DESSERTS, label: "Bubblegum" },
  "cake": { emoji: "🍰", category: INGREDIENT_CATEGORIES.DESSERTS, label: "Cake" },
  "candy": { emoji: "🍬", category: INGREDIENT_CATEGORIES.DESSERTS, label: "Candy" },
  "caramel": { emoji: "🍮", category: INGREDIENT_CATEGORIES.DESSERTS, label: "Caramel" },
  "chocolate": { emoji: "🍫", category: INGREDIENT_CATEGORIES.DESSERTS, label: "Chocolate" },
  "cookies": { emoji: "🍪", category: INGREDIENT_CATEGORIES.DESSERTS, label: "Cookies" },
  "custard": { emoji: "🍮", category: INGREDIENT_CATEGORIES.DESSERTS, label: "Custard" },
  "gelato": { emoji: "🍨", category: INGREDIENT_CATEGORIES.DESSERTS, label: "Gelato" },
  "pudding": { emoji: "🍮", category: INGREDIENT_CATEGORIES.DESSERTS, label: "Pudding" },

  // CANNED & PRESERVED
  "antipasto": { emoji: "🥫", category: INGREDIENT_CATEGORIES.CANNED, label: "Antipasto" },
  "aspic": { emoji: "🥫", category: INGREDIENT_CATEGORIES.CANNED, label: "Aspic" },
  "pickles": { emoji: "🥒", category: INGREDIENT_CATEGORIES.CANNED, label: "Pickles" },
  "olives": { emoji: "🫒", category: INGREDIENT_CATEGORIES.CANNED, label: "Olives" },

  // OTHER / MISC
  "bugles": { emoji: "🥨", category: INGREDIENT_CATEGORIES.OTHER, label: "Bugles" },
  "bruschetta": { emoji: "🍞", category: INGREDIENT_CATEGORIES.OTHER, label: "Bruschetta" },
  "borscht": { emoji: "🍲", category: INGREDIENT_CATEGORIES.OTHER, label: "Borscht" },
  "brasato": { emoji: "🍲", category: INGREDIENT_CATEGORIES.OTHER, label: "Brasato" },
};

/**
 * Helper function to get ingredient details with case-insensitive lookup
 * Returns fallback if ingredient not found
 */
export function getIngredientDetails(name: string): IngredientMetadata {
  const normalizedName = name.toLowerCase().trim();
  
  // Direct lookup
  if (INGREDIENT_METADATA[normalizedName]) {
    return INGREDIENT_METADATA[normalizedName];
  }
  
  // Fallback: generic food item
  return {
    emoji: "🥘",
    category: INGREDIENT_CATEGORIES.OTHER,
    label: name.charAt(0).toUpperCase() + name.slice(1)
  };
}

/**
 * Group ingredients by category
 */
export function groupIngredientsByCategory(ingredientNames: string[]): Record<string, string[]> {
  const grouped: Record<string, string[]> = {};
  
  ingredientNames.forEach(name => {
    const details = getIngredientDetails(name);
    if (!grouped[details.category]) {
      grouped[details.category] = [];
    }
    grouped[details.category].push(name);
  });
  
  return grouped;
}

/**
 * Sort categories alphabetically, but "Other" always last
 * Returns sorted array of category names
 */
export function sortCategories(categories: string[]): string[] {
  const otherCategory = categories.find(cat => {
    const lowerCat = cat.toLowerCase().trim();
    return (
      cat === INGREDIENT_CATEGORIES.OTHER ||
      lowerCat === 'other' ||
      lowerCat === 'diğer' ||
      lowerCat.includes('other') ||
      lowerCat.includes('diğer')
    );
  });
  
  const nonOtherCategories = categories.filter(cat => {
    if (!otherCategory) return true;
    const lowerCat = cat.toLowerCase().trim();
    const lowerOther = otherCategory.toLowerCase().trim();
    return cat !== otherCategory && lowerCat !== lowerOther;
  });
  
  // Sort non-"Other" categories alphabetically
  nonOtherCategories.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
  
  // FORCE "Other" to be the very last category
  const result = [...nonOtherCategories];
  if (otherCategory) {
    result.push(otherCategory);
  }
  
  return result;
}

