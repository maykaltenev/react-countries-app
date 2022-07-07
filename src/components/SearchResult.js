import React from "react";

export default function SearchResult({ country }) {


  return (
    <div
      style={{
        margin: "20px 10%",
        boxShadow: "6px 6px 10px",
        padding: "10px",
        width: "80%",
        height: "640px",
        borderRadius: "20px",
        fontSize: "27px",
      }}
    >
      <img src={country.flags.png} alt={country.name.common} width="60%" />
      <h1>{country.name.official}</h1>
      <span>
        <b>Capital:</b> {country.capital[0]}
      </span>
      <span>
        <b> Area:</b> {country.area} km<sup>2</sup>
      </span>
      <br />
      <span>
        <b>Population:</b> {country.population}
      </span>
      <span>
        <a href={country.maps.googleMaps} > Map </a>
      </span>
    </div>
  );
}
