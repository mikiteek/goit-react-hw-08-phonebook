import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux"
import authSelectors from "../../redux/auth/authSelectors";
import UserMenu from "../UserMenu/UserMenu";
import routes from "../../routes";
import styles from "./Navigation.module.scss";

class Navigation extends Component {
  render() {
    const {isAuthenticated} = this.props;
    return (
      <div className={styles.headerBlock}>
        <header className={styles.header}>
          <nav className="container">
            <ul className={styles.navList}>
              <li className={styles.navListItem}>
                <NavLink exact to={"/"} className={styles.navLink} activeClassName={styles.navLinkActive}>Home</NavLink>
              </li>
              {
                isAuthenticated ? (
                  <>
                    <li className={styles.navListItem}>
                      <NavLink to={"/contacts"} className={styles.navLink} activeClassName={styles.navLinkActive}>Contacts</NavLink>
                    </li>
                    <li className={styles.navListItem}>
                      <UserMenu/>
                    </li>
                  </>
                ) :
                  (
                    <>
                      <li className={styles.navListItem}>
                        <NavLink to={"/login"} className={styles.navLink} activeClassName={styles.navLinkActive}>Login</NavLink>
                      </li>
                      <li className={styles.navListItem}>
                        <NavLink to={"/register"} className={styles.navLink} activeClassName={styles.navLinkActive}>Register</NavLink>
                      </li>
                    </>
                  )
              }
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
})

export default connect(mapStateToProps)(Navigation);