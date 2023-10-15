import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDollarSign,
  faCalendar,
  faUsers,
  faHandHoldingHeart,
  faBell, // Add the notification icon
} from '@fortawesome/free-solid-svg-icons';

// Styled Components
const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow cards to wrap to the next row if needed */
  justify-content: space-between;
  margin: 20px;
`;

const DashboardCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  flex-basis: calc(33.33% - 20px);
  text-align: center;
  margin-bottom: 20px; /* Add margin between cards */
`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin: 15px;
`;

const CardValue = styled.p`
  font-size: 24px;
  margin: 10px 0;
`;

const IconContainer = styled.div`
  color: #f0d62e;
  padding-bottom: 10px;
`;

// Notification Box Card
const NotificationBox = styled.div`
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  flex-basis: 100%;
  text-align: left; // Align text to the left
  display: flex;
  justify-content: space-between; // Align items horizontally
  align-items: center; // Align items vertically
`;

const NotificationText = styled.p`
  font-size: 16px;
  margin: 0;
`;

const NotificationIcon = styled.div`
  color: #ff5733;
  margin-right: 10px; // Add space between icon and text
`;

const AcceptButton = styled.button`
  background-color: #4caf50; // Customize button color
  color: #fff; // Customize button text color
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
`;

const AcceptButtonContainer = styled.div`
  margin-top: 10px; // Add space between text and button
`;
const Dashboard = () => {


    const collaborationRequest = {
        ngoName: 'Aarna Foundation',
        email: 'ngo@example.com',
      };
    
      // Handle accepting collaboration request
      const handleAcceptCollaboration = () => {
        // Handle the acceptance logic here
        alert('Collaboration request accepted!');
      };



  return (
    <DashboardContainer>
      <DashboardCard>
        <IconContainer>
          <FontAwesomeIcon icon={faDollarSign} size="2x" />
        </IconContainer>
        <CardTitle>Donations</CardTitle>
        <CardValue>$5,000</CardValue>
      </DashboardCard>
      <DashboardCard>
        <IconContainer>
          <FontAwesomeIcon icon={faCalendar} size="2x" />
        </IconContainer>
        <CardTitle>Number of Events</CardTitle>
        <CardValue>10</CardValue>
      </DashboardCard>
      <DashboardCard>
        <IconContainer>
          <FontAwesomeIcon icon={faUsers} size="2x" />
        </IconContainer>
        <CardTitle>Volunteers</CardTitle>
        <CardValue>25</CardValue>
      </DashboardCard>
      <DashboardCard>
        <IconContainer>
          <FontAwesomeIcon icon={faHandHoldingHeart} size="2x" />
        </IconContainer>
        <CardTitle>Beneficiaries Served</CardTitle>
        <CardValue>100</CardValue>
      </DashboardCard>
      <div> 
      <h3>  Notifications  </h3>
      {/* Notification Box */}
      <NotificationBox>
        <NotificationIcon>
          <FontAwesomeIcon icon={faBell} size="2x" />
        </NotificationIcon>
        <NotificationText>
          You have a new collaboration request from : {' '}
          <strong>{collaborationRequest.ngoName}</strong> (
          {collaborationRequest.email}).{' '}

          <AcceptButtonContainer>
          <AcceptButton onClick={handleAcceptCollaboration}>
            Accept Collaboration
          </AcceptButton>
          </AcceptButtonContainer>
          
        </NotificationText>
      </NotificationBox>
      </div>

      
    </DashboardContainer>
  );
};

export default Dashboard;
