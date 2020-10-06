import React, {Component} from "react";
import styles from "./HomeView.module.scss";

class HomeView extends Component {
  render() {
    return (
      <div className="container">
        <h1 className={styles.title}>Home page</h1>
      </div>
    );
  }
}

export default HomeView;