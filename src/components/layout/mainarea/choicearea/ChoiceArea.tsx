import AvailableCountries from "./AvailableCountries.tsx";
import SelectedCountries from "./SelectedCountries.tsx";
import PresetCountries from "./PresetCountries.tsx";
import { useCountriesDataContext } from "../../../../utils/utils.ts";
import { presets } from "../../../../sourceData/consts.ts";

export default function ChoiceArea() {
  function handleReset() {
    context.setListOfSelectedCountries(["All Countries"]);
  }

  const context = useCountriesDataContext();

  return (
    <div>
      <button className="reset-button" onClick={handleReset}>
        Reset
      </button>
      <SelectedCountries
        sumOfPopulations={context.sumOfPopulations}
        data_CountriesCopy={context.data_CountriesCopy}
        listOfSelectedCountries={context.listOfSelectedCountries}
        setListOfSelectedCountries={context.setListOfSelectedCountries}
      />
      <PresetCountries
        presets={presets}
        setListOfSelectedCountries={context.setListOfSelectedCountries}
      />
      <AvailableCountries
        data_CountriesCopy={context.data_CountriesCopy}
        listOfSelectedCountries={context.listOfSelectedCountries}
        listOfAllCountriesNames={context.listOfAllCountriesNames}
        setListOfSelectedCountries={context.setListOfSelectedCountries}
      />
    </div>
  );
}
