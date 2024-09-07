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
      <h2>Selected Countries</h2>
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
