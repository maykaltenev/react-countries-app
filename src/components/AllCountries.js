import React, { useState, useEffect } from "react";
import CountryCard from "./CountryCard";
export default function AllCountries() {
  const [countries, setCountries] = useState([])
  const getData = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="cardsContainer">
      {countries.map((country) => {
        return (
          <CountryCard key={country.altSpellings + country.area} country={country} />
        )
      })}
    </div >
  )
}
