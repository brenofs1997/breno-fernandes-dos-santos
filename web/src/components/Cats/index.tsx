import { useState } from 'react'
import { Header } from '../Header';

import { Container, InputBlock, Content } from './styles';

export function Cats() {
  const [httpStatus, setHttpStatus] = useState('');

  return (
    <>
      <Header />
      <Container>
        <Content>
          <hr />
          <InputBlock>
            <label>HTTPSTATUS</label>
            <input id="httpstatus"
              value={httpStatus}
              onChange={event => setHttpStatus(event.target.value)} />
          </InputBlock>
        </Content>

        { httpStatus == '' ? 'Campo vazio ou resultado não encontrado...' : <img src={`https://http.cat/${httpStatus}`} width="600" height="600"/>}
      </Container>
    </>
  );
}