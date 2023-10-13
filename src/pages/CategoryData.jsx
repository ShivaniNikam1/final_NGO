import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Records from './ngos.json';
import './CategoryData.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";

const CategoryData = () => {
  const { category } = useParams();
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
      // Filter the JSON data to get items with the selected category
      const filteredData = Records.filter((record) => record.category === category);

      // Update the 'categoryData' state with the filtered data
      setCategoryData(filteredData);
  }, [category]);

  return (
    <div>
      <Navbar />
      <h1 className='headingcat'>Category: {category}</h1>
      
      <ul class="list-group">
        {categoryData.map((ngo) => (
          <li key={ngo.id} class="list-group-item">
            <div className="row">
                <div className="col-md-4">
                    <img src={ngo.logo} alt="Sample" style={{ width: '250px', height: '220px' }} />
                </div>
                <div className="col-md-8">
                    <Link to={`/ngo/${ngo.id}`}><strong style={{color:'maroon', fontSize:'24px'}}>{ngo.name}</strong></Link>
                    <p><strong>Open hours </strong>: {ngo.starttime} - {ngo.endtime} </p>
                    <p><strong>Address : </strong>{ngo.address}</p>
                    <p><strong>Vision : </strong>{ngo.intro}</p>   
                </div>
            </div>
          </li>

        ))}
      </ul>
      <Footer></Footer>
    </div>
  );
};

export default CategoryData;
