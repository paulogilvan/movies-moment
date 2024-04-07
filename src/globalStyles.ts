import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles =  createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }  
`;

export const Container = styled.div`
  background-color: #DDD;

  @media(max-width: 768px) {
    overflow-x: hidden;
  }
`;

export const Title = styled.h2`
  color: #333;
  text-align: center;
  font-size: 18px;
  line-height: 45px;
  letter-spacing: -1px;

`;

export const ContainerFilmes = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  margin-top: 10px;
  padding-bottom: 20px;
  justify-items: center;

  @media(max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media(max-width: 425px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  } 
`;

export const Filmes = styled.div`
  img {
      width: 200px;
      display: block;
      border-radius: 10px;
    }    
`;