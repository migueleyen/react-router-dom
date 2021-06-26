import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CategoriesPage from "./CategoriesPage.V13";
import NavBar from "./NavBar.V14";
import PaymentPage from "./PaymentPage.V14";
import PrivateRoute from "./PrivateRoute.V14";
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
        {/* Route[path='/' component={}] */}
        <PrivateRoute exact path="/payment" component={PaymentPage} />
        <Route path="/categories" component={CategoriesPage}></Route>
        <Route path="/profile/:username" component={UserProfilePage} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}
