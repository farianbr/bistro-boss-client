import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import profileImg from "../../../assets/others/profile.png"
import useCart from "../../../hooks/useCart";
import { BsFillCartDashFill } from 'react-icons/bs';

const NavBar = () => {

  const {user, logout} = useContext(AuthContext)
  const [cart] = useCart()

  return (
    <div>
      <div className="navbar max-w-screen-2xl mx-auto fixed z-10 bg-black bg-opacity-40 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 text-black shadow bg-base-100 rounded-box w-52">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link className="btn hover:bg-gray-400 bg-gray-100 text-xl" to="/">
            <img className="w-28 " src="logo.png" alt="" srcSet="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Our Menu</Link>
            </li>
            <li>
              <Link to="/order">Shop Now</Link>
            </li>
            <li>
              {user ? <span onClick={logout} className=" h-9" to="/">Sign Out <img className="w-5 rounded-full" src={profileImg} alt="" srcSet="" /> </span> :<Link to="/login">Login</Link>}
            </li>
            <li>
              {user && <span className=" h-9"><Link className="flex items-center justify-center" to="/dashboard/my-cart"><BsFillCartDashFill /><sup>{cart?.length || 0}</sup></Link></span>}
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">{user?user.displayName : "no user"}</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
