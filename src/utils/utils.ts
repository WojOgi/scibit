import { data_CountriesT } from "../types/types.ts";

export function calculateSumOfPopulations(
  dataToPlot: {
    toBePlotted: boolean;
    countryName: string;
    publicationsNumbers: { year: number; publications: number }[];
    population: number;
  }[],
) {
  return dataToPlot.reduce((acc, country) => acc + country.population, 0);
}

export function createSortedListOfAllCountriesNames(
  data_CountriesCopy: data_CountriesT,
) {
  const listOfAllCountriesNames = data_CountriesCopy
    .map((country) => country.countryName)
    .sort((a, b) => a.localeCompare(b));

  const specificElementIndex = listOfAllCountriesNames.indexOf("All Countries");

  if (specificElementIndex !== -1) {
    // Remove the specific element
    const specificElement = listOfAllCountriesNames.splice(
      specificElementIndex,
      1,
    )[0];

    // Unshift the specific element back to the beginning
    listOfAllCountriesNames.unshift(specificElement);
  }

  return listOfAllCountriesNames;
}

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
