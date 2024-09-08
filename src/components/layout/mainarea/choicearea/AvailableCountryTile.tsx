import {
  data_CountriesT,
  formatNumberCompact,
} from "../../../../utils/utils.ts";

type CountryTileProps = {
  data_CountriesCopy: data_CountriesT;
  listOfSelectedCountries: string[];
  countryName: string;
  setListOfSelectedCountries: (list: string[]) => void;
};

export default function AvailableCountryTile({
  data_CountriesCopy,
  listOfSelectedCountries,
  countryName,
  setListOfSelectedCountries,
}: CountryTileProps) {
  function handleClick() {
    setListOfSelectedCountries([...listOfSelectedCountries, countryName]);
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
