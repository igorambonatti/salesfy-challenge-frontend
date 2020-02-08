import styled from "styled-components";

export const Container = styled.div``;
export const Content = styled.div`
  max-width: 1328px;
  display: flex;
  margin: auto;
  height: calc(100vh - 130px);
  justify-content: center;
  align-items: center;

  div {
    padding: 64px;
    padding-right: 0px;
    padding-bottom: 0px;
    align-items: center;
    width: 769px;
    text-align: left;

    h1 {
      color: rgb(138, 5, 190);
      font-size: 48px;
    }
    span {
      display: flex;
      width: 471px;
      color: rgb(118, 118, 118);
      font-size: 48px;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  margin: auto;
  height: calc(100vh - 80px);
  justify-content: center;
  text-align: left;
  img {
    height: 100%;
  }
`;
