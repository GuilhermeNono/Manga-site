import styled from 'styled-components';

interface PageState{
    isOn?: boolean;
}



export const Container = styled.div`
  padding-top: 7.5vh;
  height: 70vh;
  width: 100%;
  background-color: #0b122b;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  font-size: 48px;
`;

export const Carousel = styled.img`
    width: 100%;
    height: 100%;
`;

export const Next = styled.div`
    position: absolute;
    right: 0;
    height: 100%;
    width: 60px;
    background: linear-gradient(270deg, #0B111B 0%, rgba(0, 0, 0, 0) 100%);
`

export const Previous = styled.div`
    position: absolute;
    left: 0;
    height: 100%;
    width: 60px;
    background: linear-gradient(90deg, #0B111B 0%, rgba(0, 0, 0, 0) 100%);
`

export const EmptySpace = styled.span`

`;

export const Pages = styled.span<PageState>`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${(state) => state.isOn ? "#fff" : "#919191"};
    cursor: pointer;
    transition: 300ms;
    z-index: 7777;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &:hover{
        transform: scale(1.2);
    }
`;

export const Page = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    position: absolute;
    top: 600px;
    /* margin-bottom: 150px; */
`;

