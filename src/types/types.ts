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
