let nextContactId = 0
export const addContact = (firstName, lastName, email) => ({
  type: 'ADD_CONTACT',
  id: nextContactId++,
  firstName,
  lastName,
  email
})

export const editContact = (id, firstName, lastName, email) => ({
  type: 'EDIT_CONTACT',
  id,
  firstName,
  lastName,
  email
})

export const deleteContact = (id) => ({
  type: 'DELETE_CONTACT',
  id
})
