import React, {Component} from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import ContactForm from "../../components/ContactForm/ContactForm";
import SectionContacts from "../../components/SectionContacts/SectionContacts";
import Filter from "../../components/Filter/Filter";
import ContactNotifyExist from "../../components/ContactNotifyExist/ContactNotifyExist";
import Contact from "../../components/Contact/Contact";
import contactsSelectors from "../../redux/contacts/contactsSelectors";
import contactsActions from "../../redux/contacts/contactsActions";
import contactsOperations from "../../redux/contacts/contactsOperations";
import "./ContactsAnimation.css";
import authSelectors from "../../redux/auth/authSelectors";

class ContactsView extends Component {
  static propTypes = {
    visibleContacts: PropTypes.arrayOf(PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })),
    contacts: PropTypes.arrayOf(PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })),
    notify: PropTypes.bool,
    isAuthenticated: PropTypes.string,
    onHiddenNotify: PropTypes.func,
    onGetAllContacts: PropTypes.func,
  }

  componentDidUpdate(prevProps) {
    const {notify} = this.props;
    if (notify) {
      setTimeout(this.hiddenNotify, 2500);
    }
  }

  componentDidMount() {
    this.props.onGetAllContacts();
  }

  hiddenNotify = () => {
    this.props.onHiddenNotify();
  }

  render() {
    const {visibleContacts, contacts, notify} = this.props;
    return (
      <div>
        <CSSTransition timeout={250} in={notify} classNames="ContactNotify" unmountOnExit>
          <ContactNotifyExist/>
        </CSSTransition>
        <ContactForm/>
        <SectionContacts title={"Contacts"}>
          <CSSTransition timeout={250} in={contacts.length > 1} classNames="FilterAnimation" unmountOnExit>
            <Filter/>
          </CSSTransition>
          <TransitionGroup component="ul" in={(visibleContacts.length > 0).toString()}>
            {visibleContacts.map(({name, number, id}) => (
              <CSSTransition key={id} timeout={250} classNames="ContactsItem">
                <Contact name={name} number={number} id={id}/>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </SectionContacts>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  visibleContacts: contactsSelectors.getVisibleContacts(state),
  contacts: contactsSelectors.getContacts(state),
  notify: contactsSelectors.getNotify(state),
  isAuthenticated: authSelectors.isAuthenticated(state),
});

const mapDispatchToProps = {
  onHiddenNotify: contactsActions.toggleNotify,
  onGetAllContacts: contactsOperations.getAllContacts,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);