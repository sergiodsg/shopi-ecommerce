import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { XCircleIcon } from "@heroicons/react/24/solid";

const Checkout = () => {
  const context = useContext(ShoppingCartContext);

  const removeProduct = (index) => {
    const newProducts = [...context.cartProducts];
    newProducts.splice(index, 1);
    context.setCartProducts(newProducts);
  };

  return (
    <>
    <div className="w-1/2 p-3 bg-slate-50 rounded-lg">
        <div className="flex justify-between w-full">
          <h2 className="font-medium text-xl">My Order</h2>
          <div
            className="cursor-pointer"
            onClick={() => context.setOpenModal(false)}
          >
            <XMarkIcon className="h-6 w-6 text-black"></XMarkIcon>
          </div>
        </div>
    {
      context.cartProducts.map((product, index) => (
        <div className="flex justify-start w-full h-14 mt-4" key={product.id}>
          <img className="w-10 h-10 rounded-lg" src={product.images[0]} alt={product.title} />
          <div className="flex justify-between w-full ml-4">
            <div>
            <p className="font-medium text-md mr-3">{product.title}</p>
            <p className="font-semibold text-md">${product.price}</p>
            </div>
            <XCircleIcon className="h-6 w-6 text-black cursor-pointer" onClick={() => removeProduct(index)}></XCircleIcon>
          </div>
        </div>))
    }
    <div className="flex justify-between w-full mt-4">
      <p className="font-semibold text-lg">Total:</p>
      <p className="font-semibold text-lg">${context.cartProducts.reduce((acc, product) => acc + product.price, 0)}</p>
    </div>
    </div>
    </>
  );
}

export default Checkout;