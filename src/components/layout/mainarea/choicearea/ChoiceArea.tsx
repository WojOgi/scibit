import AvailableCountries from "./AvailableCountries.tsx";
import SelectedCountries from "./SelectedCountries.tsx";
import { data_CountriesT } from "../../../../utils/utils.ts";
import PresetCountries from "./PresetCountries.tsx";

type ChoiceAreaProps = {
  sumOfPopulations: number;
  data_CountriesCopy: data_CountriesT;
  listOfAllCountriesNames: string[];
  listOfSelectedCountries: string[];
  presets: { presetName: string; countryNames: string[] }[];
  setListOfSelectedCountries: (listOfSelectedCountries: string[]) => void;
};

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
      <button className="reset-button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
