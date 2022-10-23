import styled from "styled-components";

export const Container = styled.div`
  width: 180px;
  height: 230px;
  border-radius: 3px;
  background-color: black;
  filter: drop-shadow(5px 5px 8px rgba(0, 0, 0, 0.5));
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease 300ms;

  &:hover{
    transform: scale(1.05);
  }

`;

export const Capa = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
`;