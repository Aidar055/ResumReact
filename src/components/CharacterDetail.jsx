import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../Helpers/const";
import Footer from "./Footer";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState("");
  const getCharacter = async () => {
    const { data } = await axios(`${API}/${id}`);
    setCharacter(data);
    console.log(character);
  };
  useEffect(() => {
    getCharacter();
  }, [id]);
  return (
    <div>
      <div className="mins">
        <div className="mins2con">
          <h1>{character.name}</h1>
          <span>Status: {character.status}</span>
          <p>Gender: {character.gender}</p>
          <img src={character.image} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CharacterDetail;
