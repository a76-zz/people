import { messages } from 'people-config';

const contacts = (state = [], {type, payload}) => {
  switch (type) {
    case messages.sync: 
      return payload;

    case messages.addContact:
      return [
        ...state,
        payload
      ];

    case messages.editContact:
      const editIndex = state.findIndex(item => item.id === payload.id);
      return [
        ...state.slice(0, editIndex),
        payload,
        ...state.slice(editIndex + 1)
      ];

    case messages.deleteContact:
      const deleteIndex = state.findIndex(item => item.id === payload.id);
      return [
        ...state.slice(0, deleteIndex),
        ...state.slice(deleteIndex + 1)
      ];

    default:
      return state;
  }
};

export default contacts;
