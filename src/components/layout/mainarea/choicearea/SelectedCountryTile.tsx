import {
  data_CountriesT,
  formatNumberCompact,
} from "../../../../utils/utils.ts";

type CountryTileProps = {
  data_CountriesCopy: data_CountriesT;
  countryName: string;
  listOfSelectedCountries: string[];
  setListOfSelectedCountries: (list: string[]) => void;
};

export default function SelectedCountryTile({
  data_CountriesCopy,
  countryName,
  listOfSelectedCountries,
  setListOfSelectedCountries,
}: CountryTileProps) {
  function handleClick() {
    if (listOfSelectedCountries.length > 1) {
      setListOfSelectedCountries(
        listOfSelectedCountries.filter((country) => country !== countryName),
      );
    }
  }

  const population = data_CountriesCopy.find(
    (country) => country.countryName === countryName,
  )?.population;

  return (
    <span className="country-tile" onClick={handleClick}>
      <div>
        <b>{countryName}</b>
      </div>
      <div>{formatNumberCompact(population)}</div>
    </span>
  );
}
