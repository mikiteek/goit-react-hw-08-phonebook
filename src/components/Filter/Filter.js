import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";
import contactsSelectors from "../../redux/contacts/contactsSelectors";
import styles from "./Filter.module.scss";
import "./FilterAnimation.css";

const Filter = ({onChangeFilter, value}) => (
  <div className={styles.findBlock}>
    <label className={styles.findLabel}>Find contacts by name</label>
    <input className={styles.findInput} value={value} type="text" name="filter" onChange={({target}) => onChangeFilter(target.value)}/>
  </div>
);

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  value: PropTypes.string
}

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.changeFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);