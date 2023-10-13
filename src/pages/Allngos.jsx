import React from "react";
import { Link } from "react-router-dom";
import "./Allngos.css";
import Records from "./ngos.json";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import JSONDATA from "../components/MOCK_DATA (1).json";
import { useState } from "react";

const Allngos = () => {
  const uniqueCategories = [
    ...new Set(Records.map((record) => record.category)),
  ];

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <Navbar />
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search...."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        {Records.filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        }).map((val, key) => {
          return (
            <div className="user" key={key}>
              <Link to={`/ngo/${val.id}`}>
                <h6 style={{ color: "green", fontSize: "16px" }}>{val.name}</h6>
              </Link>
            </div>
          );
        })}
      </div>
      <hr></hr>
      <h1 className="searchbycat">Search by NGO Categories</h1>
      <ul className="button-container">
        {uniqueCategories.map((category, index) => (
          <li key={index}>
            <Link to={`/category/${category}`}>
              <button className="categories">{category}</button>
            </Link>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default Allngos;
