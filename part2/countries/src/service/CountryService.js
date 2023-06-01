import axios from 'axios'

const getCountriesList = name => axios.get(`https://restcountries.com/v3.1/name/${name}`)

export { getCountriesList };