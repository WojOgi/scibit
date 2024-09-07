import "./styles/App.css";
import MyLineChart from "./components/graphs/MyLineChart.tsx";

import { data_CountriesExample } from "./sourceData/sourceData.ts";
import Header from "./components/layout/header/Header.tsx";
import MainArea from "./components/layout/mainarea/MainArea.tsx";
import ChoiceArea from "./components/layout/mainarea/choicearea/ChoiceArea.tsx";

function App() {
  const listOfCountries = data_CountriesExample
    .map((country) => country.countryName)
    .sort((a, b) => a.localeCompare(b));
  // console.log(listOfCountries);

  const listOfSelectedCountries: string[] = [];
  //this will later be user-selected
  listOfSelectedCountries.push(listOfCountries[0]);
  listOfSelectedCountries.push(listOfCountries[1]);

  // console.log("listOfSelectedCountries", listOfSelectedCountries);

  const dataToPlot = data_CountriesExample.filter((country) =>
    listOfSelectedCountries.includes(country.countryName),
  );

  // console.log("dataToPlot", dataToPlot);

  return (
    <>
      <Header />
      <MainArea>
        <MyLineChart dataToPlot={dataToPlot} />
        <ChoiceArea
          listOfCountries={listOfCountries}
          listOfSelectedCountries={listOfSelectedCountries}
        />
      </MainArea>
    </>
  );
}

export default App;
