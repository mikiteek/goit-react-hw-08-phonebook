import axios from "axios";
import contactsActions from "./contactsActions";

const addContact = ({name, number}) => dispatch => {
  dispatch(contactsActions.addContactRequest());

  axios
    .post("/contacts", {name, number})
    .then(({data}) => dispatch(contactsActions.addContactSuccess(data)))
    .catch(error => dispatch(contactsActions.addContactError(error)));
};

const getAllContacts = () => dispatch => {
  dispatch(contactsActions.getAllContactsRequest());

  axios
    .get("/contacts")
    .then(({data}) => dispatch(contactsActions.getAllContactsSuccess(data)))
    .catch(error => dispatch(contactsActions.addContactError(error)));
}

const deleteContact = id => dispatch => {
  dispatch(contactsActions.deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.deleteContactSuccess(id)))
    .catch(error => dispatch(contactsActions.deleteContactError(error)));
}

export default {
  addContact,
  getAllContacts,
  deleteContact,
}