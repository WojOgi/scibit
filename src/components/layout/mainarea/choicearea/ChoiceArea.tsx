import AvailableCountries from "./AvailableCountries.tsx";
import SelectedCountries from "./SelectedCountries.tsx";

type ChoiceAreaProps = {
  listOfAllCountriesNames: string[];
  listOfSelectedCountries: string[];
  setListOfSelectedCountries: (listOfSelectedCountries: string[]) => void;
};

export default function ChoiceArea({
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
        listOfSelectedCountries={listOfSelectedCountries}
        setListOfSelectedCountries={setListOfSelectedCountries}
      />
      <AvailableCountries
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
