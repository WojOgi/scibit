import AvailableCountries from "./AvailableCountries.tsx";
import SelectedCountries from "./SelectedCountries.tsx";

type ChoiceAreaProps = {
  listOfAllCountriesNames: string[];
  listOfSelectedCountries: string[];
};

export default function ChoiceArea({
  listOfAllCountriesNames,
  listOfSelectedCountries,
}: ChoiceAreaProps) {
  return (
    <div>
      <AvailableCountries listOfAllCountriesNames={listOfAllCountriesNames} />
      <SelectedCountries listOfSelectedCountries={listOfSelectedCountries} />
    </div>
  );
}
