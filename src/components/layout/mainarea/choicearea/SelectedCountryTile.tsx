type CountryTileProps = {
  countryName: string;
  listOfSelectedCountries: string[];
  setListOfSelectedCountries: (list: string[]) => void;
};

export default function SelectedCountryTile({
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

  return (
    <span className="country-tile" onClick={handleClick}>
      {countryName}
    </span>
  );
}
