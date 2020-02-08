import styled from "styled-components";

export const Container = styled.div``;
export const Content = styled.div`
  max-width: 1328px;
  display: flex;
  margin: auto;
  height: calc(100vh - 80px);
  padding: 64px 64px 0 0;
  justify-content: center;
  text-align: left;
  position: relative;
  div {
    height: 658px;
    width: 769px;
    padding: 64px 64px 64px 0;
  }

  img {
    height: 100%;
  }
`;
