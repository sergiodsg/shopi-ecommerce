import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Product Detail - Open/Close Modal
  const [openModal, setOpenModal] = useState(false);

  // Product Detail or Checkout
  const [modalType, setModalType] = useState(null);

  // Product Detail - Product to show
  const [productToShow, setProductToShow] = useState({});

  // Shoping Cart - Products added to cart
  const [cartProducts, setCartProducts] = useState([]);

  //Shopping Cart - Order
  const [order, setOrder] = useState([]);

  //Get Products
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()
        setItems(data.products)
      } catch (error) {
        console.error(`Oh no, ocurrió un error: ${error}`);
      }
    }
    fetchData()
  }, [])

  return (
    <ShoppingCartContext.Provider
      value={{
        openModal,
        setOpenModal,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        modalType,
        setModalType,
        order,
        setOrder,
        items,
        setItems
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
