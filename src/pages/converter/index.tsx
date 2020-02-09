import React from "react";

import { Container, Content, User, Scroll, NumberList } from "./styles";

import converter from "number-to-words";

const Converter: React.FC = () => {
  return (
    <Container>
      <Content>
        <div>
          <h1>Converta seus números</h1>
          <span>
            De forma simples e gratuita. Buscando agilizar seu dia a dia ツ
          </span>
        </div>
        <User>
          <form action="submit">
            <div>
              <span>Insira um número:</span>
              <input name="user" type="number" />
              <button type="submit">Convert to text</button>
            </div>
            <NumberList></NumberList>
          </form>
        </User>
      </Content>
      {console.log(converter.toWords(125))}
    </Container>
  );
};

export default Converter;
