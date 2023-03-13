import { createContext, useContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [log, setLog] = useState(false);

  return (
    <Context.Provider value={{ log, setLog }}>{children}</Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);
