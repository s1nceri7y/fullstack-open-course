import { useState, useEffect } from 'react';
import axios from "axios";

import { PersonForm } from './components/PersonForm';
import { Persons } from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
 
  const addNewPerson = (event) => {
    event.preventDefault();
    if (persons.map(p => p.name).includes(newName)) {
      alert(`${newName} already exists in numbers!`)
      return;
    }

    setPersons(persons.concat({ name: newName, phone: newPhone }));
    setNewName('');
    setNewPhone('');
  }

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => setPersons(response.data))
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
        filter: <input value={filter} onChange={(event) => setFilter(event.target.value)} />
      <PersonForm newName={newName} newPhone={newPhone} setNewName={setNewName} setNewPhone={setNewPhone} addNewPerson={addNewPerson} />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  )
}

export default App