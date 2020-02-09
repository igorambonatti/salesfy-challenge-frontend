import styled from "styled-components";

import PerfectScrollbar from "react-perfect-scrollbar";

export const Container = styled.div`
  display: flex;
  height: calc(100vh - 80px);
`;

export const Content = styled.div`
  margin: auto;
  margin-top: 50px;
  display: flex;
  justify-items: center;
  height: 350px;
  border-radius: 7px;
  > div {
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

export const User = styled.div`
  display: flex;

  form {
    padding: 30px;
    height: 550px;
    width: 650px;
    margin: auto;
    background-color: #81259d;
    box-shadow: 0 0 1.8rem rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    justify-content: center;
    > div {
      display: block;
      span {
        margin-top: 30px;
        margin-left: 116px;
        color: #fff;
        font-size: 12px;
        margin-bottom: 4px;
      }
      input {
        margin-left: 116px;
        height: 35px;
        background-color: rgba(255, 255, 255, 0);
        font-family: inherit;
        border-style: solid;
        border-width: 0 0 1px;
        border-color: #e6e5e5;
        color: #fff;
        font-size: 18px;
        box-sizing: border-box;
        transition: all 0.15s linear;
      }
    }
    button {
      color: #81259d;
      margin-left: 20px;
      height: 35px;
      width: 200px;
      background: #fff;
      border-style: none;
      border-radius: 4px;
      box-shadow: 0 0 1.8rem rgba(0, 0, 0, 0.1);

      &:hover {
        color: #000;
      }
    }
  }
`;

export const NumberList = styled.div`
  margin: auto;
  margin-top: 30px;
  height: 150px;
  width: 100%;
  background: #fff;
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
  &:hover {
    background: none;
    border: 0;
  }
`;
