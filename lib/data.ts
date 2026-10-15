export type Character = {
  id: number;
  name: string;
  species: string;
  status: string;
  origin: string;
  dimension: string;
  classification: string;
};

export type Location = {
  name: string;
  type: string;
  dimension: string;
  coordinates: string;
  description: string;
  variant: string;
};

export type Episode = {
  code: string;
  title: string;
  airDate: string;
  description: string;
  variant: string;
};

export const characters: Character[] = [
  {
    id: 1,
    name: "Rick Sanchez",
    species: "Human",
    status: "Alive",
    origin: "Earth (C-137)",
    dimension: "C-137",
    classification: "Prime anomaly",
  },
  {
    id: 2,
    name: "Morty Smith",
    species: "Human",
    status: "Alive",
    origin: "Earth (C-137)",
    dimension: "C-137",
    classification: "Reluctant sidekick",
  },
  {
    id: 3,
    name: "Summer Smith",
    species: "Human",
    status: "Alive",
    origin: "Earth (C-131)",
    dimension: "C-131",
    classification: "Field operative",
  },
  {
    id: 4,
    name: "Beth Smith",
    species: "Human",
    status: "Alive",
    origin: "Earth (C-131)",
    dimension: "C-131",
    classification: "Equine surgeon",
  },
  {
    id: 5,
    name: "Jerry Smith",
    species: "Human",
    status: "Alive",
    origin: "Earth (C-131)",
    dimension: "C-131",
    classification: "Unlicensed beekeeper",
  },
  {
    id: 47,
    name: "Birdperson",
    species: "Bird-person",
    status: "Alive",
    origin: "Bird World",
    dimension: "Unknown",
    classification: "Resistance leader",
  },
  {
    id: 118,
    name: "Evil Morty",
    species: "Human",
    status: "Alive",
    origin: "Unknown",
    dimension: "Unknown",
    classification: "Citadel politician",
  },
  {
    id: 222,
    name: "Squanchy",
    species: "Cat-person",
    status: "Alive",
    origin: "Unknown",
    dimension: "Unknown",
    classification: "Resistance fighter",
  },
  {
    id: 242,
    name: "Mr. Meeseeks",
    species: "Meeseeks",
    status: "Unknown",
    origin: "Meeseeks Box",
    dimension: "Unknown",
    classification: "Temporary life-form",
  },
  {
    id: 244,
    name: "Mr. Poopybutthole",
    species: "Poopybutthole",
    status: "Alive",
    origin: "Unknown",
    dimension: "Unknown",
    classification: "Family friend",
  },
  {
    id: 265,
    name: "Pickle Rick",
    species: "Pickle",
    status: "Alive",
    origin: "Earth (C-131)",
    dimension: "C-131",
    classification: "Self-made pickle",
  },
];

export const locations: Location[] = [
  {
    name: "Earth (C-137)",
    type: "Planet",
    dimension: "C-137",
    coordinates: "40.7128° N / 74.0060° W",
    description: "The original home dimension. Mostly abandoned. Still radioactive.",
    variant: "earth",
  },
  {
    name: "The Citadel",
    type: "Artificial structure",
    dimension: "Citadel dimension",
    coordinates: "GALACTIC SECTOR 08",
    description: "A sprawling city-state built by Ricks, for Ricks. Mortys included.",
    variant: "citadel",
  },
  {
    name: "Anatomy Park",
    type: "Theme park",
    dimension: "C-137",
    coordinates: "INTERNAL / SUBLEVEL 03",
    description: "A microscopic amusement park with a very questionable safety record.",
    variant: "anatomy",
  },
  {
    name: "Gazorpazorp",
    type: "Planet",
    dimension: "Unknown",
    coordinates: "OUTER RIM / SECTOR 12",
    description: "A hostile world split between its surface and underground societies.",
    variant: "gazorpazorp",
  },
];

export const episodes: Episode[] = [
  {
    code: "S01 · E01",
    title: "Pilot",
    airDate: "December 2, 2013",
    description:
      "Rick moves in with his daughter’s family and takes Morty on a dangerous trip to another dimension.",
    variant: "portal",
  },
  {
    code: "S01 · E02",
    title: "Lawnmower Dog",
    airDate: "December 9, 2013",
    description:
      "A dream-infiltration scheme and a very smart dog put the Smith household on edge.",
    variant: "dream",
  },
  {
    code: "S01 · E03",
    title: "Anatomy Park",
    airDate: "December 16, 2013",
    description:
      "Morty gets a tiny tour of Rick’s newest attraction, built inside a very unlucky man.",
    variant: "anatomy",
  },
  {
    code: "S01 · E04",
    title: "M. Night Shaym-Aliens!",
    airDate: "January 13, 2014",
    description:
      "Rick tries to break out of a simulation before its alien operators get what they came for.",
    variant: "simulation",
  },
  {
    code: "S01 · E05",
    title: "Meeseeks and Destroy",
    airDate: "January 20, 2014",
    description:
      "The family meets a helpful blue box while Morty leads his own questionable adventure.",
    variant: "meeseeks",
  },
  {
    code: "S01 · E06",
    title: "Rick Potion #9",
    airDate: "January 27, 2014",
    description:
      "A love potion goes wrong, leaving Rick and Morty searching for a new place to call home.",
    variant: "dimension",
  },
];
