import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import authSelectors from "../../redux/auth/authSelectors";

const PublicRoute = ({component: Component, isAuthenticated, ...routeProps}) =>
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated && routeProps.restricted ? <Redirect to={"/contacts"}/>: <Component {...props}/>
    }
  />

PublicRoute.propTypes = {
  component: PropTypes.any,
  isAuthenticated: PropTypes.bool,
  routeProps: PropTypes.arrayOf(PropTypes.any),
}

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);