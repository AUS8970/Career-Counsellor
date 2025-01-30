import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    if (!name.trim() || !photoURL.trim()) {
      toast.error("Both fields are required.");
      return;
    }

    try {
      setIsUpdating(true);
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="">
      <Helmet>
        <title> My Profile </title>
      </Helmet>
      <div className="container mx-auto mt-10 p-6 bg-white rounded-md shadow-lg mb-10">
        <h1 className="text-2xl font-bold mb-4 text-center"> My Profile </h1>
        <div className="flex flex-col items-center gap-6">
          <img src={user?.photoURL || "https://via.placeholder.com/150"} alt="Profile" className="w-32 h-32 rounded-full object-cover" />
          {
            user ? <div className="">
              <h1 className="text-xl font-bold text-center"> {user?.displayName} </h1>
              <h1 className="text-md text-center"> {user?.email} </h1>
            </div> : ""
          }
          <form className="w-full max-w-md" onSubmit={handleUpdateProfile}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium mb-2"> Full Name </label>
              <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name"/>
            </div>
            <div className="mb-4">
              <label htmlFor="photoURL" className="block text-lg font-medium mb-2"> Profile Picture URL </label>
              <input id="photoURL" type="text" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter profile picture URL"/>
            </div>
            <button type="submit" className={`w-full py-2 px-4 rounded-md text-white text-lg font-semibold ${ isUpdating ? "bg-gray-400 cursor-not-allowed" : "bg-[#0B3169] hover:bg-blue-900"
              }`}
              disabled={isUpdating}
            >
              {isUpdating ? "Updating..." : "Update Profile"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;