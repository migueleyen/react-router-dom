import { useHistory, useLocation } from "react-router-dom";
import { useAuthContext } from "./AuthProvider.V19";

// const auth = useAuthContext();

function LoginPage() {
  const history = useHistory();
  const location = useLocation();
  console.log(location, "from_location??");
  const auth = useAuthContext();

  const handleLogin = () => {
    auth.login();
    history.push({ pathname: "/payment" });
  };
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
