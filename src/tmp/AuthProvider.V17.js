import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  // Set Global Variables : Local,Sesion Storage or Cookies
  const [user, setUser] = useState(null);

  const contextValue = {
    user, //default state
    login() {
      setUser({ id: 1, username: "mikiyo" });
    },
    logout() {
      setUser(null);
    },
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
