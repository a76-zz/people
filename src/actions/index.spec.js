import * as actions from './index'

describe('addContact actions', () => {
  it('addContact should create ADD_CONTACT action', () => {
    expect(actions.addContact('Andrei', 'Silchankau', 'andrei.silchankau@gmail.com')).toEqual({
      type: 'ADD_CONTACT',
      id: 0,
      firstName: 'Andrei',
      lastName: 'Silchankau',
      email: 'andrei.silchankau@gmail.com'
    })
  })
})

describe('editContact actions', () => {
  it('editContact should create EDIT_CONTACT action', () => {
    expect(actions.editContact(1, 'Andrei', 'Silchankau', 'andrei.silchankau@gmail.com')).toEqual({
      type: 'EDIT_CONTACT',
      id: 1,
      firstName: 'Andrei',
      lastName: 'Silchankau',
      email: 'andrei.silchankau@gmail.com'
    })
  })
})

describe('deleteContact actions', () => {
  it('deleteContact should create DELETE_CONTACT action', () => {
    expect(actions.deleteContact(2)).toEqual({
      type: 'DELETE_CONTACT',
      id: 2
    })
  })
})
