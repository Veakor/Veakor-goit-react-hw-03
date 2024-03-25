

import styles from './Contact.module.css'; 

const Contact = ({ contact, onDelete }) => {
  const { id, name, number } = contact;

  const handleDelete = () => {
    onDelete(id);
  };

  return (
      <li className={styles.contact}>
        <div className={styles.contactDetails}>
          <p className={styles.contactName}>Name: {name}</p>
          <p className={styles.contactNumber}>Number: {number}</p>
        </div>
        <button className={styles.contactButton} onClick={handleDelete}>Delete</button>
      </li>
    );
  };
export default Contact;





