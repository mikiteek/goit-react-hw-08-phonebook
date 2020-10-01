import {combineReducers} from "redux";
import {createReducer} from "@reduxjs/toolkit";
import contactsActions from "./contactsActions";

const items = createReducer([], {
  [contactsActions.addContactSuccess]: (state, action) => [...state, action.payload],
  [contactsActions.getAllContactsSuccess]: (state, action) => action.payload,
  [contactsActions.deleteContactSuccess]: (state, action) => state.filter(contact => contact.id !== action.payload),
});

const filter = createReducer("", {
  [contactsActions.changeFilter]: (state, action) => action.payload,
})

const notify = createReducer(false, {
  [contactsActions.toggleNotify]: state => !state,
})


export default combineReducers({
  items, // items: items,
  filter, // filter: filter,
  notify,
})