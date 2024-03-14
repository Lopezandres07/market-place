import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const initialStateToken = localStorage.getItem("token") || null;

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(initialStateToken);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
      setUserData(null);
    }
  }, [token]);

  const createUser = async (data) => {
    const response = await fetch("http://localhost:3000/api/v1/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    });
    const user = await response.json();
    return user;
  };

  const loginWithEmailAndPassword = async (data) => {
    const response = await fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    });
    const user = await response.json();
    setToken(user.token || null);
    if (user.token && user.userData) {
      navigate(user.userData.role_id === 1 ? "/admin/products" : "/homeUser");
    }
    return user;
  };

  const loginWithGoogle = async (user) => {
    const data = jwtDecode(user);
    const response = await fetch("http://localhost:3000/api/v1/googleLogin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    });
    const googleUser = await response.json();
    setToken(googleUser.token || null);
    if (googleUser.token && googleUser.userData) {
      navigate(
        googleUser.userData.role_id === 1 ? "/admin/products" : "/homeUser"
      );
    }
    return googleUser;
  };

  const logout = () => {
    setToken(null);
    setUserData(null);
  };

  const updateUserProfile = async (userId, newData) => {
    const response = await fetch(`http://localhost:5000/users/${userId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
    const updateUser = await response.json();
    setUserData(updateUser);
  };

  const getUserData = async (userId) => {
    const response = await fetch(`http://localhost:5000/users/${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const user = await response.json();
    setUserData(user);
  };

  return (
    <UserContext.Provider
      value={{
        createUser,
        loginWithEmailAndPassword,
        loginWithGoogle,
        token,
        logout,
        updateUserProfile,
        getUserData,
        userData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
