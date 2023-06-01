import { useEffect, useState } from "react";
import CountryListBox from "./components/CountryList";

import './service/CountryService';
import { getCountriesList } from "./service/CountryService";

function App() {
  const [countryFilter, setCountryFilter] = useState('')
  const [countryList, setCountryList] = useState([])


  useEffect(() => {
    getCountriesList(countryFilter)
      .then(res => setCountryList(res.data))
      .catch(err => { console.log(err.message); })
  }, [countryFilter])
  // useEffect -> re-render on countryListChange (?)
  return (
    <div className="App">
      <input value={countryFilter} onChange={event => setCountryFilter(event.target.value)} />
      <CountryListBox countryList={countryList} countryFilter={countryFilter} />
    </div>
  );
}

export default App;
