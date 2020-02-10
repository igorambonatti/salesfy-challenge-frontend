/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import converter from 'number-to-words';

import { Container, Content, User, Scroll, NumberList, Send } from './styles';

export default function Converter() {
  const [numbers, setNumbers] = useState([]);
  const [currentNumber, setCurrentNumber] = useState([]);

  const schema = Yup.object().shape({
    number: Yup.number().typeError(),
  });

  function handleSubmit(data) {
    setNumbers([...numbers, data]);
    setCurrentNumber([data]);
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
                  <label>
                    Insert a number:
                    <Input name="number" type="number" />
                  </label>
                  <button type="submit">Convert to text</button>
                </div>
              </Send>
            </Form>
            {currentNumber.map(num => (
              <p key={num}>
                The number {num.number} in text format is{' '}
                {converter.toWords(num.number)}
              </p>
            ))}

            <NumberList>
              <Scroll>
                {numbers.map(e => (
                  <li key={e.number}>
                    The number{' '}
                    {e.number === numbers.length ? (
                      <strong>{e.number}</strong>
                    ) : (
                      e.number
                    )}{' '}
                    in text format is{' '}
                    {e.number === numbers.length ? (
                      <strong>{converter.toWords(e.number)}</strong>
                    ) : (
                      converter.toWords(e.number)
                    )}
                  </li>
                ))}
              </Scroll>
            </NumberList>
            <span>
              There’s {converter.toWords(numbers.length)} numbers translated
            </span>
          </div>
        </User>
      </Content>
    </Container>
  );
}
