import styled from 'styled-components';

interface PageState{
    isOn?: boolean;
}

export const Container = styled.div`
  padding-top: 8vh;
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

export const EmptySpace = styled.span`
`

export const Pages = styled.span<PageState>`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${(state) => state.isOn ? "#fff" : "#919191"};
    cursor: pointer;
    transition: 300ms;

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
    margin-bottom: 50px;
`;

