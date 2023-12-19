import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Modal from "../../Components/Modal";
import ProductDetail from "../../Components/ProductDetail";
import Checkout from "../../Components/Checkout";

const Layout = ({ children }) => {
  const context = useContext(ShoppingCartContext);
  return (
    <div className='flex flex-col items-center mt-20'>
      {children}
      {context.openModal && (
        <Modal>
          {context.modalType ? <ProductDetail /> : <Checkout />}
        </Modal>
      )}
    </div>
  )
}

export default Layout
