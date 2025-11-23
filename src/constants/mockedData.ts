import { Game } from "@app-types/index";

export const games: Game[] = [
  {
    id: "1",
    title: "Super Hero Tycoon",
    developer: "2Play",
    category: "Simulation",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=512&h=384&fit=crop",
    iframeURL:
      "https://html5.gamedistribution.com/d5234914629a4ec997cfda65b2ae24ea/?gd_sdk_referrer_url=https://gamedistribution.com/games/super-hero-tycoon/",
  },
  {
    id: "2",
    title: "Daily Solitaire Mahjong Classic",
    developer: "SOFTGAMES – Mobile Entertainment",
    category: "Puzzle",
    image:
      "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=512&h=384&fit=crop",
    iframeURL:
      "https://html5.gamedistribution.com/e5e957d23d1247b48a4a9a315fc96249/?gd_sdk_referrer_url=https://gamedistribution.com/games/daily-solitaire-mahjong-classic/",
  },
  {
    id: "3",
    title: "Stick War Saga",
    developer: "YAD.Com",
    category: "Strategy",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=512&h=384&fit=crop",
    iframeURL:
      "https://html5.gamedistribution.com/334714f0c010454faf2248793ba893be/?gd_sdk_referrer_url=https://gamedistribution.com/games/stick-war-saga/",
  },
  {
    id: "4",
    title: "Xmas Hexa Sort",
    developer: "GameBerry Studio",
    category: "Puzzle",
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=512&h=384&fit=crop",
    iframeURL:
      "https://html5.gamedistribution.com/c1015c9b79ba490a8cd1c3943ed7bae2/?gd_sdk_referrer_url=https://gamedistribution.com/games/xmas-hexa-sort/",
  },
  {
    id: "5",
    title: "Moto Traffic Rider",
    developer: "Fuego! Games",
    category: "Racing",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=512&h=384&fit=crop",
    iframeURL:
      "https://html5.gamedistribution.com/9bde41f232834eff9ea81554ecee8279/?gd_sdk_referrer_url=https://gamedistribution.com/games/moto-traffic-rider/",
  },
  {
    id: "6",
    title: "Snow Ball Racing Multiplayer",
    developer: "2Play",
    category: "Racing",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=512&h=384&fit=crop",
    iframeURL:
      "https://html5.gamedistribution.com/061faa6d2cd34e89a507fd435d040946/?gd_sdk_referrer_url=https://gamedistribution.com/games/snow-ball-racing-mutliplayer/",
  },
  {
    id: "7",
    title: "Travel Story Match",
    developer: "SOFTGAMES – Mobile Entertainment",
    category: "Puzzle",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=512&h=384&fit=crop",
    iframeURL:
      "https://html5.gamedistribution.com/7916f8df34a64ee58e183d71815bdf71/?gd_sdk_referrer_url=https://gamedistribution.com/games/travel-story-match/",
  },
  {
    id: "8",
    title: "Backrooms",
    developer: "2Play",
    category: "Adventure",
    image:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=512&h=384&fit=crop",
    iframeURL:
      "https://html5.gamedistribution.com/2eb8260c11ae4628926d434548a81ec5/?gd_sdk_referrer_url=https://gamedistribution.com/games/backrooms/",
  },
  {
    id: "9",
    title: "Dino Game",
    developer: "CursoraLabs",
    category: "Casual",
    image:
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=512&h=384&fit=crop",
    iframeURL:
      "https://html5.gamedistribution.com/b7d13c213d1145b6a7b9c16d85937117/?gd_sdk_referrer_url=https://gamedistribution.com/games/dino-game/",
  },
  {
    id: "10",
    title: "Steal Brainrot Duel",
    developer: "gameVgames",
    category: "Action",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=512&h=384&fit=crop",
    iframeURL:
      "https://html5.gamedistribution.com/31628f3b940847189cb0cea3d943abe0/?gd_sdk_referrer_url=https://gamedistribution.com/games/steal-brainrot-duel/",
  },
  {
    id: "11",
    title: "Hypermarket 3D Store Cashier",
    developer: "GameVision",
    category: "Simulation",
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=512&h=384&fit=crop",
    iframeURL:
      "https://html5.gamedistribution.com/32ce4093ac7d48db80abc6befccfca46/?gd_sdk_referrer_url=https://gamedistribution.com/games/hypermarket/",
  },
  {
    id: "12",
    title: "Zombie Outbreak Arena",
    developer: "SpookyStudios",
    category: "Action",
    image:
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=512&h=384&fit=crop",
    iframeURL:
      "https://html5.gamedistribution.com/6d6b3cb66450477a9b2d6df2f7372635/?gd_sdk_referrer_url=https://gamedistribution.com/games/zombie-outbreak-survive/",
  },
];

export const categories: string[] = Array.from(
  new Set(games.map((game) => game.category))
);
