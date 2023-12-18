import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/solid";
import "./styles.css";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <>
      <div className="flex justify-between items-start w-1/2 h-64 p-3 bg-slate-50 rounded-lg">
        <h2 className="font-medium text-xl">Detail</h2>
        <div
          className="cursor-pointer"
          onClick={() => context.setOpenModal(false)}
        >
          <XMarkIcon className="h-6 w-6 text-black"></XMarkIcon>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
