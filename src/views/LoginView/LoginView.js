import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import authOperations from "../../redux/auth/authOperations";
import styles from "./LoginView.module.scss";

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  }
  static propTypes = {
    onLogin: PropTypes.func,
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onLogin({...this.state});
    this.setState({email: "", password: ""});
  }

  render() {
    const inputStyles = [styles.formElement, styles.formInput].join(" ");
    const {email, password} = this.state;
    return (
      <div className="container">
        <h1 className={styles.title}>Login page</h1>
        <form className={styles.formRegister} type="post" onSubmit={this.handleSubmit}>
          <label className={styles.formElement} htmlFor="email">Email</label>
          <input className={inputStyles} type="email" name="email"
                 onChange={this.handleChange} value={email}
          />
          <label className={styles.formElement} htmlFor="password">Password</label>
          <input className={inputStyles} type="password" name="password"
                 onChange={this.handleChange} value={password}
          />
          <br/>
          <button className={styles.btn} type="submit">Log in</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.login,
}

export default connect(null, mapDispatchToProps)(LoginView);