import React from 'react';
import styled from "styled-components";
import { categories } from '../data';
import CategoryItem from './CategoryItem';
import Navbar from './Navbar';



const Container = styled.div`
  display: flex;
  flex-direction:column;
  padding: 20px;
  justify-content: space-between;

`

const Categories = () => {
  <Navbar />
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};
export default Categories