import {createAction} from "@reduxjs/toolkit";

const addContactRequest = createAction("contact/addRequest");
const addContactSuccess = createAction("contact/addSuccess");
const addContactError = createAction("contact/addError");

const getAllContactsRequest = createAction("contact/getAllRequest");
const getAllContactsSuccess = createAction("contact/getAllSuccess");
const getAllContactsError = createAction("contact/getAllError");

const deleteContactRequest = createAction("contact/deleteRequest");
const deleteContactSuccess = createAction("contact/deleteSuccess");
const deleteContactError = createAction("contact/deleteError");

const changeFilter = createAction("contact/changeFilter");

const toggleNotify = createAction("contact/toggleNotify");

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  getAllContactsRequest,
  getAllContactsSuccess,
  getAllContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
  toggleNotify
}