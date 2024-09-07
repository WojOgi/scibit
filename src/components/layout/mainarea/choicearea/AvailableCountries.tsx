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
      <h3>
        Available Countries <span>({listOfAllCountriesNames.length})</span>
        <div className="hint"> Click country name to add to graph </div>
      </h3>
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
