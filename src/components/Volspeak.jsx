import React from "react";
import Carditem from "./Carditem";
import { speaker } from "../data";
import "../pages/Home.css";
import { ImQuotesLeft } from "react-icons/im";

const Volspeak = () => {
  return (
    <section className="container5 volunteer_speek">
      <div className="container1">
        <div className="card__section">
          <div className="main__heading">
            <button className="main__icon">
              <ImQuotesLeft />
            </button>
            <h2 className="voluntspeek__heading">Volunteer Speak</h2>
          </div>

          <div className="card__item">
            {speaker.map(({ id, image, name, words }) => {
              return (
                <Carditem key={id} image={image} name={name} words={words} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volspeak;
