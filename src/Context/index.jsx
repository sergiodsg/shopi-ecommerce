import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Product Detail - Open/Close Modal
  const [openModal, setOpenModal] = useState(false);

  // Product Detail - Product to show
  const [productToShow, setProductToShow] = useState({});

  // Shoping Cart - Products added to cart
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        openModal,
        setOpenModal,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
