import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const MainContext = React.createContext();

const MainContextProvider = ({ children }) => {
  const API_URL = "http://localhost:5000/db";
  const CATEGORIES_URL = "http://localhost:5000/categories";
  const EXPENSES_URL = "http://localhost:5000/expenses";

  const [dataFromAPI, setDataFromAPI] = useState({});
  const { setURL, setOptions, data, isLoading, fetchError } = useFetch(API_URL);

  useEffect(() => {
    setDataFromAPI((prevDataFromAPI) => {
      return { ...prevDataFromAPI, ...data };
    });
  }, [data]);

  const postRequest = (url, body) => {
    setURL(url);
    setOptions({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  };

  const putRequest = (url, id, body) => {
    setURL(`${url}/${id}`);
    setOptions({
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  };

  const deleteRequest = (url, id) => {
    setURL(`${url}/${id}`);
    setOptions({
      method: "DELETE",
    });
  };

  const createItem = (field, ...args) => ({
    id: dataFromAPI[field].slice(-1)[0]?.id + 1 || 1,
    ...args.reduce((acc, { name, value }) => {
      if (!acc[name]) {
        acc[name] = name !== "cost" ? value : +value;
      }
      return acc;
    }, {}),
  });

  const addItem = (url, body) => {
    setDataFromAPI((prevDataFromAPI) => {
      if (url === EXPENSES_URL) {
        return {
          ...prevDataFromAPI,
          expenses: [...prevDataFromAPI["expenses"], body],
        };
      } else if (url === CATEGORIES_URL) {
        return {
          ...prevDataFromAPI,
          categories: [...prevDataFromAPI["categories"], body],
        };
      }
    });

    postRequest(url, body);
  };

  const updateItem = (url, id, body) => {
    setDataFromAPI((prevDataFromAPI) => {
      if (url === EXPENSES_URL) {
        return {
          ...prevDataFromAPI,
          expenses: prevDataFromAPI["expenses"].map((item) =>
            item.id === id ? { ...item, ...body } : item
          ),
        };
      } else if (url === CATEGORIES_URL) {
        // placeholder for the page with categories
      }
    });

    putRequest(url, id, body);
  };

  const deleteItem = (url, id) => {
    setDataFromAPI((prevDataFromAPI) => {
      if (url === EXPENSES_URL) {
        return {
          ...prevDataFromAPI,
          expenses: prevDataFromAPI["expenses"].filter(
            (item) => item.id !== id
          ),
        };
      } else if (url === CATEGORIES_URL) {
        return {
          ...prevDataFromAPI,
          categories: prevDataFromAPI["categories"].filter(
            (item) => item.id !== id
          ),
        };
      }
    });
    deleteRequest(url, id);
  };

  const clearForm = (...args) =>
    args.forEach((item) => {
      item.value = "";
    });

  return (
    <MainContext.Provider
      value={{
        EXPENSES_URL,
        CATEGORIES_URL,
        isLoading,
        fetchError,
        dataFromAPI,
        createItem,
        addItem,
        updateItem,
        deleteItem,
        clearForm,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainContextProvider };
export default MainContext;
