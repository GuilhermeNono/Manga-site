import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

export const FloatCard = styled.div`
  height: 8vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LeftLine = styled.span`
  width: 150px;
  height: 2px;
  background: linear-gradient(
    to right,
    rgba(33, 33, 33, 1),
    rgba(33, 33, 33, 0.1)
  );
  margin-left: 45px;
`;

export const RightLine = styled.span`
  width: 150px;
  height: 2px;
  background: linear-gradient(
    to left,
    rgba(33, 33, 33, 1),
    rgba(33, 33, 33, 0.1)
  );
  margin-right: 45px;
`;

export const Card = styled.div`
  position: absolute;
  left: 15vw;
  right: 0;
  top: 640px;
  bottom: 0;
  width: 70vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #454545;
  height: 100px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const CardText = styled.span`
  font-size: 48px;
`;
