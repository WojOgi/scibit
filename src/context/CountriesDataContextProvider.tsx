import React, { createContext, useState } from "react";
import { data_CountriesT } from "../types/types.ts";
import { data_CountriesMaster } from "../sourceData/sourceData.ts";
import {
  calculateSumOfPopulations,
  createSortedListOfAllCountriesNames,
} from "../utils/utils.ts";

type CountriesDataContextProviderProps = {
  children: React.ReactNode;
};
export type TCountriesDataContext = {
  data_CountriesCopy: data_CountriesT;
  listOfAllCountriesNames: string[];
  listOfSelectedCountries: string[];
  setListOfSelectedCountries: React.Dispatch<React.SetStateAction<string[]>>;
  dataPreparedForPlotting: data_CountriesT;
  sumOfPopulations: number;
};

export const CountriesDataContext = createContext<TCountriesDataContext | null>(
  null,
);

export default function CountriesDataContextProvider({
  children,
}: CountriesDataContextProviderProps) {
  const data_CountriesCopy: data_CountriesT = [...data_CountriesMaster];

  const listOfAllCountriesNames =
    createSortedListOfAllCountriesNames(data_CountriesCopy);

  const [listOfSelectedCountries, setListOfSelectedCountries] = useState([
    "All Countries",
  ]);

  const dataPreparedForPlotting = data_CountriesCopy
    .map((country) => ({
      ...country,
      toBePlotted: listOfSelectedCountries.includes(country.countryName),
    }))
    .filter((country) => country.toBePlotted);

  const sumOfPopulations = calculateSumOfPopulations(dataPreparedForPlotting);

  return (
    <CountriesDataContext.Provider
      value={{
        data_CountriesCopy,
        listOfAllCountriesNames,
        listOfSelectedCountries,
        setListOfSelectedCountries,
        dataPreparedForPlotting,
        sumOfPopulations,
      }}
    >
      {children}
    </CountriesDataContext.Provider>
  );
}
