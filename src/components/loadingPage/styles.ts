import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: center;

  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

@keyframes fade-out {
  0%{
      opacity: 1;
  }
  100%{
      opacity: 0;
  }
}

`;

export const Loading = styled.span`

width: 50px;
background-color: red;
height: 50px;
animation-name: spin;
animation-duration: 3s;
animation-iteration-count: infinite;

@keyframes spin {
    0%{
        transform: rotate(0deg);
    }
    25%{
        transform: rotate(90deg);
    }
    50%{
        transform: rotate(180deg);
    }
    75%{
        transform: rotate(270deg);
    }
    100%{
        transform: rotate(360deg);
    }
}

`
