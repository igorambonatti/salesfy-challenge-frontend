import React from "react";

import { Container } from "./styles";

import converter from "number-to-words";

const Converter: React.FC = () => {
  return (
    <Container>
      <h1>testando</h1>
      {console.log(converter.toWords(125))}
    </Container>
  );
};

export default Converter;
