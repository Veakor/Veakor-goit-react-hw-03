import Contact from '../Contact/Contact';

const ContactList = ({ contacts, onDelete }) => {
    return (
      <div>
        <ul>
          {contacts.map(contact => (
            <Contact key={contact.id} contact={contact} onDeleteContact={onDelete}/>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ContactList;