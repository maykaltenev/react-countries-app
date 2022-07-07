import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import SearchResult from "./SearchResult";
export default function ByRegion() {
  const [region, setRegion] = useState("africa")
  const [countriesRegion, setCountriesRegion] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [singleCountry, setSingleCountry] = useState('');
  const handleChange = (e) => {
    setRegion(e.target.value)
    setSingleCountry('')

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://restcountries.com/v3.1/name/${searchInput}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSingleCountry(data[0])
      });
    setSearchInput('')

  }
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/region/${region}`)
      .then((response) => response.json())
      .then((data) => setCountriesRegion(data));
  }, [region])
  return (
    <div>
      <input
        type="radio"
        className="rad"
        name="region"
        value="africa"
        defaultChecked
        onChange={handleChange}
      />
      <label>Africa</label>
      <input
        type="radio"
        className="rad"
        name="region"
        value="america"
        onChange={handleChange}
      />
      <label> America</label>
      <input
        type="radio"
        className="rad"
        name="region"
        value="asia"
        onChange={handleChange}
      />
      <label> Asia</label>
      <input
        type="radio"
        className="rad"
        name="region"
        value="europe"
        onChange={handleChange}
      />
      <label> Europe</label>
      <input
        type="radio"
        className="rad"
        name="region"
        value="oceania"
        onChange={handleChange}
      />
      <label> Oceania</label>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setSearchInput(e.target.value)} type="text" value={searchInput} placeholder="Search country..."></input>
        <button>Search</button>
      </form>
      {singleCountry ? <SearchResult country={singleCountry} /> : (<>

        <div className="cardsContainer">
          {countriesRegion.map((country, i) => {
            return (
              <CountryCard key={i} country={country} />
            )
          })}
        </div >
      </>)}
    </div>
  )
}
