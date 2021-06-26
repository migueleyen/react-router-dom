import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function AppRouter() {
  return (
    // Router>Route[path='/']*2
    <Router>
      <Switch>
        <Route exact path="/contact">
          <h1>Contact</h1>
        </Route>
        <Route exact path="/about">
          <h1>About</h1>
        </Route>
        {/* exact path evit duplicated Match  */}
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route path="*">
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
    </Router>
  );
}
