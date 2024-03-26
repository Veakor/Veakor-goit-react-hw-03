import { useState, useEffect } from 'react';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm'


const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return JSON.parse(storedContacts) ?? initialContacts
    });
    
const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const addContact = newContact => {
    setContacts([...contacts, newContact]);
  };
  
  const onDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm)
  );
  

  return (
    <div>
      <h1>Phone book</h1>
      <ContactForm addContact={addContact} /> 
      <SearchBox searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <ContactList contacts={filteredContacts} onDelete={onDelete} />
    </div>
  );
};

export default App;