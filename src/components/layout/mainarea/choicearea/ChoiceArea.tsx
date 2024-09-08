import AvailableCountries from "./AvailableCountries.tsx";
import SelectedCountries from "./SelectedCountries.tsx";
import { data_CountriesT } from "../../../../utils/utils.ts";

type ChoiceAreaProps = {
  sumOfPopulations: number;
  data_CountriesCopy: data_CountriesT;
  listOfAllCountriesNames: string[];
  listOfSelectedCountries: string[];
  setListOfSelectedCountries: (listOfSelectedCountries: string[]) => void;
};

export default function ChoiceArea({
  sumOfPopulations,
  data_CountriesCopy,
  listOfAllCountriesNames,
  listOfSelectedCountries,
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
