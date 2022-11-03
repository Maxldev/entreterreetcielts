import {createContext, useContext} from 'react';
import Massage from "../model/massage";
import massagesList from "../massages.json";
import {ScriptProps} from "next/script";

type massageType = {
  massages: Array<Massage>;
};

const massageDefaultValues: massageType = {
  massages: [],
};

const AppContext = createContext<massageType>(massageDefaultValues);

export function AppWrapper({children}: ScriptProps) {
  const massages = massagesList;

  return (
    <>
      <AppContext.Provider value={massages}>
        {children}
      </AppContext.Provider>
    </>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}