import { Redirect, Route } from "react-router-dom";
/* export default function PrivateRoute(props) {
  return Route[exact={props.exact} path={props.path} component={props.component}]);
} */

const user = null;
// const user={id:1,username:'miki'}

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    // Route[{...rest}]>{user?<Component/>:<Redirect to='/login'/>}
    <Route {...rest}>{user ? <Component /> : <Redirect to="/login" />}</Route>
  );
}
