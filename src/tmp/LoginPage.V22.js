import { useHistory, useLocation } from "react-router-dom";
import { useAuthContext } from "./AuthProvider.V19";

// const auth = useAuthContext();

function LoginPage() {
  const history = useHistory();
  const location = useLocation();
  // prop1?.prop2 if prop1=null && undefined || prop2 pass
  const prevObjURL = location.state?.from;
  console.log(prevObjURL, "from_location??");

  const auth = useAuthContext();

  const handleLogin = () => {
    auth.login();
    history.push(prevObjURL || "/");
  };
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
