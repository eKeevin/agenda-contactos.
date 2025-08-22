import styles from './Persons.module.css';


const Persons = ({ persons, handleDelete }) => {

   console.log("Persons recibidas:", persons);
  return (
  
  <div className={styles.container}>
         {persons.map((person, index) => (
            <div key={person.id || index} className={styles.person}> {person.name} {person.number}
            <button onClick={() => person.id && handleDelete(person.id)} className={styles.deleteButton} >Borrar</button></div>))}
            
        </div>)
        
      }



export default Persons;