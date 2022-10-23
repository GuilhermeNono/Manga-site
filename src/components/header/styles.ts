import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 75px;
  background: #181A21;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  position: fixed;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-bottom: 1px solid #2A2E3C;
  z-index: 999;
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
  background-color: #b8b8b8;
  background-image: url("img/pfp.svg");
  background-size: 100%;
  background-position: center;
`;
