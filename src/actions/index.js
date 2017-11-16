import { messages } from 'people-config';

export const sync = () => (dispatch, getState, { emit }) => emit(messages.sync);

export const addContact = (firstName, lastName, email) => (dispatch, getState, { emit }) => emit(messages.addContact, {
  firstName,
  lastName,
  email
});

export const editContact = (id, firstName, lastName, email) => (dispatch, getState, { emit }) => emit(messages.editContact, {
  id,
  firstName,
  lastName,
  email
});

export const deleteContact = (id) => (dispatch, getState, { emit }) => emit(messages.deleteContact, { 
  id 
});
