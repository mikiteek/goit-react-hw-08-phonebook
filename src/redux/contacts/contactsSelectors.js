import {createSelector} from "@reduxjs/toolkit";

const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const getNotify = state => state.contacts.notify;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
   return contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
});


export default {
  getContacts,
  getFilter,
  getNotify,
  getVisibleContacts,
}