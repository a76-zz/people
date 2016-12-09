import { combineReducers } from 'redux'
import contacts from './contacts'

import { reducer as formReducer } from 'redux-form'

const contactsApp = combineReducers({
  contacts,
  form: formReducer
})

export default contactsApp
