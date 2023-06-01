const Person = ({ person, deleteHandler }) =>
    <p>{person.name} - {person.number} <button onClick={deleteHandler}> delete </button></p>

const Persons = ({ persons, filter, onDelete }) => {
    console.log("Rendering list of persons!")
    console.log(persons)
    return persons
        .filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))
        .map(person => <Person key={person.name} person={person} deleteHandler={() => onDelete(person.id)} />)
}


export { Persons };