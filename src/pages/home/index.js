import React from 'react';

import { Container, Content, Card } from './styles';

import card from '../../assets/card.png';

export default function Home() {
  return (
    <Container>
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
    </Container>
  );
}
