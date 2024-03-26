import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="text-xl">
                <a>Home</a>
              </li>
              <li className="text-xl">
                <a>Donation</a>
              </li>
              <li className="text-xl">
                <a>Statistic</a>
              </li>
            </ul>
          </div>
          <div>
            <img src="/images/Logo.png" alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex navbar-end">
          <ul className="menu menu-horizontal px-1">
            <NavLink to={'/'}>
            <li className="text-xl">
              <a>Home</a>
            </li>
            </NavLink>
            <NavLink to={"/donation"}>
            <li className="text-xl">
              <a>Donation</a>
            </li>
            </NavLink>
            
            <NavLink to={'/statistic'}>
            <li className="text-xl">
              <a>Statistic</a>
            </li>
            </NavLink>
          </ul>
        </div>
       
      </div>
    </div>
  );
};

export default NavBar;
