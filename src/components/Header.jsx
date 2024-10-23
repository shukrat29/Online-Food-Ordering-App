import { useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../customHooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { PiShoppingCartSimple } from "react-icons/pi";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header sticky top-0 z-50 bg-white shadow-md">
      <div className="logo-container flex">
        <Link to="/">
          <img
            className="logo"
            src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="
            alt="restaurant-logo"
          />
        </Link>
        <Link to="/">
          <h1>OnlineFoodOrder</h1>
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>

          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="font-semibold flex items-center text-red-600"
            >
              <PiShoppingCartSimple />({cartItems.length})
            </Link>
          </li>
          <li className="font-bold">{loggedInUser}</li>
          <li>
            Online Status:
            {onlineStatus ? "Online" : "Offline"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
