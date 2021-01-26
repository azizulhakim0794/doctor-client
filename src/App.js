import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import About from './components/About/About'
import NoMatch from './components/NoMatch/NoMatch';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <div>
    <Router>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
