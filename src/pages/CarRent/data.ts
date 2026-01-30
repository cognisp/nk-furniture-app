import Swift from "@common/assets/car/swift.png";
import Sedan from "@common/assets/car/CEV_SEDAN.webp";
import SUV from "@common/assets/car/suv_fortuner.jpeg";

export type Car = {
  id: number;
  name: string;
  seats: number;
  pricePerDay: number;
  img: string;
};

export const cars: Car[] = [
  { id: 1, name: "Hatchback - Swift", seats: 4, pricePerDay: 2000, img: Swift },
  {
    id: 2,
    name: "Sedan - City",
    seats: 4,
    pricePerDay: 2800,
    img: Sedan,
  },
  {
    id: 3,
    name: "SUV - Fortuner",
    seats: 7,
    pricePerDay: 7000,
    img: SUV,
  },
];
