import axios from "axios";

const backendUrl = 'http://localhost:3001/persons'

const getAll = () =>  axios.get(backendUrl).then(response => response.data)

const create = newPerson => axios.post(backendUrl, newPerson).then(response => response.data)

const update = (id, newPerson) => axios.put(`${backendUrl}/${id}`, newPerson).then(response => response.data)

const deletePerson = id => axios.delete(`${backendUrl}/${id}`).then(response => response.data)

export { getAll, create, update, deletePerson }
