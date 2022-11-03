import {createContext, useContext, useState} from 'react';
import Massage from "../model/massage";
import massagesJson from "../massages.json";
import {ScriptProps} from "next/script";

type massagesData = {
  massagesArray: Array<Massage>;
  massagesPathes: Array<string>;
  massage: Massage;
  setMassageWithPath: (path: string) => void;
}

const massagesDefaultValues: massagesData = {
  massagesArray: [],
  massagesPathes: [],
  massage: {} as Massage,
  setMassageWithPath: () => {},
};

const AppContext = createContext<massagesData>(massagesDefaultValues);

export function AppWrapper({children}: ScriptProps) {
  const [massage, setMassage] = useState<Massage>({} as Massage);
  const massagesArray = massagesJson.massages;
  const massagesPathes = extractPathes(massagesArray);
  const setMassageWithPath = (massagePath: string) => {
    massagesArray.forEach(massage => {

      if (massage.path === massagePath) {
        setMassage(massage);
        console.log(massage);
      }
    })
  }

  function extractPathes (massages: Array<Massage>) {
    return massages.map(massage => massage.path);
  }

  const value = {
    massagesArray,
    massagesPathes,
    massage,
    setMassageWithPath,
  }

  return (
    <>
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    </>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}