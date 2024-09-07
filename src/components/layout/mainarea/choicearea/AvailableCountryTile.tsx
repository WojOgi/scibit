type CountryTileProps = {
  listOfSelectedCountries: string[];
  countryName: string;
  setListOfSelectedCountries: (list: string[]) => void;
};

export default function AvailableCountryTile({
  listOfSelectedCountries,
  countryName,
  setListOfSelectedCountries,
}: CountryTileProps) {
  function handleClick() {
    setListOfSelectedCountries([...listOfSelectedCountries, countryName]);
  }

  return (
    <span className="country-tile" onClick={handleClick}>
      {countryName}
    </span>
  );
}
