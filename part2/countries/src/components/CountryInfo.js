const CountryInfo = ({ country }) => {
    if (country === null) {
        return <p>no country is selected for the detailed information</p>
    }
    return (
        <div>
            <h1>{country.name.common}</h1>
            <img src={country.flags['png']} alt={country.flag} />
            <p>{country.capital[0]}</p>
            <p>{country.cca3}, {country.cca2}</p>
        </div>
    )
}

export default CountryInfo;