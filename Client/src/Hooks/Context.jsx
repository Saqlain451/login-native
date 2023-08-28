import React, { useContext } from "react";

const appContext = React.createContext();

const AppProvider = ({ children }) => {
  const fname = "dkskfjksa";
  return (
    <appContext.Provider
      value={{
        fname,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

const useGlobalHook = () => useContext(appContext);

export { useGlobalHook, AppProvider };
