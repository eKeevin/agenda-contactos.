import { useState } from 'react'
import Filter from './components/filter.jsx'
import AddPersonForm from './components/AddPersonForm.jsx'
import Persons from './components/Persons.jsx'
import styles from "./App.module.css"

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: "Juan Pérez", number: "123-456" },
    { id: 2, name: "María Gómez", number: "987-654" },
  
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterText, setFilterText] = useState('')

  const handleDelete = (id) => {  
    if (!id) return
    if (window.confirm("¿Seguro que querés borrar este contacto?")) {
      setPersons(persons.filter(person => person.id !== id))
    }
  }

  const handleAddButton = (event) => {
    event.preventDefault()
    const existingPerson = persons.find(person => person.name === newName)
    const nameObject = {
      id: persons.length ? persons[persons.length - 1].id + 1 : 1,
      name: newName,
      number: newNumber
    }

    if (existingPerson) {
      if (window.confirm(`${newName} ya existe, ¿querés actualizar el número?`)) {
        setPersons(persons.map(p => 
          p.id === existingPerson.id ? { ...existingPerson, number: newNumber } : p
        ))
        setNewName('')
        setNewNumber('')
      }
      return
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filterText.toLowerCase())
  )

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Agenda de contactos</h2>
      
       <div className={styles.filterBox}>
        <p>Buscar:</p>
        <Filter value={filterText} onChange={(e) => setFilterText(e.target.value)} />
      </div>

      <AddPersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={(e) => setNewName(e.target.value)}
        handleNumberChange={(e) => setNewNumber(e.target.value)}
        handleAddButton={handleAddButton}
      />

      <h2 className={styles.subtitle}>Contactos</h2>
      <Persons persons={filteredPersons} handleDelete={handleDelete} /> 
    </div>
  )
}

export default App