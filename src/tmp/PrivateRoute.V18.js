import { Redirect, Route } from "react-router-dom";
import { useAuthContext } from "./AuthProvider.V18";
/* export default function PrivateRoute(props) {
  return Route[exact={props.exact} path={props.path} component={props.component}]);
} */

const user = null;
// const user={id:1,username:'miki'}

export default function PrivateRoute({ component: Component, ...rest }) {
  console.log(useAuthContext(), "useAuthContext??");
  const auth = useAuthContext();
  return (
    // Route[{...rest}]>{user?<Component/>:<Redirect to='/login'/>}
    <Route {...rest}>
      {auth.user ? <Component /> : <Redirect to="/login" />}
    </Route>
  );
}
