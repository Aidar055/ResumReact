import React from "react";
import img3 from "../img/icons8-instagram.svg";
const Footer = () => {
  return (
    <div>
      <div className="container">
        <footer>
          <div className="footer__container">
            <div className="footer__description">
              <h4 id={7}>Contacts</h4>
              <span>Want to know more or just chat? You are welcome!</span>
              <button>Send message</button>
            </div>
            <div className="footer__icon">
              <a
                href="https://instagram.com/bakytv_?igshid=OGQ5ZDc2ODk2ZA=="
                target="_blank"
              >
                <img src={img3} alt="" />
              </a>
              <a
                href="https://instagram.com/bakytv_?igshid=OGQ5ZDc2ODk2ZA=="
                target="_blank"
              >
                <img src={img3} alt="" />
              </a>
              <a
                href="https://twitter.com/bakytv_?s=21&t=TvG21engbsvjRFeVb24how"
                target="_blank"
              >
                <img src={img3} alt="" />
              </a>
            </div>
            <div className="footer__sub-titile">
              <p>
                Like me on <br />
                Telegram, Instagram,Twitter
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
