import "./styles/App.css";
import MyLineChart_Absolute from "./components/graphs/MyLineChart_Absolute.tsx";
import MyLineChart_Normalized from "./components/graphs/MyLineChart_Normalized.tsx";

import {
  data_CountriesMaster,
  nrCountriesWithAtLeastOnePublication,
} from "./sourceData/sourceData.ts";
import Header from "./components/layout/header/Header.tsx";
import MainArea from "./components/layout/mainarea/MainArea.tsx";
import ChoiceArea from "./components/layout/mainarea/choicearea/ChoiceArea.tsx";
import { useState } from "react";
import MyBarChart from "./components/graphs/MyBarChart.tsx";
import {
  calculateSumOfPopulations,
  createSortedListOfAllCountriesNames,
} from "./utils/utils.ts";
import { presets } from "./sourceData/consts.ts";
import { data_CountriesT } from "./types/types.ts";
import Footer from "./components/layout/footer/Footer.tsx";

function App() {
  //create a copy of the original data to prevent mutation
  const data_CountriesCopy: data_CountriesT = [...data_CountriesMaster];

  const listOfAllCountriesNames =
    createSortedListOfAllCountriesNames(data_CountriesCopy);

  const [listOfSelectedCountries, setListOfSelectedCountries] = useState([
    "All Countries",
  ]);

  const dataPreparedForPlotting = data_CountriesCopy
    .map((country) => ({
      ...country,
      toBePlotted: listOfSelectedCountries.includes(country.countryName),
    }))
    .filter((country) => country.toBePlotted);

  const sumOfPopulations = calculateSumOfPopulations(dataPreparedForPlotting);

  return (
    <>
      <Header />
      <MainArea>
        <div className="graph-container">
          <MyBarChart dataToPlot={nrCountriesWithAtLeastOnePublication} />
          <MyLineChart_Absolute dataToPlot={dataPreparedForPlotting} />
          <MyLineChart_Normalized dataToPlot={dataPreparedForPlotting} />
        </div>
        <ChoiceArea
          sumOfPopulations={sumOfPopulations}
          data_CountriesCopy={data_CountriesCopy}
          listOfAllCountriesNames={listOfAllCountriesNames}
          listOfSelectedCountries={listOfSelectedCountries}
          presets={presets}
          setListOfSelectedCountries={setListOfSelectedCountries}
        />
      </MainArea>
      <Footer />
    </>
  );
}

export default App;
