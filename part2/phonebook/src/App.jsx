import { useState, useEffect } from 'react';
import { getAll, create, update, deletePerson } from './services/PersonService'

import { PersonForm } from './components/PersonForm';
import { Persons } from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const addNewPerson = (event) => {
    event.preventDefault();
    const newPerson = { name: newName, number: newPhone }
    const existingPerson = persons.find(p => p.name === newName)
    if (existingPerson !== undefined) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        update(existingPerson.id, newPerson)
          .then(updatedPerson => setPersons(persons.map(p => p.name === newPerson.name ? updatedPerson : p)))
        console.log('updated person list!')
        console.log(persons)
        setNewName('');
        setNewPhone('');
      }
      return;
    }

    console.log('adding created person to list')
    create(newPerson).then(created => setPersons(persons.concat(created)))
    setNewName('');
    setNewPhone('');
  }

  const deleteEntry = (id) => {
    if (window.confirm("Do you really want to delete this person?")) {
      deletePerson(id).then(setPersons(persons.filter(p => p.id !== id)))
    }
  }

  useEffect(() => { getAll().then(persons => setPersons(persons)) }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      filter: <input value={filter} onChange={(event) => setFilter(event.target.value)} />
      <PersonForm
        newName={newName}
        newPhone={newPhone}
        setNewName={setNewName}
        setNewPhone={setNewPhone}
        addNewPerson={addNewPerson} />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} onDelete={deleteEntry} />
    </div>
  )
}

export default App