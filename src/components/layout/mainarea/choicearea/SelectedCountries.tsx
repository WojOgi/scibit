import CountryTile from "./CountryTile.tsx";

type SelectedCountriesProps = {
  listOfSelectedCountries: string[];
};

export default function SelectedCountries({
  listOfSelectedCountries,
}: SelectedCountriesProps) {
  return (
    <>
      <h2>Selected Countries</h2>
      <section className="country-tile-container">
        {listOfSelectedCountries.map((countryName) => (
          <CountryTile countryName={countryName} />
        ))}
      </section>
    </>
  );
}
