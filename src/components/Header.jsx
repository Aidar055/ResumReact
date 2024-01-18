import React from "react";
import { NavLink } from "react-router-dom";
import RickAndMorty from "./RickAndMorty";

const Header = () => {
  return (
    <div>
      <header>
        <div className="header__container">
          <div class="header__navabr">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/AboutMe"}>About me</NavLink>
            <NavLink to={"/Skilss"}>Skills</NavLink>
            <NavLink to={"/Portfolio"}>Portfolio</NavLink>
            <NavLink to={"RickAndMorty"}>Rick And Morty</NavLink>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
