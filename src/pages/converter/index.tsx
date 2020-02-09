import React from "react";

import * as Yup from "yup";
import { Form, Input } from "@rocketseat/unform";
import converter from "number-to-words";

import { Container, Content, User, Scroll, NumberList, Send } from "./styles";

const Converter: React.FC = () => {
  const schema = Yup.object().shape({
    number: Yup.number().typeError()
  });
  function handleSubmit(data: Object) {
    console.log(data);
  }

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
          <div>
            <Form schema={schema} onSubmit={handleSubmit}>
              <Send>
                <div>
                  <label>Insira um número:</label>
                  <Input name="number" type="number" />
                  <button type="submit">Convert to text</button>
                </div>
              </Send>
            </Form>
            <NumberList>
              <Scroll>
                <li>O número 20 é vinte</li>
              </Scroll>
            </NumberList>
            <span>There’s one numbers translated</span>
          </div>
        </User>
      </Content>
      {console.log(converter.toWords(125))}
    </Container>
  );
};

export default Converter;
