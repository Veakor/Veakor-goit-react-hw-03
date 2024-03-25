import styles from './SearchBox.module.css'; 

const SearchBox = ({ searchTerm, onSearchChange }) => {
    return (
        <div className={styles.searchBoxContainer}>
      <input
        className={styles.searchBoxInput}
        type="text"
        placeholder="Search contacts..."
        value={searchTerm}
        onChange={onSearchChange}
      />
    </div>
    );
  };
  
  export default SearchBox;