import React from "react";

import Header from "../../components/header/index";
import { Container, Content, Card } from "./styles";

import converter from "number-to-words";

import card from "../../assets/card.png";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <div>
          <h1>Cartão de Crédito</h1>
          <span>
            Moderno, simples e gratuito. Tudo para deixar o controle nas suas
            mãos.
          </span>
        </div>
        <Card>
          <img src={card} alt="Imagem mostrando cartão NU" />
        </Card>
      </Content>
      {console.log(converter.toWords(125))}
    </Container>
  );
};

export default Home;
