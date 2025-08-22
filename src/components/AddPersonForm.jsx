import styles from './AddPersonForm.module.css';
const AddPersonForm = ({ 
    newName,
    newNumber, 
    handleNameChange, 
    handleNumberChange, 
    handleAddButton 
}) => (
  


<form className={styles.form} >
        <div>
          <h2>Agrega un contacto</h2>
          Nombre  
          <input  onChange={handleNameChange} value={newName} placeholder='agrega un nombre'  className={styles.input}/>
        </div>
        <div>
          Numero 
          <input  onChange={handleNumberChange} value={newNumber} placeholder='agrega un numero' className={styles.input}/>
        </div>
        <div>
          <button type="submit" onClick={handleAddButton} className={styles.button}>Agregar</button>
        </div>
          </form> );

          export default AddPersonForm