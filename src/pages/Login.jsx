// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const auth = getAuth();

import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navber";
import Footer from "../components/Footer";

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       toast.success("Login Successful!");
//       navigate("/");
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     const provider = new GoogleAuthProvider();
//     try {
//       await signInWithPopup(auth, provider);
//       toast.success("Logged in with Google!");
//       navigate("/");
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2> Login </h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//       <button onClick={handleGoogleLogin}>Login with Google</button>
//       <p>
//         Don't have an account? <a href="/register">Register here</a>
//       </p>
//     </div>
//   );
// };


const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);
  const [ error, setError ] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const handleErrorMessage = (code) => {
    switch (code) {
      case "auth/user-not-found":
        return "No user found with this email.";
      case "auth/wrong-password":
        return "Incorrect password. Please try again.";
      case "auth/too-many-requests":
        return "Too many attempts. Please try again later.";
      default:
        return "An unexpected error occurred. Please try again.";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    userLogin(email, password)
    .then((result) => {
      const user = result.user;
      setUser(user);
      navigate(location?.state ? location.state : "/");
    })
    .catch((err) => {
      setError(handleErrorMessage(err.code));
    })
  }

  return (
    <div className="">
      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
          <h2 className="text-2xl font-semibold text-center"> Login your account </h2>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input 
                name="email"
                type="email" 
                placeholder="email" className="input input-bordered"
                required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input 
                name="password"
                type="password" placeholder="password" className="input input-bordered" required />
              {
                error.login && (
                  <label className="label text-sm text-red-600">
                    {error.login}
                  </label>
                )
              }
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#0B3169] hover:bg-blue-800 text-white rounded-md">Login</button>
            </div>
          </form>
          <p className="text-center font-semibold">
            Dont't Have An Account ? 
            <Link className="text-[#0B3169]" to="/register"> Register </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;