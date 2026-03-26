export type LogoItem = {
  name: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  offsetY?: number;
};

export const logos: LogoItem[] = [
  { name: "Bazaar", src: "/images/logos/madklubben/bazaar_logo.png", alt: "Bazaar", width: 132, height: 28 },
  { name: "Bermuda", src: "/images/logos/madklubben/bermuda_logo.png", alt: "Bermuda", width: 168, height: 30 },
  { name: "Bistro Royal", src: "/images/logos/madklubben/bistroroyal_logo.png", alt: "Bistro Royal", width: 220, height: 26, offsetY: -1 },
  { name: "Clementine", src: "/images/logos/madklubben/clementine_logo.png", alt: "Clementine", width: 250, height: 42, offsetY: 1 },
  { name: "Food Club", src: "/images/logos/madklubben/foodclub_logo.png", alt: "Food Club", width: 220, height: 44 },
  { name: "Frankies", src: "/images/logos/madklubben/frankies_logo.svg", alt: "Frankies", width: 190, height: 34 },
  { name: "Hanzo", src: "/images/logos/madklubben/hanzo_logo.png", alt: "Hanzo", width: 188, height: 42 },
  { name: "Lupo", src: "/images/logos/madklubben/lupo_logo.png", alt: "Lupo", width: 160, height: 150, offsetY: 1 },
  { name: "Madklubben", src: "/images/logos/madklubben/madklubben_logo.png", alt: "Madklubben", width: 220, height: 34 },
  { name: "Pulino", src: "/images/logos/madklubben/pulino_logo.png", alt: "Pulino", width: 160, height: 150, offsetY: 1 },
  { name: "Roberta", src: "/images/logos/madklubben/roberta_logo.png", alt: "Roberta", width: 164, height: 42 },
  { name: "Thali", src: "/images/logos/madklubben/thali_logo.png", alt: "Thali", width: 170, height: 40 },
  { name: "Tonys", src: "/images/logos/madklubben/tonys_logo.png", alt: "Tonys", width: 178, height: 50, offsetY: 2 },
  { name: "Betzler", src: "/images/logos/betzler_logo.svg", alt: "Betzler", width: 280, height: 48 },
  { name: "Idura", src: "/images/logos/idura_logo.svg", alt: "Idura", width: 180, height: 44 },
];
