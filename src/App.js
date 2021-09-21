import './App.css';
import {Component} from 'react';
import Dashboard from "./components/dashboards/Dashboard";
import Albums from "./components/albums/Albums";
import Header from "./components/header/Header";
import Users from "./components/users/Users";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {

  render() {
    return (
      <>
        <Router>
          <Header />
          <hr />
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/albums" component={Albums} />
            <Route exact path="/users" component={Users} />
          </Switch>

        </Router>
      </>
    )
  }

}



export default App;
