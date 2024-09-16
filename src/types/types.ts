export type data_CountriesT = {
  countryName: string;
  population: number;
  toBePlotted: boolean;
  publicationsNumbers: { year: number; publications: number }[];
}[];

export type yearObjType = {
  year: number;
  [key: string]: number;
};

export type MyLineChartProps = {
  dataToPlot: {
    countryName: string;
    population: number;
    toBePlotted: boolean;
    publicationsNumbers: {
      year: number;
      publications: number;
    }[];
  }[];
};

export type ChoiceAreaProps = {
  sumOfPopulations: number;
  data_CountriesCopy: data_CountriesT;
  listOfAllCountriesNames: string[];
  listOfSelectedCountries: string[];
  presets: { presetName: string; countryNames: string[] }[];
  setListOfSelectedCountries: (listOfSelectedCountries: string[]) => void;
};
