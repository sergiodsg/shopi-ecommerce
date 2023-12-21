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

  //Get Products by Category
  const [searchByCategory, setSearchByCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setItems(data.products);
      } catch (error) {
        console.error(`Oh no, ocurrió un error: ${error}`);
      }
    };
    fetchData();
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      searchByCategory == "others"
        ? !(
            item.category.toLowerCase() == "smartphones" ||
            item.category.toLowerCase() == "laptops" ||
            item.category.toLowerCase() == "fragrances" ||
            item.category.toLowerCase() == "skincare"
          )
        : item.category.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if(searchType == "title"){
      return filteredItemsByTitle(items, searchByTitle);
    } else if (searchType == "category"){
      return filteredItemsByCategory(items, searchByCategory);
    } else if (searchType == "both"){
      return filteredItemsByCategory(items, searchByCategory).filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    } else {
      return items;
    }
  };

  useEffect(() => {
    if(searchByTitle && searchByCategory){
      setFilteredItems(filterBy("both", items, searchByTitle, searchByCategory));
    }
    if(searchByTitle && !searchByCategory){
      setFilteredItems(filterBy("title", items, searchByTitle, searchByCategory));
    }
    if(!searchByTitle && searchByCategory){
      setFilteredItems(filterBy("category", items, searchByTitle, searchByCategory));
    }
    if(!searchByTitle && !searchByCategory){
      setFilteredItems(items);
    }
  }, [items, searchByTitle, searchByCategory]);

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
        setFilteredItems,
        searchByCategory,
        setSearchByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
