import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 75px;
  background-color: #0b111b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  position: fixed;
`;

export const Logo = styled.div`
  margin-left: 30px;
  background-color: aqua;
  cursor: pointer;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-right: 30px;
  cursor: pointer;
`;

export const EmptySpace = styled.span`
flex-grow: 2;
`

export const Name = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: auto;
  margin-left: 40px;
`;

export const ProfilePicture = styled.div`
  width: 41px;
  height: 41px;
  border-radius: 50%;
  background-color: azure;
`;
