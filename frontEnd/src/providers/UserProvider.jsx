import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const initialStateToken = localStorage.getItem("token") || null;
const initialStateUserData =
  JSON.parse(localStorage.getItem("userData")) || null;

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(initialStateToken);
  console.log("Token almacenado en el contexto:", token);
  const [userData, setUserData] = useState(initialStateUserData);
  const navigate = useNavigate();
  // console.log(userData);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }

    if (userData) {
      localStorage.setItem("userData", JSON.stringify(userData));
    } else {
      localStorage.removeItem("userData");
    }
  }, [token, userData]);

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
    console.log(user);
    console.log("Token después de iniciar sesión:", user.token);
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

  const updateUserProfile = async (data) => {
    console.log("Token utilizado para la solicitud de actualización:", token);
    const response = await fetch(
      `http://localhost:3000/api/v1/user/${userData.id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const updateUser = await response.json();
    setUserData(updateUser);
  };

  const getUserData = async (id) => {
    console.log(id);

    const response = await fetch(`http://localhost:3000/api/v1/user/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const user = await response.json();
    console.log(user);

    setUserData(user.userData);
  };

  const logout = () => {
    setToken(null);
    setUserData(null);
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
