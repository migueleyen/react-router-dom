import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CategoriesPage from "./CategoriesPage.V22";
import DashboardPage from "./DashboardPage.V25";
import LoginPage from "./LoginPage.V22";
import NavBar from "./NavBar.V25";
import PaymentPage from "./PaymentPage.V14";
import PrivateRoute from "./PrivateRoute.V21";
import PublicRoute from "./PublicRoute.V15";
import RegisterPage from "../RegisterPage";
import UserProfilePage from "./UserProfilePage.V10";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
};
const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};
const NotFound = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
    </div>
  );
};

export default function AppRouter() {
  return (
    // // Menu NavBar in Router
    // <NavBar />

    // Router>Route[path='/']*2
    <Router>
      {/* Menu NavBar in Router  */}
      <NavBar />
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={RegisterPage} />
        <PrivateRoute exact path="/payment" component={PaymentPage} />
        <PrivateRoute exact path="/dashboard" component={DashboardPage} />

        {/* Route[path='/' component={}] */}
        <PublicRoute path="/categories" component={CategoriesPage} />
        <PublicRoute path="/profile/:username" component={UserProfilePage} />
        <PublicRoute path="/contact" component={Contact} />
        <PublicRoute path="/about" component={About} />
        <PublicRoute path="/" component={Home} />
        <PublicRoute path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}
