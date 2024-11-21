import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FaGithub } from "react-icons/fa";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Login = () => {
  const { userLogin, setUser, logInWithGoogle, logInWithGithub } = useContext(AuthContext);
  const [ error, setError ] = useState([]);
  const [ email, setEmail ] = useState("")
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();

  const from = location.state?.from?.pathname || "/";

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

  const handleGoogleSignIn = () => {
    logInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log("ERROR", error.message));
  };

  const handleGithubSignIn = () => {
    logInWithGithub()
    .then(result => {
      console.log(result.user);
      navigate(from, { replace: true });
    })
    .catch(error => console.log('ERROR', error.message))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email, password)
    .then((result) => {
      const user = result.user;
      setUser(user);
      navigate(from, { replace: true });
    })
    .catch((err) => {
      setError(handleErrorMessage(err.code));
    })
  }

  const handleForgotPassword = () => {
    localStorage.setItem("email", email);
    navigate("/forget-password");
  }

  return (
    <div className="">
      <Helmet>
        <title> Login </title>
      </Helmet>
      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
          <h3 class="text-gray-800 text-3xl text-center font-bold"> Log in</h3>
          <form onSubmit={handleSubmit} className="card-body">
            <button onClick={handleGoogleSignIn} type="button" class="w-full flex items-center justify-center gap-4 py-2.5 px-4 text-sm tracking-wide font-bold text-gray-800 border border-gray-300 rounded-md bg-transparent hover:bg-gray-50 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" class="inline" viewBox="0 0 512 512">
                <path fill="#fbbd00"
                  d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                  data-original="#fbbd00" />
                <path fill="#0f9d58"
                  d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                  data-original="#0f9d58" />
                <path fill="#31aa52"
                  d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                  data-original="#31aa52" />
                <path fill="#3c79e6"
                  d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                  data-original="#3c79e6" />
                <path fill="#cf2d48"
                  d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                  data-original="#cf2d48" />
                <path fill="#eb4132"
                  d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                  data-original="#eb4132" />
              </svg>
              Log in with google
            </button>
            <button onClick={handleGithubSignIn} type="button" class="w-full flex items-center justify-center gap-4 py-2.5 px-4 text-sm tracking-wide font-bold text-gray-800 border border-gray-300 rounded-md bg-transparent hover:bg-gray-50 focus:outline-none">
              <div className="text-xl"> <FaGithub></FaGithub> </div>
              Log in with github
            </button>
            <div class="mt-6 flex items-center gap-4">
              <hr class="w-full border-gray-300" />
              <p class="text-sm text-gray-800 text-center">or</p>
              <hr class="w-full border-gray-300" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                ref={emailRef} 
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="email" className="input input-bordered"
                required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Password </span>
              </label>
              <input  name="password" type="password" placeholder="password" className="input input-bordered" required />
              {
                error.login && (
                  <label className="label text-sm text-red-600">
                    {error.login}
                  </label>
                )
              }
              <label onClick={handleForgotPassword} className="label">
                <a href="#" className="label-text-alt link link-hover text-blue-900 hover:text-blue-700 font-semibold">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#0B3169] hover:bg-blue-800 text-white rounded-md"> Login </button>
            </div>
          </form>
          <p class="text-gray-800 text-sm flex items-center justify-center">Don't have an account 
            <Link to="/register" class="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"> Register here </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;