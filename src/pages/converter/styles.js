import styled from 'styled-components';

import PerfectScrollbar from 'react-perfect-scrollbar';

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
  max-width: 1200px;
  justify-content: center;
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
    > span {
      display: flex;
      width: 471px;
      color: rgb(118, 118, 118);
      font-size: 48px;
    }
  }
`;

export const User = styled.div`
  > div {
    background-color: #81259d;
    box-shadow: 0 0 1.8rem rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    padding: 30px;
    span {
      color: #fff;
      font-size: 14px;
    }
  }
  p {
    color: #fff;
    font-size: 14px;
    font-style: none;
    text-align: center;
    margin: 10px;
  }
  form {
    margin: auto;
    justify-content: center;
    > div {
      span {
        display: flex;
      }
      label {
        width: 100px;
        color: #fff;
        font-size: 12px;
        margin-bottom: 4px;
      }
      input {
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
        width: 100px;
        margin-left: 10px;
      }
    }
    button {
      color: #81259d;
      font-size: 15px;
      margin-left: 20px;
      height: 40px;
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
  margin-top: 10px;
  height: 150px;
  width: 100%;
  margin-bottom: 15px;
  background: #fff;
`;
export const Send = styled.div`
  display: flex;
  div {
    margin: auto;
  }
`;
export const Scroll = styled(PerfectScrollbar)`
  li {
    font-size: 14px;
    margin: 3px 0 3px 0;
    color: #81259d;
  }
  max-height: 150px;
  padding: 5px 15px;
  &:hover {
    background: none;
    border: 0;
  }
`;
