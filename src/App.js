import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/cart">
          <Cart/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
