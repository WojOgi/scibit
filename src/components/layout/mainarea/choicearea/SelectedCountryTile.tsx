import {
  formatNumberCompact,
  useCountriesDataContext,
} from "../../../../utils/utils.ts";

type CountryTileProps = {
  countryName: string;
};

export default function SelectedCountryTile({ countryName }: CountryTileProps) {
  const context = useCountriesDataContext();

  function handleClick() {
    if (context.listOfSelectedCountries.length > 1) {
      context.setListOfSelectedCountries(
        context.listOfSelectedCountries.filter(
          (country) => country !== countryName,
        ),
      );
    }
  }

  const population = context.data_CountriesCopy.find(
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
