import { Game } from "@app-types/index";

export const games: Game[] = [
  {
    id: "1",
    title: "Super Hero Tycoon",
    developer: "2Play",
    category: "Simulation",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=512&h=384&fit=crop",
  },
  {
    id: "2",
    title: "Daily Solitaire Mahjong Classic",
    developer: "SOFTGAMES – Mobile Entertainment",
    category: "Puzzle",
    image:
      "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=512&h=384&fit=crop",
  },
  {
    id: "3",
    title: "Stick War Saga",
    developer: "YAD.Com",
    category: "Strategy",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=512&h=384&fit=crop",
  },
  {
    id: "4",
    title: "Xmas Hexa Sort",
    developer: "GameBerry Studio",
    category: "Puzzle",
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=512&h=384&fit=crop",
  },
  {
    id: "5",
    title: "Moto Traffic Rider",
    developer: "Fuego! Games",
    category: "Racing",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=512&h=384&fit=crop",
  },
  {
    id: "6",
    title: "Snow Ball Racing Multiplayer",
    developer: "2Play",
    category: "Racing",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=512&h=384&fit=crop",
  },
  {
    id: "7",
    title: "Travel Story Match",
    developer: "SOFTGAMES – Mobile Entertainment",
    category: "Puzzle",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=512&h=384&fit=crop",
  },
  {
    id: "8",
    title: "Backrooms",
    developer: "2Play",
    category: "Adventure",
    image:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=512&h=384&fit=crop",
  },
  {
    id: "9",
    title: "Dino Game",
    developer: "CursoraLabs",
    category: "Casual",
    image:
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=512&h=384&fit=crop",
  },
  {
    id: "10",
    title: "Steal Brainrot Duel",
    developer: "gameVgames",
    category: "Action",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=512&h=384&fit=crop",
  },
  {
    id: "11",
    title: "Hypermarket 3D Store Cashier",
    developer: "GameVision",
    category: "Simulation",
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=512&h=384&fit=crop",
  },
  {
    id: "12",
    title: "Zombie Outbreak Arena",
    developer: "SpookyStudios",
    category: "Action",
    image:
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=512&h=384&fit=crop",
  },
];

export const categories: string[] = Array.from(
  new Set(games.map((game) => game.category))
);
