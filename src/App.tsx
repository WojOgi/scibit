import "./styles/App.css";
import MyLineChart from "./components/graphs/MyLineChart.tsx";

import { data_CountriesExample } from "./sourceData/sourceData.ts";
import Header from "./components/layout/header/Header.tsx";
import MainArea from "./components/layout/mainarea/MainArea.tsx";
import ChoiceArea from "./components/layout/mainarea/choicearea/ChoiceArea.tsx";

function App() {
  const listOfCountries = data_CountriesExample.map(
    (country) => country.countryName,
  );
  // console.log(listOfCountries);

  const selectedCountries: string[] = [];
  //this will later be user-selected
  selectedCountries.push(listOfCountries[0]);
  selectedCountries.push(listOfCountries[1]);
  selectedCountries.push(listOfCountries[2]);
  selectedCountries.push(listOfCountries[3]);
  selectedCountries.push(listOfCountries[4]);

  // console.log("selectedCountries", selectedCountries);

  const dataToPlot = data_CountriesExample.filter((country) =>
    selectedCountries.includes(country.countryName),
  );

  // console.log("dataToPlot", dataToPlot);

  return (
    <>
      <Header />
      <MainArea>
        <MyLineChart dataToPlot={dataToPlot} />
        <ChoiceArea listOfCountries={listOfCountries} />
      </MainArea>
    </>
  );
}

export default App;
