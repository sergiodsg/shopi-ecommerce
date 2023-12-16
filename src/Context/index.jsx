import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const [openModal, setOpenModal] = useState(false);

  return (
    <ShoppingCartContext.Provider value={{ count, setCount, openModal, setOpenModal }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
