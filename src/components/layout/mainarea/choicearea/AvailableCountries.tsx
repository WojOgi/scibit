import CountryTile from "./CountryTile.tsx";

type AvailableCountriesProps = {
  listOfAllCountriesNames: string[];
};

export default function AvailableCountries({
  listOfAllCountriesNames,
}: AvailableCountriesProps) {
  return (
    <>
      <h2>Available Countries</h2>
      <section className="country-tile-container">
        {listOfAllCountriesNames.map((countryName) => (
          <CountryTile countryName={countryName} />
        ))}
      </section>
    </>
  );
}
