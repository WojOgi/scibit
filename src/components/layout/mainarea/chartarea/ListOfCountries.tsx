import Country from "./Country.tsx";

type ListOfCountriesProps = {
  listOfCountries: string[];
};

export default function ListOfCountries({
  listOfCountries,
}: ListOfCountriesProps) {
  return listOfCountries.map((country) => <Country countryName={country} />);
}
