import Navbar from "../components/Navber";
import Footer from "../components/Footer";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";

const Register = () => {
  const [ error, setError ] = useState([]);
  const navigate = useNavigate();
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const auth = getAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    if (name.length < 5) {
      setError({ ...error, name: "Name must be more than 5 characters long." });
      return;
    }
    if (password.length < 6) {
      setError({ ...error, password: "Password must be at least 6 characters." });
      return;
    }

    // createNewUser(email, password)
    // .then((result) => {
    //   const newUser = result.user;
    //   setUser(newUser)
    //   updateUserProfile({ displayName: name, photoURL: photo })
    //   .then(() => {
    //     navigate("/")
    //     console.log("Profile updated successfully!");
    //   })
    //   .catch((error) => {
    //     console.error("Error updating profile: ", error);
    //   });
    // })
    // .catch((err) => {
    //   const errorCode = err.code;
    //   setError({ ...error, firebase: handleErrorMessage(errorCode) });
    // });

    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const user = result.user;

      // Update user profile (display name and photo URL)
      updateProfile(user, {
        displayName: name,
        photoURL: photo,
      })
      .then(() => {
        console.log("User profile updated!");
        navigate("/");  // Redirect to home or another page
      })
      .catch((error) => {
        console.error("Error updating user profile:", error.message);
        setError({ ...error, updateProfile: error.message });
      });
    })
    .catch((error) => {
      console.error("Error creating user:", error.message);
      setError({ ...error, createUser: error.message });
    });
  };

  // const handleErrorMessage = (code) => {
  //   switch (code) {
  //     case "auth/email-already-in-use":
  //       return "This email is already in use.";
  //     case "auth/weak-password":
  //       return "The password is too weak.";
  //     case "auth/invalid-email":
  //       return "Invalid email address.";
  //     default:
  //       return "An unexpected error occurred. Please try again.";
  //   }
  // };

  return (
    <div className="">
      <div className="min-h-screen flex justify-center items-center">
        <div className="card w-full max-w-lg shrink-0 rounded p-10">
          <h2 className="text-2xl font-semibold text-center"> Register your account </h2>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Name </span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered" required
              />
              {
                error.name && <label className="label text-xs text-red-600">
                  {error.name}
                </label>
              }
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Photo URL </span>
              </label>
              <input 
                name="photo"
                type="text" 
                placeholder="photo-url" className="input input-bordered" required 
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Email </span>
              </label>
              <input 
                name="email"
                type="email" 
                placeholder="email" className="input input-bordered" 
                required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Password </span>
              </label>
              <input 
                name="password"
                type="password" placeholder="password" className="input input-bordered"
                required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover"> Forgot password? </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#0B3169] hover:bg-blue-800 text-white rounded-md"> Register </button>
            </div>
          </form>
          <p className="text-center font-semibold">
            Already Have An Account ?
            <Link className="text-[#0B3169]" to="/login"> Login </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;