import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import authSelectors from "../../redux/auth/authSelectors";

const PrivateRoute = ({component: Component, isAuthenticated, ...routeProps}) =>
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated ? <Component {...props}/> : <Redirect to="/login"/>
    }
  />;

PrivateRoute.propTypes = {
  component: PropTypes.any,
  isAuthenticated: PropTypes.string,
  routeProps: PropTypes.arrayOf(PropTypes.any),
}

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);