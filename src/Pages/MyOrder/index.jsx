import { useContext } from "react"
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context"
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  const index = currentPath.substring(currentPath.lastIndexOf('/') + 1);

  return (
    <div>
      <div className="flex items-center justify-center relative w-80 m-5">
        <Link to='/my-orders' className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer"></ChevronLeftIcon>
        </Link>
        <h1>My Order </h1>
      </div>
      {context.order?.[index === 'last' ? context.order.length - 1 : index]?.products?.map((product, index) => (
          <div className="flex justify-start w-full h-14 mt-4" key={index}>
            <img
              className="w-10 h-10 rounded-lg"
              src={product.images[0]}
              alt={product.title}
            />
            <div className="flex justify-between w-full ml-4">
              <div>
                <p className="font-medium text-md mr-3">{product.title}</p>
                <p className="font-semibold text-md">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default MyOrder