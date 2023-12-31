import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Records from './ngos.json'; // Import your JSON data source
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Donation = () => {
  const { ngoId } = useParams();
  const [ngo, setNgo] = useState([]);

  useEffect(() => {
    // Use the find method to retrieve the object with the matching 'id'
    const foundObject = Records.find(item => item.id === ngoId);
    setNgo(foundObject);
  }, [ngoId]);


  return (
    <div>
      <Navbar />
        <h1 style={{ textAlign: 'center', marginTop: 100}}>Donate towards {ngo.name}</h1>
        <hr></hr>
        {/* row 1 containing details of ngo and its logo  */}
        <div className='container'>
            <div className="row">
                <div>
                    <p style={{textAlign:'center'}}><strong>Scan the QR code</strong></p>
                    <div style={{marginLeft:'38%'}}>
                      <img src="data:image/png;base64,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" alt="Sample" style={{ width: '270px', height: '250px' }} />
                    </div>
                    <p style={{textAlign:'center', paddingTop:'2%'}}><strong>UPI ID : </strong> ourngo{ngo.id}@okhdfc </p>
                </div>
                <hr></hr>
            </div>
        </div>
        <Footer></Footer>
    </div>
  );
};

export default Donation;