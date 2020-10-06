import React, {Component} from 'react';
import {connect} from "react-redux";
import {Switch} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import authOperations from "./redux/auth/authOperations";
import Layout from "./components/Layout/Layout";
import Navigation from "./components/Navigation/Navigation";
import routes from "./routes";

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Layout>
        <Navigation/>
        <Switch>
          {routes.map(route => {
            return route.private ?
              <PrivateRoute key={route.label} {...route}/> :
              <PublicRoute key={route.label} {...route}/>
          })}
        </Switch>
      </Layout>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
}

export default connect(null, mapDispatchToProps)(App);
