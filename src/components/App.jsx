// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div
      style={{
        marginLeft: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        fontSize: 30,
        color: '#010101',
      }}
    >
      <h2>Phonebook</h2>
      <Phonebook />
      <Filter />
      <h2>Contacts</h2>
      {contacts.length === 0 ? <i>-- no contacts here --</i> : <ContactList />}
    </div>
  );
};

export default App;
