import axios from "axios";
import React, { useState } from "react";
import { API } from "../Helpers/const";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const RickAndMorty = () => {
  const [character, setCharacter] = useState([]);
  const getCharacter = async (e) => {
    const { data } = await axios(API);
    setCharacter(data.results);
  };
  getCharacter();
  return (
    <div className="min-container">
      <h1>Character</h1>
      {character.map((elem) => (
        <Link to={`/CharacterDetail/${elem.id}`} key={elem.id}>
          <li className="li">{elem.name} </li>
        </Link>
      ))}
      <Footer />
    </div>
  );
};

export default RickAndMorty;
