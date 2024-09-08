import "./styles/App.css";
import MyLineChart from "./components/graphs/MyLineChart.tsx";

import {
  data_CountriesExample,
  nrCountriesWithAtLeastOnePublication,
} from "./sourceData/sourceData.ts";
import Header from "./components/layout/header/Header.tsx";
import MainArea from "./components/layout/mainarea/MainArea.tsx";
import ChoiceArea from "./components/layout/mainarea/choicearea/ChoiceArea.tsx";
import { useState } from "react";
import MyBarChart from "./components/graphs/MyBarChart.tsx";
import { data_CountriesT } from "./utils/utils.ts";

function App() {
  //create a copy of the original data
  const data_CountriesCopy: data_CountriesT = [...data_CountriesExample];

  const listOfAllCountriesNames = data_CountriesCopy
    .map((country) => country.countryName)
    .sort((a, b) => a.localeCompare(b));
  // console.log(listOfAllCountriesNames);

  const [listOfSelectedCountries, setListOfSelectedCountries] = useState([
    "All Countries",
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
        <div className="graph-container">
          <MyBarChart dataToPlot={nrCountriesWithAtLeastOnePublication} />
          <MyLineChart dataToPlot={dataToPlot} />
        </div>
        <ChoiceArea
          data_CountriesCopy={data_CountriesCopy}
          listOfAllCountriesNames={listOfAllCountriesNames}
          listOfSelectedCountries={listOfSelectedCountries}
          setListOfSelectedCountries={setListOfSelectedCountries}
        />
      </MainArea>
    </>
  );
}

export default App;
