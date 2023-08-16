import React from "react";
import { Routes, Route } from "react-router-dom";

// hooks
import useOverlayContext from "./hooks/useOverlayContext";

// components
import { MainContextProvider } from "./context/MainContext";
import { ExpensesContextProvider } from "./context/ExpensesContext";
import Overlay from "./components/Overlay";
import Button from "./components/Button";
import Footer from "./components/Footer";

// pages
import ExpensesPage from "./pages/ExpensesPage";
import CategoriesPage from "./pages/CategoriesPage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import InsightsPage from "./pages/InsightsPage";

// styles
import "./App.css";

function App() {
  const { isOverlay, handleClick } = useOverlayContext();

  return (
    <>
      <div className="container bg-c--gradient">
        <MainContextProvider>
          <ExpensesContextProvider>
            {isOverlay && <Overlay />}
            <Routes>
              <Route path="/" element={<ExpensesPage />}></Route>
              <Route path="expenses" element={<ExpensesPage />}></Route>
              <Route path="categories" element={<CategoriesPage />}></Route>
              <Route path="insights" element={<InsightsPage />}></Route>
              <Route path="about" element={<AboutPage />}></Route>
              <Route path="*" element={<NotFoundPage />}></Route>
            </Routes>
            <Button
              handleClick={handleClick}
              classHandle="btn--menu"
              children="menu"
            />
          </ExpensesContextProvider>
        </MainContextProvider>
        <Footer />
      </div>
    </>
  );
}

export default App;
