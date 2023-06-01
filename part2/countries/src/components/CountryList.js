import { useState } from 'react'
import CountryInfo from './CountryInfo'


const CountryListBox = ({ countryList, countryFilter }) => {
    const [countryForInfo, setCountryForInfo] = useState(null)
    console.log("ebashim")

    return (
        <div>
            <CountryList countryList={countryList} countryFilter={countryFilter} setCountryForInfo={setCountryForInfo} />
            <CountryInfo country={countryForInfo} />
        </div>)
}
const CountryList = ({ countryList, countryFilter, setCountryForInfo }) => {

    console.log('in country list')
    if ((!countryList || countryList.length === 0) && countryFilter === '') {
        return <p>Please type a country name</p>
    } else if (countryList.length === 0) {
        return <p>{`${countryFilter} is not found.`}</p>
    } else if (countryList.length > 10) {
        return <p>${`Found too much occurences (${countryList.length}. Please specify the country`}</p>
    } else if (countryList.length === 1) {
        return <CountryInfo country={countryList[0]} />
    }

    console.log(countryList)
    return (<div>{countryList.map(country => <CountryListObject country={country} setCountryForInfo={setCountryForInfo} />)}</div>)
}

const CountryListObject = ({ country, setCountryForInfo }) =>
    <p key={country.name}>{country.name.common} <button onClick={() => setCountryForInfo(country)}>Show</button> </p>

export default CountryListBox;