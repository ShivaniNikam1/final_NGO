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
  display: flex;
  max-width: 1000px;
  padding: 25px 50px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 90px 200px 3px;
  height: 100vh;
  overflow: hidden;
`;

const Sidebar = styled.div`
  width: 250px;
  padding: 20px;
  background-color: #70a17d;
  /* position: fixed; Fix the sidebar in place */
  top: 90px;
  left: 50px;
  height: 50%; 
`;

const SidebarSection = styled.div`
  margin-bottom: 20px;
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
    const [currentSection, setCurrentSection] = useState('basic-details');
    const [events, setEvents] = useState([]);
    const [event, setEvent] = useState({ image: '', summary: '', imagePreviewURL: '' });

    const [timings, setTimings] = useState({
        startTime: '',
        endTime: '',
        openDays: {
          monday: false,
          tuesday: false,
          wednesday: false,
          thursday: false,
          friday: false,
          saturday: false,
          sunday: false,
        },
      });
  
    const handleSectionChange = (section) => {
      setCurrentSection(section);
    };

    const handleTimingChange = (field, value) => {
        setTimings({
          ...timings,
          [field]: value,
        });
      };
    
      const handleOpenDayChange = (day) => {
        setTimings({
          ...timings,
          openDays: {
            ...timings.openDays,
            [day]: !timings.openDays[day],
          },
        });
      };

    //   .


  const handleEventImageChange = (e) => {
    const selectedFile = e.target.files[0];
    const objectURL = URL.createObjectURL(selectedFile);

    setEvent((prevEvent) => ({
      ...prevEvent,
      image: selectedFile,
      imagePreviewURL: objectURL,
    }));
  };

  const handleEventSummaryChange = (e) => {
    const summary = e.target.value;
    setEvent((prevEvent) => ({
      ...prevEvent,
      summary,
    }));
  };

  const addEvent = () => {
    setEvents([...events, event]);
    setEvent({ image: '', summary: '', imagePreviewURL: '' });
  };

  //
  const [openConfirmation, setOpenConfirmation] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    // Show the confirmation dialog
    setOpenConfirmation(true);
  };

  const handleConfirmationOk = () => {
    // Close the confirmation dialog
    setOpenConfirmation(false);
  };

  //map
 
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBf-4RPinkTM2vkgskC96dlJrU_tDyMJPI&libraries=places`;
    const [location, setLocation] = useState('');
    const [map, setMap] = useState(null);
  
    useEffect(() => {
      // Load the Google Maps JavaScript API script
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBf-4RPinkTM2vkgskC96dlJrU_tDyMJPI&libraries=places`;
      script.async = true;
      script.defer = true;
  
      script.addEventListener('load', () => {
        initMap();
      });
  
      document.head.appendChild(script);
  
      return () => {
        document.head.removeChild(script);
      };
    }, []);
  
    const initMap = () => {
      const google = window.google;
  
      const mapOptions = {
        center: { lat: 0, lng: 0 }, // Default center coordinates
        zoom: 13,
      };
  
      const map = new google.maps.Map(document.getElementById('map-container'), mapOptions);
  
      // Initialize the PlacesService to enable place autocomplete
      const placesService = new google.maps.places.PlacesService(map);
  
      // Create a Places Autocomplete input field
      const locationInput = document.getElementById('location');
      const autocomplete = new google.maps.places.Autocomplete(locationInput);
  
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (place.geometry && place.geometry.location) {
          map.setCenter(place.geometry.location);
          setLocation(place.formatted_address);
        }
      });
  
      setMap(map);
    };
  
    return (
      <div>
        <Navbar/>
          <FormContainer>
            <Sidebar>
              <SidebarSection>
                <a href="#basic-details" onClick={() => handleSectionChange('basic-details')}>
                  Basic Details
                </a>
              </SidebarSection>
              <SidebarSection>
                <a href="#timings" onClick={() => handleSectionChange('timings')}>
                  Timings
                </a>
              </SidebarSection>
              <SidebarSection>
                <a href="#images" onClick={() => handleSectionChange('images')}>
                  Images
                </a>
              </SidebarSection>
            </Sidebar>
            <FormSection>
              <FormTitle id="basic-details">NGO Registration - Basic Details</FormTitle>
              {currentSection === 'basic-details' && (
                <form>
                    <FormGroup>
                  <Label htmlFor="ngoName">NGO Name</Label>
                  <Input type="text" id="ngoName" name="ngoName" required />
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
                  <Label htmlFor="password">Password</Label>
                  <Input type="password" id="password" name="password" required />
                </FormGroup>

                <FormGroup>
                <Label htmlFor="location">Location</Label>
                <Input type="text" id="location" name="location" required />
              </FormGroup>
              <MapContainer id="map-container"></MapContainer>
            
            


              <FormGroup>
                <Button type="submit">Next</Button>
              </FormGroup>
                <FormGroup>
                  <Label htmlFor="logoImage">Logo Image</Label>
                  <FileInput type="file" id="logoImage" name="logoImage" accept="image/*" required />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="ngoCertificate">NGO Certificate</Label>
                  <FileInput type="file" id="ngoCertificate" name="ngoCertificate" accept=".pdf" required />
                </FormGroup>
                <FormGroup>
                  <Button type="submit">Next</Button>
                </FormGroup>
                </form>
              )}
      
              <FormTitle id="timings">NGO Timings</FormTitle>
              {currentSection === 'timings' && (
                <form>
                  <FormGroup>
                  <Label htmlFor="startTime">Start Time</Label>
                  <Input
                    type="time"
                    id="startTime"
                    name="startTime"
                    value={timings.startTime}
                    onChange={(e) => handleTimingChange('startTime', e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="endTime">End Time</Label>
                  <Input
                    type="time"
                    id="endTime"
                    name="endTime"
                    value={timings.endTime}
                    onChange={(e) => handleTimingChange('endTime', e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Open Days</Label>
                  {Object.entries(timings.openDays).map(([day, isOpen]) => (
                    <div key={day}>
                      <label>
                        <input
                          type="checkbox"
                          checked={isOpen}
                          onChange={() => handleOpenDayChange(day)}
                        />{' '}
                        {day}
                      </label>
                    </div>
                  ))}
                </FormGroup>
                </form>
              )}
      
              <FormTitle id="images">NGO Images</FormTitle>
              {currentSection === 'images' && (
                <form onSubmit={handleRegister}>
                  <FormGroup>
                  <Label htmlFor="numEvents">Number of Events</Label>
                  <Input
                    type="number"
                    id="numEvents"
                    name="numEvents"
                    value={events.length}
                    readOnly
                  />
                </FormGroup>
                <div>
                  <FormTitle>Add Event</FormTitle>
                  <FormGroup>
                    <Label htmlFor="eventImage">Event Image</Label>
                    <FileInput
                      type="file"
                      id="eventImage"
                      name="eventImage"
                      accept="image/*"
                      onChange={handleEventImageChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="eventSummary">Event Summary</Label>
                    <textarea 
                      id="eventSummary"
                      name="eventSummary"
                      rows="4"
                      value={event.summary}
                      onChange={handleEventSummaryChange}
                    ></textarea>
                  </FormGroup>
                  <Button type="button" onClick={addEvent}>
                    Add Event
                  </Button>
                </div>
                <div>
                  <FormTitle>Event List</FormTitle>
                  <ul>
                    {events.map((e, index) => (
                      <li key={index}>
                        <strong>Event {index + 1}</strong>
                        <p>Summary: {e.summary}</p>
                        <p>Image: {e.image.name}</p>
                        <img src={e.imagePreviewURL} alt={`Event ${index + 1}`} />
                      </li>
                    ))}
                  </ul>
                </div>
                <FormGroup>
                  <Button type="submit">Register</Button>
                </FormGroup>
                </form>
              )}
            </FormSection>
            <Dialog open={openConfirmation} onClose={handleConfirmationOk}>
            <DialogTitle>Confirmation</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                NGO details submitted. Please wait for our team to update you.
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
    );
  };
  
  export default RegisterNgo;