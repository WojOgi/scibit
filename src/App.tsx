import "./styles/App.css";
import MyLineChart from "./components/graphs/MyLineChart.tsx";

import { data_CountriesExample } from "./sourceData/sourceData.ts";
import Header from "./components/layout/header/Header.tsx";
import MainArea from "./components/layout/mainarea/MainArea.tsx";
import ChoiceArea from "./components/layout/mainarea/choicearea/ChoiceArea.tsx";
import { useState } from "react";

function App() {
  //create a copy of the original data
  const data_CountriesCopy = [...data_CountriesExample];

  const listOfAllCountriesNames = data_CountriesCopy
    .map((country) => country.countryName)
    .sort((a, b) => a.localeCompare(b));
  // console.log(listOfAllCountriesNames);

  const [listOfSelectedCountries, setListOfSelectedCountries] = useState([
    "Belgium",
  ]);

  const dataPreparedForPlotting = data_CountriesCopy.map((country) => ({
    ...country,
    toBePlotted: listOfSelectedCountries.includes(country.countryName),
  }));

  // console.log("listOfSelectedCountries", listOfSelectedCountries);

  const dataToPlot = dataPreparedForPlotting.filter(
    (country) => country.toBePlotted,
  );

  // console.log("dataToPlot", dataToPlot);

  return (
    <>
      <Header />
      <MainArea>
        <MyLineChart dataToPlot={dataToPlot} />
        <ChoiceArea
          listOfAllCountriesNames={listOfAllCountriesNames}
          listOfSelectedCountries={listOfSelectedCountries}
        />
      </MainArea>
    </>
  );
}

export default App;
