import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { NavLink } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const context = useContext(ShoppingCartContext);

  const showCheckout = () => {
    context.setModalType(false);
    context.setOpenModal(true);
  };

  const activeStyle = "underline underline-offset-4";
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-small font-light bg-slate-100">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-3xl mr-2">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => context.setSearchByCategory("")}
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/smartphones"
            onClick={() => context.setSearchByCategory("smartphones")}
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            Smartphones
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/laptops"
            onClick={() => context.setSearchByCategory("laptops")}
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            Laptops
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/fragrances"
            onClick={() => context.setSearchByCategory("fragrances")}
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            Fragrances
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skincare"
            onClick={() => context.setSearchByCategory("skincare")}
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            Skin Care
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            onClick={() => context.setSearchByCategory("others")}
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">sergio@mail.com</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : "")}
          >
            Sign In
          </NavLink>
        </li>
        <li className="flex w-12 justify-around cursor-pointer" onClick={() => showCheckout()}>
          <ShoppingBagIcon className="h-6 w-6 text-black"></ShoppingBagIcon>
          <div>{context.cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
