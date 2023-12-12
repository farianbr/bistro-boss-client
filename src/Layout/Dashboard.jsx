import { Link, Outlet } from "react-router-dom";
import { BsFillCartDashFill } from 'react-icons/bs';
import { MdHome } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart()
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link><MdHome></MdHome>User Home</Link>
            </li>
            <li>
              <Link><FaCalendarAlt></FaCalendarAlt>Reservations</Link>
            </li>
            <li>
              <Link><MdOutlinePayment></MdOutlinePayment>Payment History</Link>
            </li>
            <li>
            <Link to="/dashboard/my-cart"><BsFillCartDashFill /> My Cart #{cart?.length || 0}</Link>
            </li>
            <div className="divider"></div>
            <li>
              <Link to="/"><MdHome></MdHome>Home</Link>
            </li>
            <li>
              <Link to="/menu"><IoMenu></IoMenu>Menu</Link>
            </li>
            <li>
              <Link to="/order"><FaShoppingBag></FaShoppingBag>Shop</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
