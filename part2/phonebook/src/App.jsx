import { useState, useEffect } from 'react';
import { getAll, create, update, deletePerson } from './services/PersonService'

import { PersonForm } from './components/PersonForm';
import { Persons } from './components/Persons'

import './styles.css';


const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const [errorMessage, setErrorMessage] = useState(null)
  const [notificationMessage, setNotificationMessage] = useState(null)

  const addNewPerson = (event) => {
    event.preventDefault();
    const newPerson = { name: newName, number: newPhone }
    const existingPerson = persons.find(p => p.name === newName)
    if (existingPerson !== undefined) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        update(existingPerson.id, newPerson)
          .then(updatedPerson => setPersons(persons.map(p => p.name === newPerson.name ? updatedPerson : p)))
          .catch(error => showError(error))
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
      deletePerson(id)
        .then( () => setPersons(persons.filter(p => p.id !== id)) )
        .then( () => showNotification(`User with id ${id} has been deleted`))
        .catch(error => showError(error))
    }
  }

  const showError = error => { setErrorMessage(error.message); setTimeout(() => setErrorMessage(null), 5000) }
  const showNotification = notification => { setNotificationMessage(notification); setTimeout(() => setNotificationMessage(null), 5000) }

  useEffect(() => { getAll().then(persons => setPersons(persons)).catch(error => showError(error)) }, [])

  const ErrorNotification = ({ message }) => {
    if (!message) {
      return null;
    }

    return (
      <div className='error'>
        {message}
      </div>
    )
  }

  const NotificationMessage = ({ message }) => {
    if (!message) {
      return null;
    }

    return (
      <h1>
        {message}
      </h1>
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <ErrorNotification message={errorMessage} />
      <NotificationMessage message={notificationMessage}/>
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