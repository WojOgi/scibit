import SelectedCountryTile from "./SelectedCountryTile.tsx";

type SelectedCountriesProps = {
  listOfSelectedCountries: string[];
  setListOfSelectedCountries: (listOfSelectedCountries: string[]) => void;
};

export default function SelectedCountries({
  listOfSelectedCountries,
  setListOfSelectedCountries,
}: SelectedCountriesProps) {
  return (
    <>
      <h3>
        Selected Countries <span>({listOfSelectedCountries.length})</span>
        <div className="hint"> Click country name to remove from graph </div>
      </h3>
      <section className="country-tile-container">
        {listOfSelectedCountries.map((countryName) => (
          <SelectedCountryTile
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
