import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const volunteers = [
    { name: 'John Doe', email: 'john@example.com', phoneNumber: '9840338873' },
    { name: 'Jane Smith', email: 'jane@example.com', phoneNumber: '947266340' },
    // Add more volunteers as needed
  ];

  const VolunteerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const VolunteerCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  display: flex;
  flex-direction: row; /* Changed to row */
  align-items: center; /* Center vertically */
`;

const RoundIcon = styled.div`
  background-color: #000000;
  color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 50%; /* Creates a round shape */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px; /* Adjust the spacing between the icon and text */
`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin: 0;
`;

const CardInfo = styled.div`
  margin-top: 10px;
  p {
    margin: 5px 0;
  }
`;

const AcceptButton = styled.button`
  background-color: #268f63;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
`;



const Volunteer = () => {
  return (
<VolunteerContainer>
      {volunteers.map((volunteer, index) => (
        <VolunteerCard key={index}>
          <RoundIcon>
            <FontAwesomeIcon icon={faUserCircle} />
          </RoundIcon>
          <div>
            <CardTitle>{volunteer.name}</CardTitle>
            <CardInfo>
              <p>Email: {volunteer.email}</p>
              <p>Phone Number: {volunteer.phoneNumber}</p>
            </CardInfo>
            <AcceptButton>Accept</AcceptButton>
          </div>
        </VolunteerCard>
      ))}
    </VolunteerContainer>
  )
}

export default Volunteer