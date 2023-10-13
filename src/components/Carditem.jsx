import styled from "styled-components";

// Define a styled component for the hero section
const HeroSection = styled.div`
  // display:flex;
  // justify content: space-between;
  // align-items: center;
  padding: 8px;
  background-color: #609966;
  margin: 5px 60px;
`;

// Define a styled component for the individual card
const Card = styled.div`
  width: 100%;
  border: 1px solid transparent;
  border-radius: 0 3rem 0 3rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color: #F7FFE5;
`;

// Define a styled component for the card image
const CardImage = styled.img`
  max-width: 100%;
  height: 350px;
`;

// Define a styled component for the card title
const CardTitle = styled.h3`
  font-size: 20px;
  margin: 12px 0;
`;

// Define a styled component for the card content
const CardContent = styled.p`
  font-size: 16px;
`;
const Carditem = ({ image, name, words }) => {
  return (
    <HeroSection>
      <Card>
        <CardImage src={image} alt="" srcset="" />
        <CardTitle>{name}</CardTitle>
        <CardContent>{words}</CardContent>
      </Card>
    </HeroSection>
  );
};

export default Carditem;
