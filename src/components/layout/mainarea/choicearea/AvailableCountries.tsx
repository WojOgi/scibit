import AvailableCountryTile from "./AvailableCountryTile.tsx";
import { useCountriesDataContext } from "../../../../utils/utils.ts";

export default function AvailableCountries() {
  const context = useCountriesDataContext();

  return (
    <>
      <h3>
        Available Countries{" "}
        <span>({context.listOfAllCountriesNames.length})</span>
        <div className="hint"> Click country name to add to graph </div>
      </h3>
      <section className="country-tile-container">
        {context.listOfAllCountriesNames.map((countryName) => (
          <AvailableCountryTile key={countryName} countryName={countryName} />
        ))}
      </section>
    </>
  );
}
