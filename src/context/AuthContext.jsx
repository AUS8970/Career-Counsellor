import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  };

  const logInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        if (user) {
          toast.success("Logged in with Google!");
        }
        return result;
      })
      .catch((error) => {
        toast.error("Failed to log in with Google: " + error.message);
        throw error;
      });
  };
  
  const logInWithGithub = () => {
    return signInWithPopup(auth, githubProvider)
      .then((result) => {
        toast.success("Logged in with GitHub!");
        return result;
      }) .catch((error) => {
        toast.error("Failed to log in with GitHub: " + error.message);
        throw error;
      });
  }

  const userLogin = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      toast.success("Logged in successfully!");
      return res;
    }) 
    .catch((err) => {
      toast.error("Login failed: " + err.message);
    })
    .finally(() => setLoading(false));
  };

  const logOut = () => {
    setLoading(true);
    signOut(auth)
    .then(() => {
      toast.success("Logged out successfully!");
    }) .catch((err) => {
      toast.error("Logout failed: " + err.message)
    })
    .finally(() => setLoading(false));
  };

  const updateUserProfile = (updatedData) => {
    updateCurrentUser(auth.currentUser, updatedData)
    .then(() => {
      toast.success("Profile updated successfully!");
    }) .catch((error) => {
      toast.error("Failed to update profile: " + error.message);
    });
  }

  const authInfo = {
    user, 
    setUser,
    createNewUser,
    logOut,
    userLogin,
    loading,
    updateUserProfile,
    logInWithGoogle,
    logInWithGithub
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    }
  }, []);

  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>
};

export default AuthProvider;