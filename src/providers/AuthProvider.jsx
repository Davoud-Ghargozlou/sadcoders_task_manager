import { createContext, useContext } from "react";
import PropTypes from "prop-types";

const authContext = createContext();

const useAuthContext = () => {
  return useContext(authContext);
};

const AuthProvider = ({ children }) => {
  const accessToken = localStorage.getItem("accessToken");

  const values = {
    isLoggedIn: !!accessToken,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export { AuthProvider, useAuthContext };
