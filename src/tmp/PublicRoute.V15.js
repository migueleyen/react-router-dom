import { Route } from "react-router-dom";
export default function PublicRoute(props) {
  return (
    //   Route[exact={props.exact} path={props.path} component={props.component}]
    // Route[{...props}]
    <Route {...props}></Route>
  );
}
