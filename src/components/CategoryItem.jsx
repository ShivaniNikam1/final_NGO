import React from 'react';
import styled from "styled-components";


const Container = styled.div`
  flex: 1;
  margin: 80px 3px 3px;
  height: 50vh;
  border-top: 20px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 500px;
  filter: brightness(50%);
  object-fit: cover;

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  color: white;
  text-align: center;
`;



//rafce
const CategoryItem = ({ item }) => {
    return (
      <Container>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Desc>{item.desc}</Desc>
        </Info>
      </Container>
    );
  };
  
  export default CategoryItem;