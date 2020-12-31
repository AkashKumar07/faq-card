import React from "react";

import bgDesktop from "../assets/images/bgDesktop.svg";
import bgMobile from "../assets/images/bgMobile.svg";
import womanDesktop from "../assets/images/womanDesktop.svg";
import womanMobile from "../assets/images/womanMobile.svg";
import box from "../assets/images/box.svg";

import Accordian from "./Accordian";

const faqs = [
  { q: "How many team members can I invite?", a: "maximum 10 members." },
  {
    q: "What is the maximum file upload size?",
    a:
      "No more than 2GB. All files in your account must fit your allocated storage space",
  },
  {
    q: "How do I reset my password?",
    a:
      "Go to profile, then settings. You will find an option called reset password",
  },
  {
    q: "Can I cancel my subscription?",
    a: "Yes, you can cancel your subscription anytime",
  },
  {
    q: "Do you provide additional support?",
    a: "Yes, our customer care services are available 24/7",
  },
];

const Card = () => {
  return (
    <div className="card">
      <div className="card__image-mobile">
        <img src={womanMobile} alt="mobilebg" />
        <img src={bgMobile} alt="backgrounf" />
      </div>
      <div className="card__image">
        <div className="card__image-bgDesktop">
          <img src={bgDesktop} alt="bg" />
        </div>
        <div className="card__image-womenDesktop">
          <img src={womanDesktop} alt="women desktop" />
        </div>
        <img src={box} alt="box" className="card__image-box" />
      </div>
      <div className="card__faq">
        <h1>FAQ</h1>
        {faqs.map((faq, index) => (
          <div key={index}>
            <Accordian q={faq.q} a={faq.a} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
