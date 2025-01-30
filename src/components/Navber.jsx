import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="bg-cyan-700">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm border-2 border-cyan-700 bg-cyan-700 bg-opacity-80 dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2">
            {/* btn bg-cyan-400 hover:bg-cyan-500 hover: text-white border-none */}
              <NavLink to="/" className="p-3 rounded-lg bg-cyan-400 hover:bg-cyan-500 hover: text-white border-none"> Home </NavLink>
              <NavLink to="/program" className="p-3 rounded-lg bg-cyan-400 hover:bg-cyan-500 hover: text-white border-none"> Our Program </NavLink>
              <NavLink to="/profile" className="p-3 rounded-lg bg-cyan-400 hover:bg-cyan-500 hover: text-white border-none"> My Profile </NavLink>
            </ul>
          </div>
          <Link to="/" className="flex gap-2 btn btn-ghost text-xl">
            <img className="w-10" src="https://i.ibb.co.com/RTZDh9y/CC.png" alt="" />
            <h2 className="text-xl font-bold text-white"> Career Counsellor </h2>
          </Link>
        </div>
        <nav className="navbar-center gap-6 hidden lg:flex">
          <NavLink to="/" className="text-cyan-200 transition-colors font-bold"> Home </NavLink>
          <NavLink to="/program" className="text-cyan-200 transition-colors font-bold"> Our Program </NavLink>
          <NavLink to="/profile" className="text-cyan-300 transition-colors font-bold"> My Profile</NavLink>
        </nav>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-2">
              <div className="flex items-center gap-4 group">
                <button onClick={logOut} className="btn hidden md:flex bg-white hover:bg-cyan-100 text-cyan-700 font-bold border-none"> Logout </button>
              </div>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar group-hover:bg-cyan-900">
                  <div className="w-10 rounded-full">
                    <img alt="Profile Avatar" src={user?.photoURL || "https://via.placeholder.com/150"}/>
                  </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm border-2 border-cyan-700 bg-cyan-700 bg-opacity-90 gap-2 dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  <div className="flex flex-col items-center justify-center">
                    <img className="w-16 h-16 rounded-full" src={user?.photoURL} alt="" />
                    <div className="py-3">
                      <h3 className="text-center font-bold pb-1 text-cyan-50">{user?.displayName}</h3>
                      <h3 className="text-center font-normal text-cyan-50">{user?.email}</h3>
                    </div>
                    <Link to="/profile" className="btn bg-cyan-400 hover:bg-cyan-500 text-cyan-50 border-none w-28 mb-3"> My Profile </Link>
                    {
                      user ? <button onClick={logOut} className="btn bg-cyan-400 hover:bg-cyan-500 text-white border-none w-28"> Logout </button> : <Link to="/login" className="btn bg-cyan-400 hover:bg-cyan-500 hover: text-white border-none w-28"> Login </Link>
                    }
                  </div>
                </ul>
              </div>
            </div>
          ) : (
            <div className="">
              <Link to="/login" className="btn bg-cyan-300 hover:bg-cyan-600 text-white border-none"> Login </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
