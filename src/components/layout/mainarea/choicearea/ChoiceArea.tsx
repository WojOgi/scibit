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
  return (
    <div>
      <AvailableCountries
        listOfSelectedCountries={listOfSelectedCountries}
        listOfAllCountriesNames={listOfAllCountriesNames}
        setListOfSelectedCountries={setListOfSelectedCountries}
      />
      <SelectedCountries
        listOfSelectedCountries={listOfSelectedCountries}
        setListOfSelectedCountries={setListOfSelectedCountries}
      />
      <button className="reset-button">Reset</button>
    </div>
  );
}
