import { Redirect, Route, useLocation } from "react-router-dom";
import { useAuthContext } from "./AuthProvider.V19";
/* export default function PrivateRoute(props) {
  return Route[exact={props.exact} path={props.path} component={props.component}]);
} */

const user = null;
// const user={id:1,username:'miki'}

export default function PrivateRoute({ component: Component, ...rest }) {
  const location = useLocation();

  console.log(useAuthContext(), "useAuthContext??");
  const auth = useAuthContext();

  console.log(auth.isLogged(), "isLogged??");

  return (
    // Route[{...rest}]>{user?<Component/>:<Redirect to='/login'/>}
    <Route {...rest}>
      {auth.isLogged() ? (
        <Component />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location },
          }}
        />
      )}
    </Route>
  );
}
