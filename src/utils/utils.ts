export const colors = [
  "#d81414", // Red
  "#27ae60", // Emerald
  "#ff7300", // Orange
  "#8884d8", // Light Purple
  "#1454d8", // Blue
  "#82ca9d", // Green
  "#d84d8b", // Pink
  "#54d814", // Bright Green
  "#d8a648", // Gold
  "#4814d8", // Dark Purple
  "#14d8b3", // Teal
  "#14d860", // Mint Green
  "#d8d814", // Yellow
  "#8e44ad", // Purple
  "#2980b9", // Deep Blue
  "#e67e22", // Carrot Orange
  "#e74c3c", // Alizarin Red
  "#f39c12", // Sunflower Yellow
  "#2ecc71", // Bright Green
  "#3498db", // Sky Blue
  "#9b59b6", // Amethyst
  "#f1c40f", // Bright Yellow
  "#e84393", // Raspberry Pink
  "#fdcb6e", // Light Orange
  "#00b894", // Dark Teal
  "#6c5ce7", // Light Indigo
  "#fd79a8", // Soft Pink
  "#fab1a0", // Light Peach
  "#74b9ff", // Soft Blue
  "#a29bfe", // Soft Purple
  "#ffeaa7", // Light Yellow
  "#81ecec", // Soft Teal
];

export const presets = [
  {
    presetName: "Richest countries by total GDP",
    countryNames: ["USA", "China", "Germany", "Japan", "India"],
  },
  {
    presetName: "Most populous countries",
    countryNames: ["China", "India", "USA", "Indonesia", "Pakistan"],
  },
  {
    presetName: "Richest middle eastern countries",
    countryNames: ["Qatar", "UAE", "Kuwait", "Saudi Arabia", "Bahrain"],
  },
  {
    presetName: "Most populous African countries",
    countryNames: ["Nigeria", "Ethiopia", "Egypt", "Tanzania"],
  },
  {
    presetName: "Most populous European countries",
    countryNames: ["Germany", "France", "UK", "Italy", "Spain"],
  },
  {
    presetName: "Most populous Asian countries",
    countryNames: ["China", "India", "Indonesia", "Pakistan", "Bangladesh"],
  },
  {
    presetName: "Most populous American countries",
    countryNames: ["USA", "Brazil", "Mexico", "Colombia", "Argentina"],
  },
  {
    presetName: "Scandinavian countries",
    countryNames: ["Sweden", "Norway", "Denmark", "Finland", "Iceland"],
  },
  {
    presetName: "Countries with high inflation",
    countryNames: ["Venezuela", "Sudan", "Lebanon", "Argentina", "Turkey"],
  },
  {
    presetName: "Countries with high unemployment",
    countryNames: ["South Africa", "Spain", "Greece", "Italy", "Turkey"],
  },
  {
    presetName: "Countries where Bitcoin is banned or heavily restricted",
    countryNames: [
      "Afghanistan",
      "Algeria",
      "Bangladesh",
      "Bolivia",
      "Pakistan",
      "Iran",
    ],
  },
];

export type data_CountriesT = {
  countryName: string;
  population: number;
  toBePlotted: boolean;
  publicationsNumbers: { year: number; publications: number }[];
}[];

export function formatNumberCompact(number: number | undefined): string {
  if (number === undefined) return "N/A";
  const absNumber = Math.abs(number);

  if (absNumber < 1000) {
    return number.toFixed(1);
  } else if (absNumber < 1000000) {
    return (absNumber / 1000).toFixed(1) + " k";
  } else if (absNumber < 1000000000) {
    return (absNumber / 1000000).toFixed(1) + " mln";
  } else {
    return (absNumber / 1000000000).toFixed(1) + " bln";
  }
}
