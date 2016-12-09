const contact = (state, action) => {

  switch (action.type) {
    case 'ADD_CONTACT':
    case 'EDIT_CONTACT':
      return {
        id: action.id,
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email
      }

    default:
      return state
  }
}

const contacts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [
        ...state,
        contact(undefined, action)
      ]

    case 'EDIT_CONTACT':
      const editIndex = state.findIndex(item => item.id === action.id);
      return [
        ...state.slice(0, editIndex),
        contact(undefined, action),
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
