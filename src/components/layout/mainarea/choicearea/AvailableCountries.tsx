import AvailableCountryTile from "./AvailableCountryTile.tsx";

type AvailableCountriesProps = {
  listOfSelectedCountries: string[];
  listOfAllCountriesNames: string[];
  setListOfSelectedCountries: (listOfSelectedCountries: string[]) => void;
};

export default function AvailableCountries({
  listOfSelectedCountries,
  listOfAllCountriesNames,
  setListOfSelectedCountries,
}: AvailableCountriesProps) {
  return (
    <>
      <h2>Available Countries</h2>
      <section className="country-tile-container">
        {listOfAllCountriesNames.map((countryName) => (
          <AvailableCountryTile
            key={countryName}
            countryName={countryName}
            listOfSelectedCountries={listOfSelectedCountries}
            setListOfSelectedCountries={setListOfSelectedCountries}
          />
        ))}
      </section>
    </>
  );
}
