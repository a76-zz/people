const contact = (action) => ({
   id: action.id,
   firstName: action.firstName,
   lastName: action.lastName,
   email: action.email
})

const contacts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [
        ...state,
        contact(action)
      ]

    case 'EDIT_CONTACT':
      const editIndex = state.findIndex(item => item.id === action.id);
      return [
        ...state.slice(0, editIndex),
        contact(action),
        ...state.slice(editIndex + 1)
      ]

    case 'DELETE_CONTACT':
      const deleteIndex = state.findIndex(item => item.id === action.id);
      return [
        ...state.slice(0, deleteIndex),
        ...state.slice(deleteIndex + 1)
      ]

    default:
      return state
  }
}

export default contacts
