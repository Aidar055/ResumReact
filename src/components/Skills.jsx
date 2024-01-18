import React from "react";
import img2 from "../img/icons8-java-script.svg";
import img4 from "../img/figma icon.png";
import img5 from "../img/4 stars.png";
import Footer from "./Footer";

const Skills = () => {
  return (
    <div>
      {" "}
      <div class="section-3">
        <div class="section-3__container">
          <div class="section-3__description">
            <h3 id="5">Skills</h3>
            <p>I work in such programs as</p>
          </div>
          <div class="section-3__icons">
            <div class="section-3__collumn" data-aos="fade-right">
              <img src={img2} alt="" />
              <p>Java Script</p>
              <div>
                <img class="stars" src={img5} alt="" />
              </div>
            </div>
            <div class="section-3__collumn" data-aos="fade-down">
              <img src={img4} alt="" />
              <p>Figma</p>
              <div>
                <img class="stars" src={img5} alt="" />
              </div>
            </div>
            <div class="section-3__collumn" data-aos="fade-left">
              <img src={img4} alt="" />
              <p>Python</p>
              <div>
                <img class="stars" src={img5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
