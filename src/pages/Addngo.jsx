import React from "react";
import "./addngo.css";
import { MdVerified } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Addngo = () => {
  const Navigate = useNavigate();
  return (
    <div className="addngo">
      <Navbar />

      <div className="ngoImg">
        <h1 className="heading">
          "Unlock the Potential of Your NGO: <br></br> Register with NGO Connect
          "
        </h1>
        <div className="addngo_buttons">
          <button
            className="addngo_button"
            onClick={() => Navigate("/Registerngo")}
          >
            Register NGO
          </button>
          <button className="addngo_button btn2">
            Login to view your existing NGO
          </button>
        </div>
      </div>
      <div className="addngo_details">
        <h2>Get Started with Registering NGO</h2>
        <p>please keep these documements ready for a smooth sign up</p>
        <div className="docdetails">
          <div className="detail1">
            <h3>
              <button className="docs__icon">
                <MdVerified />
              </button>
              Registration Certificate
            </h3>
            <h3>
              <button className="docs__icon">
                <MdVerified />
              </button>
              Bank Account Details
            </h3>
            <h3>
              <button className="docs__icon">
                <MdVerified />
              </button>
              Verified NGO certificate
            </h3>
          </div>
          <div className="detail2">
            <h3>
              <button className="docs__icon">
                <MdVerified />
              </button>
              Atleast 3 event Details
            </h3>
            <h3>
              <button className="docs__icon">
                <MdVerified />
              </button>
              Logo image
            </h3>
            <h3>
              <button className="docs__icon">
                <MdVerified />
              </button>
              Pan Card copy
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addngo;
