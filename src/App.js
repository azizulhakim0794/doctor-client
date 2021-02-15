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
import Appointment from './components/Appointment/Appointment/Appiontment';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Dashbord from './components/Dashbord/Dashbord/Dashbord';
import AllPatients from './components/Dashbord/AllPatients/AllPatients';
import AddDoctors from './components/Dashbord/AddDoctors/AddDoctors';
export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    displayName: '',
    email: '',
    password: '',
    error: '',
    success: false,
  })
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <PrivateRoute path="/appointment">
            <Appointment />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/dashboard/allpatients">
            <AllPatients />
          </Route>
          <Route path="/dashboard/addDoctors">
            <AddDoctors />
          </Route>
          <Route exact path="/dashboard">
            <Dashbord/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
