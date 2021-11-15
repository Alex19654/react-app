import './App.css';
import {Component} from 'react';
import React from 'react';
import Dashboard from "./components/dashboards/Dashboard";
import Albums from "./components/albums/Albums";
import HeaderComponent from "./components/header/Header";
import Users from "./components/users/Users";
import Modal from "./components/modal/Modal";
import { ThemeContext, themes } from './components/theme/ThemeStyles';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

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
            <Layout className="layout">
              <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <HeaderComponent />
              </Header>
              <hr />
              <Content className={this.state.theme} style={{ marginTop: 64, height: "calc(100vh)"}}>
                <Switch>
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/dashboard/modal" component={Modal} />
                  <Route exact path="/albums" component={Albums} />
                  <Route exact path="/users" component={Users} />
                </Switch>
              </Content>
            </Layout>
          </ThemeContext.Provider>
        </Router>
      </>
    )
  }

}



export default App;
