// src/pages/Home/data.ts
import King_Bed from "@common/assets/product/king-size.png";
import Sofa_Bed from "@common/assets/product/sofa-beds.png";
import Office_Table from "@common/assets/product/office-study-tables.png";
import TV_Unit from "@common/assets/product/tv-units.png";
import Dressing_Table from "@common/assets/product/dressing-tables.png";
import Chair from "@common/assets/product/chair.png";
import Side_Table from "@common/assets/product/side-table.png";
import Shoe_Cabinet from "@common/assets/product/shoe-cabinet.png";
import Drawers from "@common/assets/product/drawer.png";
import Steel_Window_Slider from "@common/assets/product/steel-window-slider.png";
import Kitchen_Trolley from "@common/assets/product/kitchen-trolley.png";
import King_Mattress from "@common/assets/product/king-mattresse.png";
import Collapsible_Wardrobe from "@common/assets/product/collapsible-wardrobe.png";
export type ProductCategory =
  | "king-beds"
  | "sofa-beds"
  | "office-study-tables"
  | "tv-units"
  | "dressing-tables"
  | "chairs"
  | "side-tables"
  | "shoe-cabinets"
  | "drawers"
  | "steel-window-sliders"
  | "kitchen-trolleys"
  | "king-mattresses"
  | "collapsible-wardrobes";

export interface Product {
  id: number;
  slug: ProductCategory;
  name: string;
  minPrice: number;
  maxPrice: number;
  description: string;
  imageUrl: string;
}

export const products: Product[] = [
  {
    id: 1,
    slug: "king-beds",
    name: "King Beds",
    minPrice: 18000,
    maxPrice: 45000,
    description: "Premium king-size beds with storage and modern finishes.",
    imageUrl: King_Bed,
  },
  {
    id: 2,
    slug: "sofa-beds",
    name: "Sofa Beds",
    minPrice: 12000,
    maxPrice: 30000,
    description: "Space-saving sofa beds perfect for living rooms and guests.",
    imageUrl: Sofa_Bed,
  },
  {
    id: 3,
    slug: "office-study-tables",
    name: "Office & Study Tables",
    minPrice: 5000,
    maxPrice: 22000,
    description: "Ergonomic tables designed for office and study use.",
    imageUrl: Office_Table,
  },
  {
    id: 4,
    slug: "tv-units",
    name: "TV Entertainment Units",
    minPrice: 7000,
    maxPrice: 28000,
    description: "Modern TV units with shelves and cable management.",
    imageUrl: TV_Unit,
  },
  {
    id: 5,
    slug: "dressing-tables",
    name: "Dressing Tables",
    minPrice: 6000,
    maxPrice: 20000,
    description: "Stylish dressing tables with mirrors and storage.",
    imageUrl: Dressing_Table,
  },
  {
    id: 6,
    slug: "chairs",
    name: "Chairs",
    minPrice: 1500,
    maxPrice: 8000,
    description: "Comfortable chairs for dining, study, and office.",
    imageUrl: Chair,
  },
  {
    id: 7,
    slug: "side-tables",
    name: "Side Tables",
    minPrice: 2000,
    maxPrice: 9000,
    description: "Compact side tables to complement your seating.",
    imageUrl: Side_Table,
  },
  {
    id: 8,
    slug: "shoe-cabinets",
    name: "Shoe Cabinets",
    minPrice: 4000,
    maxPrice: 15000,
    description: "Organized shoe storage for entrance and hallways.",
    imageUrl: Shoe_Cabinet,
  },
  {
    id: 9,
    slug: "drawers",
    name: "Drawers",
    minPrice: 3000,
    maxPrice: 12000,
    description: "Multi-purpose drawer units for clothes and documents.",
    imageUrl: Drawers,
  },
  {
    id: 10,
    slug: "steel-window-sliders",
    name: "Steel Window Sliders",
    minPrice: 7000,
    maxPrice: 25000,
    description: "Durable steel window sliders with smooth operation.",
    imageUrl: Steel_Window_Slider,
  },
  {
    id: 11,
    slug: "kitchen-trolleys",
    name: "Kitchen Trolleys",
    minPrice: 5000,
    maxPrice: 18000,
    description: "Portable kitchen trolleys with shelves and drawers.",
    imageUrl: Kitchen_Trolley,
  },
  {
    id: 12,
    slug: "king-mattresses",
    name: "King Mattresses",
    minPrice: 9000,
    maxPrice: 35000,
    description: "Comfortable king-size mattresses with multiple firmness options.",
    imageUrl: King_Mattress,
  },
  {
    id: 13,
    slug: "collapsible-wardrobes",
    name: "Collapsible Wardrobes",
    minPrice: 4000,
    maxPrice: 12000,
    description: "Easy-to-assemble collapsible wardrobes for flexible storage.",
    imageUrl: Collapsible_Wardrobe,
  },
];
