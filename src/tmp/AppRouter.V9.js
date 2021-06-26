import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar.V8";

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
        <Route path="/contact" component={Contact} />

        <Route path="/about">
          <About />
        </Route>
        {/* exact path evit duplicated Match  */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
