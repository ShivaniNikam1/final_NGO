import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Records from './ngos.json'; // Import your JSON data source
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import EventCalendar from '../components/EventCalendar';
import Navbar from '../components/Navbar';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';


const Button = styled.button`
  background-color: #36a378;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #dfd357;
  }
`;

const NgoDetails = () => {
  const { ngoId } = useParams();
  const [ngo, setNgo] = useState([]);

  useEffect(() => {
    // Use the find method to retrieve the object with the matching 'id'
    const foundObject = Records.find(item => item.id === ngoId);
    setNgo(foundObject);
  }, [ngoId]);


  const [openConfirmation, setOpenConfirmation] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    // Show the confirmation dialog
    setOpenConfirmation(true);
  };


       const handleConfirmationOk = () => {
  //Close the confirmation dialog
               setOpenConfirmation(false);
   };


  return (
    <div>
        <Navbar />
        <h1 style={{ textAlign: 'center', marginTop: 100}}>NGO Details</h1>
        <hr></hr>
        {/* row 1 containing details of ngo and its logo  */}
        <div className='container'>
            <div className="row">
                <div className="col-md-4">
                    <img src={ngo.logo} alt="Sample" style={{ width: '270px', height: '250px' }} />
                </div>
                
                <div className="col-md-8">
                    {/* <Link to={`/applyvolunteer/${ngo.id}`}> */}
                    <Link to={`/applyvolunteer`}>
                       <button class="btn btn-warning" style={{position: 'absolute', left: '80%', top: '30%'}}>Apply as a volunteer</button>
                    </Link>
                    
                       <button onClick={handleRegister} class="btn btn-warning" style={{position: 'absolute', left: '79%', top: '37%'}}>Collaborate with our ngo</button>

                       <Dialog open={openConfirmation} onClose={handleConfirmationOk}>
            <DialogTitle>Confirmation</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Collaboration Request recieved. We will reach you shortly. 😊
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleConfirmationOk} color="primary" autoFocus>
                OK
              </Button>
            </DialogActions>
          </Dialog>
                    
                    <p><strong>Name of the NGO : </strong> {ngo.name} </p>
                    <p><strong>Category : </strong> {ngo.category} </p>
                    <p><strong>Open hours:</strong> {ngo.starttime} - {ngo.endtime}</p>
                    <p><strong>Address:</strong> {ngo.address}</p>
                    <p><strong>Vision:</strong> {ngo.intro}</p>
                </div>
                <hr></hr>
            </div>
        </div>


        {/* row for the donation msg */}
        <div className='container'>
            <div className="row">
                <div className="col-md-8">
                    <h5><strong>Make a Difference :</strong> Your Generosity Can Change Lives, Join Us by Making a Donation to Contribute Towards Our Cause.</h5>
                </div>
                <div className="col-md-4">
                    <Link to={`/donation/${ngo.id}`}>
                       <button class="btn btn-success" style={{padding:'18px', marginTop:'-11px'}}>Make a donation</button>
                    </Link>
                </div>
             
                <hr></hr>
            </div>
        </div>


        {/* row 2 containg activities of the ngo */}
        <div className="container">
            <h2 style={{margin:'20px'}}>Our projects / activities</h2>
            <div className="row">
                {/* First Column */}
                <div className="col">
                <div className="card">
                    <div className="card-body">
                    <img src={ngo.logo} alt="Sample" style={{ width: '330px', height: '300px' }} />
                    <strong className="card-title">Annadaan</strong>
                    <p className="card-text">Annadaan is a noble initiative dedicated to alleviating hunger and ensuring that no one goes to bed hungry. This initiative involves distributing nutritious meals and essential food supplies to disadvantaged individuals and communities. It not only addresses immediate food insecurity but also emphasizes the long-term goal of eradicating hunger by fostering sustainable food practices and equitable access to nutrition.</p>
                    </div>
                </div>
                </div>

                {/* Second Column */}
                <div className="col">
                <div className="card">
                    <div className="card-body">
                    <img src={ngo.logo} alt="Sample" style={{ width: '330px', height: '300px' }} />
                    <strong className="card-title">Vidyadaan</strong>
                    <p className="card-text">Vidyadaan is an educational outreach event aimed at providing underprivileged children with access to quality education. Through this initiative, we endeavor to bridge educational disparities by offering free educational resources, stationery, and tutoring, to children from underprivilleged backgrounds. Vidyadaan empowers these children with better opportunities for themselves in the future.</p>
                    </div>
                </div>
                </div>

                {/* Third Column */}
                <div className="col">
                <div className="card">
                    <div className="card-body">
                    <img src={ngo.logo} alt="Sample" style={{ width: '330px', height: '300px' }} />
                    <strong className="card-title">Jeevandaan</strong>
                    <p className="card-text">Jeevandaan is a compassionate endeavor that focuses on organ donation and raising awareness about the critical importance of giving the gift of life. This initiative encourages individuals to pledge their organs for transplantation after their passing. By organizing organ donation drives and educational campaigns, Jeevandaan seeks to save lives and improve the quality of life for those in need of life-saving organ transplants.</p>
                    </div>
                </div>
                </div>
            </div>
            <hr></hr>
            <EventCalendar />
        </div>
        
        <Footer></Footer>
    </div>
  );
};

export default NgoDetails;
