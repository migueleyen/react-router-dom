import { BrowserRouter as Router, Route } from "react-router-dom";

export default function AppRouter() {
  return (
    // Router>Route[path='/']*2
    <Router>
      <Route path="/contact">
        <h1>Contact</h1>
      </Route>
      <Route path="/about">
        <h1>About</h1>
      </Route>
      {/* exact path evit duplicated Match  */}
      <Route exact path="/">
        <h1>Home</h1>
      </Route>
      <Route path="*">
        <h1>404 Not Found</h1>
      </Route>
    </Router>
  );
}
