import { createContext, useContext, useState } from "react";

const Context = createContext();

const initialState = {
  chat: false,
  cart: false,
  useProfile: false,
  otification: false,
};
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <Context.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);
