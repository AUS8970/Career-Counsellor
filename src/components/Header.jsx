// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <header className="bg-[#0073A5] text-white py-4 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <h1 className="text-2xl font-bold">
//           <Link to="/" className="hover:text-gray-300">
//             Career Counseling
//           </Link>
//         </h1>

//         {/* Navigation */}
//         <nav>
//           <ul className="flex gap-6">
//             <li>
//               <Link
//                 to="/"
//                 className="hover:text-gray-300 transition-colors duration-200"
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/services"
//                 className="hover:text-gray-300 transition-colors duration-200"
//               >
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/profile"
//                 className="hover:text-gray-300 transition-colors duration-200"
//               >
//                 My Profile
//               </Link>
//             </li>
//           </ul>
//         </nav>

//         {/* Login/Logout Button */}
//         <div>
//           <Link
//             to="/login"
//             className="bg-[#FFA500] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-all"
//           >
//             Login
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white text-cyan-700 py-6 shadow-lg">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="text-center w-10/12 mx-auto py-32 flex flex-col gap-4">
          <h1 className="text-6xl font-font uppercase font-extrabold">
            Shape Your Future <br /> with Expert Career Guidance
          </h1>
          <p className="mt-2">
            From personalized career advice to skill development workshops, we provide the tools and support you need to achieve your dreams and succeed in the competitive job market.
          </p>
          <div className="mt-6">
            <Link to="/services" className=" bg-cyan-700 text-white px-6 py-3 rounded-md hover:bg-cyan-600 transition-all text-lg font-semibold"> Explore Services </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
