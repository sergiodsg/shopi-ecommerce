import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/solid";
import "./styles.css";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <>
      <div className="w-1/2 p-3 bg-slate-50 rounded-lg">
        <div className="flex justify-between w-full">
          <h2 className="font-medium text-xl">Detail</h2>
          <div
            className="cursor-pointer"
            onClick={() => context.setOpenModal(false)}
          >
            <XMarkIcon className="h-6 w-6 text-black"></XMarkIcon>
          </div>
        </div>
        <figure className="m-5">
          <img
            className="w-full h-full rounded-lg"
            src={context.productToShow.images[0]}
            alt={context.productToShow.title}
          />
        </figure>
        <p>
          <span className="font-medium text-2xl">${context.productToShow.price}</span>
          <br />
          <span className="font-medium text-md">{context.productToShow.title}</span><br />
          <span className="font-light text-sm">{context.productToShow.description}</span>
        </p>
      </div>
    </>
  );
};

export default ProductDetail;
