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
    <div className="choice-area">
      <button className="reset-button" onClick={handleReset}>
        Reset
      </button>
      <section>
        <SelectedCountries />
        <PresetCountries presets={presets} />
        <AvailableCountries />
      </section>
    </div>
  );
}
