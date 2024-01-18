import React from "react";
import img1 from "../img/try 2.jpg";
import img2 from "../img/icons8-java-script.svg";
import img3 from "../img/icons8-instagram.svg";
import img4 from "../img/figma icon.png";
import img5 from "../img/4 stars.png";
import pot1 from "../img/photo_2023-11-21_14-59-02.jpg";
import Footer from "./Footer";
const HomePage = () => {
  return (
    <div>
      <>
        {/* Hello world */}

        <div className="container">
          <div className="section-1">
            <div className="section-1__container">
              <div className="section-1__description">
                <h1>
                  Bakytov <br />
                  Aidar
                </h1>
                <span>
                  Future Front-end Developer <br />
                  18 years old Bishkek
                </span>
                <p>
                  RU <b>| ENG </b>
                </p>
              </div>
              <div className="section-1__img">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>

          <div className="sextion-2">
            <div className="ssection-2__container">
              <div className="section-2__description">
                <h3>About me</h3>
                <p>
                  Hi, My name is Aidar, I am a Front-End developer <br />I am
                  interested in website development and <br />
                  everything related to it
                </p>
                <p>
                  I'm studying at courses "JavaScript Front-End" <br />
                  In Makers
                </p>
                <p>
                  Ready to implement exellent projects <br />
                  with wonderful people
                </p>
              </div>
            </div>

            <div className="section-3">
              <div className="section-3__container">
                <div className="section-3__description">
                  <h3 id={5}>Skills</h3>
                  <p>I work in such programs as</p>
                </div>
                <div className="section-3__icons">
                  <div className="section-3__collumn" data-aos="fade-right">
                    <img src={img2} alt="" />
                    <p>Java Script</p>
                    <div>
                      <img className="stars" src={img5} alt="" />
                    </div>
                  </div>
                  <div className="section-3__collumn" data-aos="fade-down">
                    <img src={img4} alt="" />
                    <p>Figma</p>
                    <div>
                      <img className="stars" src={img5} alt="" />
                    </div>
                  </div>
                  <div className="section-3__collumn" data-aos="fade-left">
                    <img src={img4} alt="" />
                    <p>Python</p>
                    <div>
                      <img className="stars" src={img5} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
      </>

      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script>AOS.init();</script>
    </div>
  );
};

export default HomePage;
