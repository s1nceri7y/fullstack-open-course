const PersonForm = ({ newName, newPhone, setNewName, setNewPhone, addNewPerson }) => {
    return (
        <form onSubmit={addNewPerson}>
            <div>
                name: <input value={newName} onChange={(event) => setNewName(event.target.value)} />
                phone: <input value={newPhone} onChange={(event) => setNewPhone(event.target.value)} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export { PersonForm }