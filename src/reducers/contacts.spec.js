import contacts from './contacts';
import { messages } from 'people-config';

describe('contact reducer', () => {
  it('should handle intial sate', () => {
    expect(
      contacts(undefined, {})
    ).toEqual([]);
  });

  it('should handle ADD_CONTACT', () => {
    expect(
      contacts([], {
        type: messages.addContact,
        payload: {
          id: 1,
          firstName: 'Andrei',
          lastName: 'Silchankau',
          email: 'andrei.silchankau@gmail.com'
        }
      })
    ).toEqual([
      {
        id: 1,
        firstName: 'Andrei',
        lastName: 'Silchankau',
        email: 'andrei.silchankau@gmail.com'
      }
    ]);

    expect(
      contacts([{
        id: 1,
        firstName: 'Andrei',
        lastName: 'Silchankau',
        email: 'andrei.silchankau@gmail.com'
      }], {
        type: messages.addContact,
        payload: {
          id: 2,
          firstName: 'Leonardo',
          lastName: 'Eiler',
          email: 'lonardo@gmail.com'
        }
      })
    ).toEqual([
      {
        id: 1,
        firstName: 'Andrei',
        lastName: 'Silchankau',
        email: 'andrei.silchankau@gmail.com'
      },
      {
        id: 2,
        firstName: 'Leonardo',
        lastName: 'Eiler',
        email: 'lonardo@gmail.com'
      }
    ]);
  });

  it('should handle EDIT_CONTACT', () => {
    expect(
      contacts([{
        id: 1,
        firstName: 'Andrei',
        lastName: 'Silchankau',
        email: 'andrei.silchankau@gmail.com'
      },
      {
        id: 2,
        firstName: 'Michael',
        lastName: 'Franks',
        email: '@gmail.com'
      }], {
        type: messages.editContact,
        payload: {
          id: 1,
          firstName: 'Leonardo',
          lastName: 'Eiler',
          email: 'leonardo@gmail.com'
        }
      })
    ).toEqual([
      {
        id: 1,
        firstName: 'Leonardo',
        lastName: 'Eiler',
        email: 'leonardo@gmail.com'
      },
      {
        id: 2,
        firstName: 'Michael',
        lastName: 'Franks',
        email: '@gmail.com'
      }
    ]);
  });

  it('should handle DELETE_CONTACT', () => {
    expect(
      contacts([{
        id: 1,
        firstName: 'Andrei',
        lastName: 'Silchankau',
        email: 'andrei.silchankau@gmail.com'
      },
      {
        id: 2,
        firstName: 'Michael',
        lastName: 'Franks',
        email: '@gmail.com'
      }], {
        type: messages.deleteContact,
        payload: {
          id: 1
        }
      })
    ).toEqual([
      {
        id: 2,
        firstName: 'Michael',
        lastName: 'Franks',
        email: '@gmail.com'
      }
    ]);
  });

})
