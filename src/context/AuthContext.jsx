// import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser } from "firebase/auth";
// import { auth } from "../firebase/firebase.init";
// import { createContext, useEffect, useState } from "react";

// export const AuthContext = createContext();

// const googleProvider = new GoogleAuthProvider();
// const githubProvider = new GithubAuthProvider();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   console.log(user)

//   const createNewUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const logInWithGoogle = () => {
//     signInWithPopup(auth, googleProvider)
//   }

//   const logInWithGithub = () => {
//     signInWithPopup(auth, githubProvider)
//   }

//   const userLogin = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password)
//   };

//   const logOut = () => {
//     setLoading(true);
//     return signOut(auth);
//   };

//   const updateUserProfile = (updatedData) => {
//     return updateCurrentUser(auth.currentUser, updatedData)
//   }

//   const authInfo = {
//     user, 
//     setUser,
//     createNewUser,
//     logOut,
//     userLogin,
//     loading,
//     updateUserProfile,
//     logInWithGoogle,
//     logInWithGithub
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false)
//     });
//     return () => {
//       unsubscribe();
//     }
//   }, []);

//   return <AuthContext.Provider value={authInfo}>
//     {children}
//   </AuthContext.Provider>
// };

// export default AuthProvider;


import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // const createNewUser = (email, password) => {
  //   setLoading(true);
  //   return createUserWithEmailAndPassword(auth, email, password);
  // };

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        toast.success("Account created successfully!");
        return result;
      })
      .catch((error) => {
        toast.error("Failed to create account: " + error.message);
      })
      .finally(() => setLoading(false));
  };

  const logInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        toast.success("Logged in with Google!");
        return result;
      })
      .catch((error) => {
        toast.error("Failed to log in with Google: " + error.message);
      });
  };

  const logInWithGithub = () => {
    return signInWithPopup(auth, githubProvider)
      .then((result) => {
        toast.success("Logged in with GitHub!");
        return result;
      })
      .catch((error) => {
        toast.error("Failed to log in with GitHub: " + error.message);
      });
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        toast.success("Logged in successfully!");
        return result;
      })
      .catch((error) => {
        toast.error("Login failed: " + error.message);
      })
      .finally(() => setLoading(false));
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => {
        toast.success("Logged out successfully!");
      })
      .catch((error) => {
        toast.error("Logout failed: " + error.message);
      })
      .finally(() => setLoading(false));
  };

  const updateUserProfile = (updatedData) => {
    return updateCurrentUser(auth.currentUser, updatedData)
      .then(() => {
        toast.success("Profile updated successfully!");
      })
      .catch((error) => {
        toast.error("Failed to update profile: " + error.message);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    userLogin,
    loading,
    updateUserProfile,
    logInWithGoogle,
    logInWithGithub,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;