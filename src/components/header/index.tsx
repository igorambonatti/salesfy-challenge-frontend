import React from "react";

import { Container, Nav, User, Links } from "./styles";

import logo from "../../assets/logo.svg";

const Header: React.FC = () => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src={logo} alt="Nubank" />
        </a>
        <Links>
          <a href="/">Início</a>
          <a href="/">Conta Digital</a>
          <a href="/">Cartão de crédito</a>
          <a href="/">Rewards</a>
          <a href="/">Empréstimo</a>
          <a href="/">Sobre nós</a>
          <a href="/">Carreiras</a>
          <a href="/converter">Number converter</a>
        </Links>
      </Nav>

      <User>
        <a href="/">Login</a>
        <button>Pedir meu cartão de crédito</button>
      </User>
    </Container>
  );
};

export default Header;
