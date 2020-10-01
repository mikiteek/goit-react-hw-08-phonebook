import {createAction} from "@reduxjs/toolkit";

const addContactRequest = createAction("contact/addRequest");
const addContactSuccess = createAction("contact/addSuccess");
const addContactError = createAction("contact/addError");


const deleteContact = createAction("contact/delete");

const changeFilter = createAction("contact/changeFilter");

const toggleNotify = createAction("contact/toggleNotify");

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContact,
  changeFilter,
  toggleNotify
}