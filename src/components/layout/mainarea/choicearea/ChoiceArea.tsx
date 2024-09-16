import AvailableCountries from "./AvailableCountries.tsx";
import SelectedCountries from "./SelectedCountries.tsx";
import PresetCountries from "./PresetCountries.tsx";
import { ChoiceAreaProps } from "../../../../types/types.ts";

export default function ChoiceArea({
  sumOfPopulations,
  data_CountriesCopy,
  listOfAllCountriesNames,
  listOfSelectedCountries,
  presets,
  setListOfSelectedCountries,
}: ChoiceAreaProps) {
  function handleReset() {
    setListOfSelectedCountries(["All Countries"]);
  }

  return (
    <div>
      <button className="reset-button" onClick={handleReset}>
        Reset
      </button>
      <SelectedCountries
        sumOfPopulations={sumOfPopulations}
        data_CountriesCopy={data_CountriesCopy}
        listOfSelectedCountries={listOfSelectedCountries}
        setListOfSelectedCountries={setListOfSelectedCountries}
      />
      <PresetCountries
        presets={presets}
        setListOfSelectedCountries={setListOfSelectedCountries}
      />
      <AvailableCountries
        data_CountriesCopy={data_CountriesCopy}
        listOfSelectedCountries={listOfSelectedCountries}
        listOfAllCountriesNames={listOfAllCountriesNames}
        setListOfSelectedCountries={setListOfSelectedCountries}
      />
    </div>
  );
}
