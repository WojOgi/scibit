import SelectedCountryTile from "./SelectedCountryTile.tsx";
import {
  formatNumberCompact,
  useCountriesDataContext,
} from "../../../../utils/utils.ts";

export default function SelectedCountries() {
  const context = useCountriesDataContext();

  return (
    <>
      <h3>
        Selected Countries{" "}
        <span>({context.listOfSelectedCountries.length})</span>
        <div className="hint"> Click country name to remove from graph </div>
      </h3>
      <section className="country-tile-container">
        {context.listOfSelectedCountries.map((countryName) => (
          <SelectedCountryTile key={countryName} countryName={countryName} />
        ))}
      </section>
      <div>
        Combined population: {formatNumberCompact(context.sumOfPopulations)}
      </div>
    </>
  );
}
