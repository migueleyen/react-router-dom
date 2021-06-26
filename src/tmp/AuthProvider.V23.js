import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default function AuthProvider({ children }) {
  // Set Global Variables : Local,Sesion Storage or Cookies
  const [user, setUser] = useState(
    // trae user object || null
    JSON.parse(localStorage.getItem("user")) || null
  );

  // update ()=>{localStorage key "user" value} for each change [user] value dependency : useEffect((cb)=>{},[dep])
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const contextValue = {
    user, //default state
    login() {
      setUser({ id: 1, username: "mikiyo" });
    },
    logout() {
      setUser(null);
    },
    isLogged() {
      /* if user=null && !!user=false
        if user={...}&& !!user=true  */
      console.log(user, "user??");
      return !!user;
    },
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

// export default AuthProvider;
