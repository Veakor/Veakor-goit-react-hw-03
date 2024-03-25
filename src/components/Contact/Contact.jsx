

const Contact = ({ contact }) => {
    const { id, name, number } = contact;
  
    return (
      <li key={id}>
        <p>Name: {name}</p>
        <p>Number: {number}</p>
      </li>
    );
  };
  
  export default Contact;





