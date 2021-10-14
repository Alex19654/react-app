import './App.css';
import {Component} from 'react';
import React from 'react';
import Dashboard from "./components/dashboards/Dashboard";
import Albums from "./components/albums/Albums";
import Header from "./components/header/Header";
import Users from "./components/users/Users";
import { ThemeContext, themes } from './components/theme/ThemeStyles';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: themes.lightGreen,
      themeToggler: this.toggleTheme
    }
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme = () => {
    this.setState( (state) => ({
      theme: (state.theme === themes.lightGreen) ? themes.lightBlue : themes.lightGreen
    }))
  }

  render() {
    return (
      <>
        <Router>
          <ThemeContext.Provider value={this.state}>
            <Header />
            <hr />
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/albums" component={Albums} />
              <Route exact path="/users" component={Users} />
            </Switch>
          </ThemeContext.Provider>
        </Router>
      </>
    )
  }

}



export default App;
