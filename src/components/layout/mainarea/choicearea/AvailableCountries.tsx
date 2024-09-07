import CountryTile from "./CountryTile.tsx";

type AvailableCountriesProps = {
  listOfCountries: string[];
};

export default function AvailableCountries({
  listOfCountries,
}: AvailableCountriesProps) {
  return (
    <>
      <h2>Available Countries</h2>
      <section className="country-tile-container">
        {listOfCountries.map((countryName) => (
          <CountryTile countryName={countryName} />
        ))}
      </section>
    </>
  );
}
