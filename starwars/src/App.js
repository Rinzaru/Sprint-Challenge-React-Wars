import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterComponent from "./components/Character";
import "./App.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [currentGender, setGender] = useState("");
  const [height, setHeight] = useState("");

  useEffect(() => {
    axios
      .get(`http://swapi.py4e.com/api/people`)
      .then((res) => {
        console.log(res.data.results);
        setData(res.data.results);
        setName(res.data.results.name);
        setDate(res.data.results.birth_year);
        setGender(res.data.results.gender);
        setHeight(res.data.results.height);
      })
      .catch((err) => {
        console.log("No Data", err);
      });
  }, []);

  console.log(date);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharacterComponent
        characterArray={data}
        name={name}
        date={date}
        currentGender={currentGender}
        height={height}
      />
    </div>
  );
};

export default App;
