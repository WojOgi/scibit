import AvailableCountries from "./AvailableCountries.tsx";
import SelectedCountries from "./SelectedCountries.tsx";

type ChoiceAreaProps = {
  listOfCountries: string[];
  listOfSelectedCountries: string[];
};

export default function ChoiceArea({
  listOfCountries,
  listOfSelectedCountries,
}: ChoiceAreaProps) {
  return (
    <div>
      <AvailableCountries listOfCountries={listOfCountries} />
      <SelectedCountries listOfSelectedCountries={listOfSelectedCountries} />
    </div>
  );
}
