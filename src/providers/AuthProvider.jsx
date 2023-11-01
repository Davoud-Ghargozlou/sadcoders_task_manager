import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const authContext = createContext();

const useAuthContext = () => {
  return useContext(authContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [accessToken, setAccessToken] = useState(() =>
    localStorage.getItem("accessToken")
  );

  const isLoggedIn = !!accessToken;

  const saveAccessToken = (token) => {
    localStorage.setItem("accessToken", token);
    setAccessToken(token);
  };

  const logout = () => {
    setAccessToken(null);
    localStorage.removeItem("accessToken");
  };

  const fetchCurrentUser = async () => {
    const result = await axios.get("http://demo2578450.mockable.io/auth/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    setCurrentUser(result.data);
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchCurrentUser();
    }
  }, [isLoggedIn]);

  const values = {
    logout,
    isLoggedIn,
    currentUser,
    saveAccessToken,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export { AuthProvider, useAuthContext };
