import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    // bg-[#0B3169] bg-blue-900 bg-[#0073A5]
    <div className="bg-[#0B3169] text-white">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm bg-[#0B3169] dropdown-content rounded-box z-[1] mt-3 w-52 p-4 shadow gap-2">
              <Link to="/" className="text-white bg-blue-900 hover:text-gray-300  transition-colors p-2 rounded-lg"> Home </Link>
              <Link to="/services" className="text-white hover:text-gray-300 transition-colors bg-blue-900 p-2 rounded-lg"> Services </Link>
              <Link to="/profile" className="text-white hover:text-gray-300 transition-colors bg-blue-900 p-2 rounded-lg"> My Profile</Link>
            </ul>
          </div>
          <div className="flex gap-2 btn btn-ghost text-xl">
            <img className="w-10" src="../../src/assets/CC.png" alt="" />
            <Link to="/" className="text-xl font-bold"> Career Counsellor </Link>
          </div>
        </div>
        <nav className="navbar-center gap-6 hidden lg:flex">
          <Link to="/" className="text-white hover:text-gray-300 transition-colors"> Home </Link>
          <Link to="/services" className="text-white hover:text-gray-300 transition-colors"> Services </Link>
          <Link to="/profile" className="text-white hover:text-gray-300 transition-colors"> My Profile</Link>
        </nav>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-2">
              <div className="flex items-center gap-4 relative group">
                {/* <div className="relative">
                  <img src={user.photoURL} alt="User" className="w-8 h-8 rounded-full cursor-pointer"/>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -mb-2 hidden group-hover:flex items-center bg-gray-800 text-white text-xs rounded py-1 px-2 shadow-lg">
                    {user.displayName}
                  </div>
                </div> */}
                <button onClick={logOut} className="btn bg-blue-900 hover:bg-blue-800 text-white border-none"> Logout </button>
              </div>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                  </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm bg-[#0B3169] bg-opacity-50 gap-2 dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow items-center justify-center border-2 border-white">
                  <img className="w-16 h-16 rounded-full" src={user?.photoURL} alt="" />
                  <h3 className="text-center py-3">{user?.displayName}</h3>
                  <Link to="/profile" className="btn bg-blue-900 hover:bg-blue-800 text-white border-none w-28"> My Profile</Link>
                  {
                    user ? <button onClick={logOut} className="btn bg-blue-900 hover:bg-blue-800 text-white border-none w-28"> Logout </button> : <Link to="/login" className="btn bg-blue-900 hover:bg-blue-800 text-white border-none w-28"> Login </Link>
                  }
                </ul>
              </div>
            </div>
          ) : (
            <div className="">
              <Link to="/login" className="btn bg-blue-900 hover:bg-blue-800 text-white border-none"> Login </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
