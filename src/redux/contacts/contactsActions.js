import {createAction} from "@reduxjs/toolkit";

const addContactRequest = createAction("contact/addRequest");
const addContactSuccess = createAction("contact/addSuccess");
const addContactError = createAction("contact/addError");

const getAllContactsRequest = createAction("contact/getAllRequest");
const getAllContactsSuccess = createAction("contact/getAllSuccess");
const getAllContactsError = createAction("contact/getAllError");

const deleteContact = createAction("contact/delete");

const changeFilter = createAction("contact/changeFilter");

const toggleNotify = createAction("contact/toggleNotify");

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  getAllContactsRequest,
  getAllContactsSuccess,
  getAllContactsError,
  deleteContact,
  changeFilter,
  toggleNotify
}