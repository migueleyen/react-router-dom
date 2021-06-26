import { useState } from "react";

function AuthProvider() {
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

  return <div></div>;
}

export default AuthProvider;
