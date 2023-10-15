import React from 'react'

import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { useState  } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';



const FormContainer = styled.div`
  display: flex;
  max-width: 1000px;
  padding: 25px 50px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(77, 74, 74, 0.1);
  margin: 90px 200px 3px;
  height: 100vh;
  overflow: hidden;
`;






const FormSection = styled.div`
  flex: 1;
  padding: 20px;
  max-height: 80vh; /* Set a maximum height */
  overflow-y: auto; /* Add a vertical scrollbar when needed */
`;


const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;


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





const VolunteerApply = () => {

    const [openConfirmation, setOpenConfirmation] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    // Show the confirmation dialog
    setOpenConfirmation(true);
  };



    // const navigate = useNavigate()
    // const handleConfirmationOk = () => {
     
    //   // Redirect to the "NGOprofile" page
    //   navigate('/applyvolunteer')
      
    // };
       const handleConfirmationOk = () => {
  //Close the confirmation dialog
               setOpenConfirmation(false);
   };
    
  return (
    <div>
        <Navbar />
      <FormContainer>
        <FormSection>
    <FormTitle id="basic-details">Volunteer Details</FormTitle>
   
    
    <FormGroup>
    <Label htmlFor="Name">Name</Label>
    <Input type="text" id="Name" name="Name" required />
  </FormGroup>
  <FormGroup>
    <Label htmlFor="contactNo">Contact Number</Label>
    <Input type="tel" id="contactNo" name="contactNo" required />
  </FormGroup>
  <FormGroup>
    <Label htmlFor="email">Email</Label>
    <Input type="email" id="email" name="email" required />
  </FormGroup>
  <FormGroup>
    <Label htmlFor="hours">No. of hours</Label>
    <Input type="number" id="hours" name="hours" required />
  </FormGroup>
  <FormGroup>
    <Button onClick={handleRegister} type="submit">Volunteer</Button>
    </FormGroup>
    </FormSection>
    <Dialog open={openConfirmation} onClose={handleConfirmationOk}>
            <DialogTitle>Confirmation</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Thank you for applying. You will get a confirmation soon!
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleConfirmationOk} color="primary" autoFocus>
                OK
              </Button>
            </DialogActions>
          </Dialog>
          </FormContainer>
      <Footer/>
  

</div>
  )
}

export default VolunteerApply