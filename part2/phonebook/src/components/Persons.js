const Person = ({ person }) => <p>{person.name} - {person.phone}</p>

const Persons = ({ persons, filter }) => persons.filter(
    (person) => person.name.toLowerCase().includes(filter.toLowerCase()))
    .map(person => <Person key={person.name} person={person} />)


export { Persons };