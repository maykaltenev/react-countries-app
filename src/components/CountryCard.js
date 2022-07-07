import React from "react";

export default function CountryCard({ country }) {
  //name,capital,flag,area,population

  return (
    <div style={{ border: '1px solid black', padding: '10px', width: '400px', height: '370px', borderRadius: '20px', marginBottom: '20px' }}>
      <div style={{ fontSize: "100px" }}> {country.flag} </div>
      <h1>{country.name.official}</h1>
      <span style={{ fontSize: "27px" }}>
        <b>Capital:</b> {country.capital && country.capital[0]}
      </span>
      <span style={{ fontSize: "27px" }}>
        <b> Area:</b> {country.area} km<sup>2</sup>
      </span>
      <div style={{ fontSize: "27px" }}>
        <b>Population:</b> {country.population}
      </div>
    </div>
  );
}
