import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import authOperations from "../../redux/auth/authOperations";
import styles from "./RegisterView.module.scss";


class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  }
  static propTypes = {
    onRegister: PropTypes.func,
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onRegister({...this.state});
    this.setState({name: "", email: "", password: ""});
  }

  render() {
    const inputStyles = [styles.formElement, styles.formInput].join(" ");
    const {email, password, name} = this.state;
    return (
      <div className="container">
        <h1 className={styles.title}>Register page</h1>
        <form className={styles.formRegister} type="post" onSubmit={this.handleSubmit}>
          <label className={styles.formElement} htmlFor="name">Name</label>
          <input className={inputStyles} type="text" name="name"
                 onChange={this.handleChange} value={name}
          />
          <label className={styles.formElement} htmlFor="email">Email</label>
          <input className={inputStyles} type="email" name="email"
                 onChange={this.handleChange} value={email}
          />
          <label className={styles.formElement} htmlFor="password">Password</label>
          <input className={inputStyles} type="password" name="password"
                 onChange={this.handleChange} value={password}
          />
          <br/>
          <button className={styles.btn} type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = {
 onRegister: authOperations.register,
}

export default connect(null, mapDispatchToProps)(RegisterView);