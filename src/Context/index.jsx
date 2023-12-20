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
  const [filteredItems, setFilteredItems] = useState(null);

  //Get Products by Title
  const [searchByTitle, setSearchByTitle] = useState(null);

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

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  useEffect(() => {
    if(searchByTitle) {
      setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }
  }, [items, searchByTitle])

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
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        setFilteredItems
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
