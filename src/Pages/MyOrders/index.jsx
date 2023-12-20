import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import OrdersCard from "../../Components/OrdersCard";

function MyOrders() {
  const context = useContext(ShoppingCartContext);

  return (
    <div>
      <div className="flex items-center justify-center w-80">
        <h1>MyOrders</h1>
      </div>
      {context.order?.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            date={order.date}
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </div>
  );
}

export default MyOrders;
