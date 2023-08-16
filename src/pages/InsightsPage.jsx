import React from "react";
import { InsightContextProvider } from "../context/InsightsContext";
import Header from "../components/Header";
import Main from "../components/Main";
import Insights2 from "../components/Insights2";
import "../styles/insights.css";

const InsightsPage = () => {
  return (
    <>
      <Header titleHandle="Expenses Insights" />
      <Main>
        <InsightContextProvider>
          <Insights2 />
        </InsightContextProvider>
      </Main>
    </>
  );
};

export default InsightsPage;
