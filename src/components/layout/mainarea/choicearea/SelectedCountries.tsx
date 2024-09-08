import SelectedCountryTile from "./SelectedCountryTile.tsx";
import { data_CountriesT } from "../../../../utils/utils.ts";

type SelectedCountriesProps = {
  data_CountriesCopy: data_CountriesT;
  listOfSelectedCountries: string[];
  setListOfSelectedCountries: (listOfSelectedCountries: string[]) => void;
};

export default function SelectedCountries({
  data_CountriesCopy,
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
            data_CountriesCopy={data_CountriesCopy}
          />
        ))}
      </section>
    </>
  );
}
