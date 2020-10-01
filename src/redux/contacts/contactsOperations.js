import axios from "axios";
import contactsActions from "./contactsActions";

axios.defaults.baseURL = "http://localhost:2000";


const addContact = ({name, number}) => dispatch => {
  dispatch(contactsActions.addContactRequest());

  axios
    .post("/contacts", {name, number})
    .then(({data}) => dispatch(contactsActions.addContactSuccess(data)))
    .catch(error => dispatch(contactsActions.addContactError(error)));
};

const getAllContacts = contacts => dispatch => {
  dispatch(contactsActions.getAllContactsRequest());

  axios
    .get("/contacts", contacts)
    .then(({data}) => dispatch(contactsActions.getAllContactsSuccess(data)))
    .catch(error => dispatch(contactsActions.addContactError(error)));
}

export default {
  addContact,
  getAllContacts,
}