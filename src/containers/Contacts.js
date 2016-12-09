import { connect } from 'react-redux'
import { deleteContact } from '../actions'
import ContactList from '../components/ContactList'

const mapStateToProps = (state) => ({
  contacts: state.contacts
})

const mapDispatchToProps =  ({
  onDelete: deleteContact
})

const Contacts = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList)

export default Contacts
