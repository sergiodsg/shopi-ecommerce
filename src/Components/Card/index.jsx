import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon } from "@heroicons/react/24/solid";

const Card = ({ data }) => {
  const context = useContext(ShoppingCartContext);

  const showProductDetail = (productDetail) => {
    context.setModalType(true);
    context.setOpenModal(true);
    context.setProductToShow(productDetail);
  };

  const addProductToCart = (e, product) => {
    e.stopPropagation();
    context.setCartProducts([...context.cartProducts, product]);
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProductDetail(data)}
    >
      <figure className="relative mb-2 w-full h-4/5 rounded-lg">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.category}
        </span>
        <img
          className="w-full h-full rounded-3xl object-cover"
          src={data.images[0]}
          alt={data.title}
        />
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white hover:bg-slate-300 w-6 h-6 rounded-full m-2 p-1"
          onClick={(e) => addProductToCart(e, data)}
        >{
          context.cartProducts.some((product) => product.id === data.id) ? (
              <div className="text-green-500 text-sm font-bold">
              {context.cartProducts.filter((product) => product.id === data.id).length}
            </div> 
            
          ) : (
            <PlusIcon className="h-6 w-6 text-black"></PlusIcon>
          )
        }
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-lg font-semibold">${data.price}</span>
      </p>
    </div>
  );
};

export default Card;
