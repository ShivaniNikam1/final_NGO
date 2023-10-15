
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import { useState,  useEffect  } from 'react';
// import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBf-4RPinkTM2vkgskC96dlJrU_tDyMJPI&libraries=places"></script>

//AIzaSyBf-4RPinkTM2vkgskC96dlJrU_tDyMJPI

const FormContainer = styled.div`
  /* Your styling for FormContainer */
  display: flex;
  max-width: 1000px;
  padding: 25px 50px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 90px 200px 3px;
  height: 100vh;
  overflow: hidden;
`;

const FormGroup = styled.div`
  /* Your styling for FormGroup */
  width: 250px;
  padding: 20px;
  background-color: #70a17d;
  /* position: fixed; Fix the sidebar in place */
  top: 90px;
  left: 50px;
  height: 50%;
`;

const Label = styled.label`
  /* Your styling for Label */
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const FileInput = styled.input`
  width: 100%;
  padding: 10px;
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

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
`;
const RegisterNgo = () => {
  const [formValues, setFormValues] = useState({
    ngoName: '',
    contactNo: '',
    email: '',
    password: '',
    location: '',
    // Add more form fields as needed
  });

  const [openConfirmation, setOpenConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // You should customize the URL and the data sent to match your API
      const response = await axios.post('http://localhost:5000/api/ngos/', formValues);

      if (response.data.success) {
        // Show the confirmation dialog
        setOpenConfirmation(true);
      } else {
        // Handle the case where the registration was not successful
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleConfirmationOk = () => {
    // Redirect to the "Loginngo" page or any other page as needed
    navigate('/Loginngo');
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="ngoName">NGO Name</Label>
          <Input
            type="text"
            id="ngoName"
            name="ngoName"
            value={formValues.ngoName}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="contactNo">Contact Number</Label>
          <Input
            type="text"
            id="contactNo"
            name="contactNo"
            value={formValues.contactNo}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="location">Location</Label>
          <Input
            type="text"
            id="location"
            name="location"
            value={formValues.location}
            onChange={handleChange}
            required
          />
        </FormGroup>
        {/* Repeat this pattern for additional form fields */}
        {/* Add more form fields as needed */}
        <FormGroup>
          <Button type="submit">Next</Button>
        </FormGroup>
      </form>

      <Dialog open={openConfirmation} onClose={handleConfirmationOk}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            NGO details submitted. Proceed with Login.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmationOk} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </FormContainer>
  );
};

export default RegisterNgo;
