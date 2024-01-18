import React from "react";

import pot1 from "../img/photo_2023-11-21_14-59-02.jpg";
import Footer from "./Footer";

const Portfolio = () => {
  return (
    <div>
      <div className="section-4">
        <div className="section-4__conteiner">
          <div className="section-4__description">
            <h3 id={6}>Portfolio</h3>
          </div>
          <div className="section-4__img" data-aos="flip-up">
            <img src={pot1} alt="" />
          </div>
          <div className="section-4__description">
            <p>My work for Akari</p>
          </div>
          <div className="section-4__img" data-aos="flip-up">
            <img src={pot1} alt="" />
          </div>
          <div className="section-4__description">
            <p>This is for Explore Muntain</p>
          </div>
          <div className="section-4__img" data-aos="flip-up">
            <img src={pot1} alt="" />
          </div>
          <div className="section-4__description">
            <h6>Team flow</h6>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
