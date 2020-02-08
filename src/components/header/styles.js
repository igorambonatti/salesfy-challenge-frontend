import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px;
`;
export const Nav = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-left: 32px;
  }
`;
export const User = styled.div`
  a {
    padding: 19px 32px;
    color: rgb(138, 5, 190);
    opacity: 0.9;
    min-height: 56px;
    font-size: 18px;
    transition: 0.3s;
    &:hover {
      opacity: 0.65;
    }
  }
  button {
    padding: 19px 32px;
    color: #fff;
    font-size: 18px;
    background-color: rgb(138, 5, 190);
    min-height: 80px;
    border-style: none;
    transition: 0.3s;
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Links = styled.ul`
  margin-left: 16px;
  a {
    color: rgb(118, 118, 118);
    opacity: 0.9;
    font-style: none;
    padding: 19px 12px;
    font-size: 17.8px;
    font-weight: normal;
    transition: 0.3s;
    &:hover {
      color: rgb(138, 5, 190);
      opacity: 0.7;
    }
  }
`;
export const Spotlight = styled.a`
  a {
    color: rgb(138, 5, 190);
    opacity: 0.8;
    transition: 0.3s;
    &:hover {
      opacity: 1;
    }
  }
`;
