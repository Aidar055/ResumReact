import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import RickAndMorty from "./components/RickAndMorty";
import CharacterDetail from "./components/CharacterDetail";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Skilss" element={<Skills />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/RickAndMorty" element={<RickAndMorty />} />
        <Route path="/CharacterDetail/:id" element={<CharacterDetail />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
