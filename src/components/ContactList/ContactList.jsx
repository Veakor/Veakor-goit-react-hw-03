import Contact from '../Contact/Contact';

const ContactList = ({ contacts }) => {
    return (
      <div>
        <ul>
          {contacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      </div>
    );
  };
  
  export default ContactList;