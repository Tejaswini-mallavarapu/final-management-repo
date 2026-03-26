import { createContext, useContext, useState } from "react";
import { getAuth, setAuth, clearAuth } from "../utils/localStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuthState] = useState(getAuth());

  const login = (data) => {
    setAuth(data);
    setAuthState(data);
  };

  const logout = () => {
    clearAuth();
    setAuthState({ token: null, user: null });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);