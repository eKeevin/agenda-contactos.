import styles from './Filter.module.css';
const Filter = ({ value, onChange }) => {
  return (
  <div className={styles.filter}>
  <input className={styles.input}value={value} onChange={onChange} placeholder='escribe un nombre' /></div>)}

export default Filter