import React, {Component} from "react";
import {connect} from "react-redux";
import authSelectors from "../../redux/auth/authSelectors";
import styles from "./UserMenu.module.scss";

class UserMenu extends Component {
  render() {
    const {email} = this.props.user;
    return (
      <div className={styles.userMenuBlock}>
        <p className={styles.email}>{email},</p>
        <button className={styles.btn} type="submit">Log out</button>
      </div>
    );
  }
}

const mapStatToProps = state => ({
  user: authSelectors.user(state),
});

export default connect(mapStatToProps)(UserMenu);