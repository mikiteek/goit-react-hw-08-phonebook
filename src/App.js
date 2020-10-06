import React, {Component} from 'react';
import {connect} from "react-redux";
import {Route, Switch} from "react-router-dom";
import RegisterView from "./views/RegisterView/RegisterView";
import LoginView from "./views/LoginView/LoginView";
import authOperations from "./redux/auth/authOperations";
import Layout from "./components/Layout/Layout";
import Navigation from "./components/Navigation/Navigation";
import ContactsView from "./views/ContactsView/ContactsView";

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {

    return (
      <Layout>
        <Navigation/>
        <Switch>
          <Route path="/register" exact component={RegisterView}></Route>
          <Route path="/login" exact component={LoginView}></Route>
          <Route path="/contacts" exact component={ContactsView}></Route>
        </Switch>
      </Layout>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
}

export default connect(null, mapDispatchToProps)(App);
