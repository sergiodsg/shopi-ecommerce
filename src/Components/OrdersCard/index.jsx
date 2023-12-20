import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
  const { date, totalPrice, totalProducts } = props;

  // Convertir el objeto Date a un string con el formato "dd/mm/yy"
  const formattedDate = `${date.getDate().toString().padStart(2, "0")}/${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${date.getFullYear().toString()}`;

  return (
    <div className="flex justify-between items-center w-80 h-24 m-2 rounded-lg border border-black">
      <div>
        <div className="flex ml-4 gap-2 items-center">
          <CalendarDaysIcon className="h-5 w-5 text-black"></CalendarDaysIcon>
          {formattedDate}
        </div>
        <div className="flex ml-4 gap-2 items-center">
          <ShoppingCartIcon className="h-5 w-5 text-black"></ShoppingCartIcon>
          {totalProducts}
        </div>
      </div>
      <div className="flex mr-4 gap-2 items-center">
        <div className="text-2xl font-semibold">${totalPrice}</div>
        <ChevronRightIcon className="h-7 w-7 text-black"></ChevronRightIcon>
      </div>
    </div>
  );
};

export default OrdersCard;
