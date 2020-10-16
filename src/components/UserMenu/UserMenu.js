import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import authSelectors from "../../redux/auth/authSelectors";
import authOperations from "../../redux/auth/authOperations";
import styles from "./UserMenu.module.scss";



class UserMenu extends Component {
  static propTypes = {
    user: PropTypes.exact({
      name: PropTypes.string,
      email: PropTypes.string,
    }),
    onLogout: PropTypes.func,
  }
  render() {
    const {user, onLogout} = this.props;
    return (
      <div className={styles.userMenuBlock}>
        <p className={styles.email}>{user.email},</p>
        <button className={styles.btn} type="button" onClick={onLogout}>Log out</button>
      </div>
    );
  }
}

const mapStatToProps = state => ({
  user: authSelectors.user(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
}

export default connect(mapStatToProps, mapDispatchToProps)(UserMenu);