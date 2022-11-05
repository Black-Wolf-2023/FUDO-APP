import React from "react";
import { List } from "../small-components/Links";
import "./footer.css";

export const Footer = () => {
  let data = [
    ["About Us", "Features", "News", "Menu"],
    ["Why Fudo?", "Partner With Us", "FAQ", "Blog"],
    ["Account", "Support Center", "Feedback", "Contact Us", "Accessibilty"],
  ];
  let titles = ["About", "Company", "Support"];
  return (
    <>
      <footer className="container">
        <div>
          <div className="footer-content container flex">
            <div className="footer-contact">
              <div className="footer-logo">
                <img src="./assets/icons/Logo.svg" alt="" />
              </div>
              <div className="footer-contact-text">
                <p className="main-text">
                  Our job is to filling your tummy with{" "}
                </p>
                <p className="main-text">delicious food and with fast and </p>
                <p className="main-text">free delivery.</p>
              </div>
              <div className="footer-social-links">
                <span>
                  <img src="./assets/icons/facebook.svg" alt="" />
                </span>
                <span>
                  <img src="./assets/icons/bird.png" alt="" />
                </span>
                <span>
                  <img src="./assets/icons/instagram.svg" alt="" />
                </span>
              </div>
            </div>
            {data.map((e, index) => (
              <List key={index} data={e} title={titles[index]} />
            ))}
            <div className="addition-info">
              <h2>Get in Touch</h2>
              <p className="main-text">Question or feedback?</p>
              <p className="main-text">We’d love to hear from you</p>
              <button>
                Email Adress <img src="./assets/icons/email.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};