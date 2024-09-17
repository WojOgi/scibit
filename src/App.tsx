import "./styles/App.css";
import MyLineChart_Absolute from "./components/graphs/MyLineChart_Absolute.tsx";
import MyLineChart_Normalized from "./components/graphs/MyLineChart_Normalized.tsx";

import Header from "./components/layout/header/Header.tsx";
import MainArea from "./components/layout/mainarea/MainArea.tsx";
import ChoiceArea from "./components/layout/mainarea/choicearea/ChoiceArea.tsx";

import MyBarChart from "./components/graphs/MyBarChart.tsx";
import Footer from "./components/layout/footer/Footer.tsx";
import CountriesDataContextProvider from "./context/CountriesDataContextProvider.tsx";

function App() {
  return (
    <CountriesDataContextProvider>
      <Header />
      <MainArea>
        <div className="graph-container">
          <MyBarChart />
          <MyLineChart_Absolute />
          <MyLineChart_Normalized />
        </div>
        <ChoiceArea />
      </MainArea>
      <Footer />
    </CountriesDataContextProvider>
  );
}

export default App;
