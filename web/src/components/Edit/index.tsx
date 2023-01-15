import axios, { AxiosError } from 'axios';
import { useState } from 'react'
import { toast } from 'react-toastify';
import { Header } from '../Header';

import { Container, InputBlock, Content } from './styles';

export function Edit() {
  const [dogPicture, setDogPicture] = useState('');

  function handleSubmit() {
    axios("https://random.dog/woof?include=jpg,jpeg,png,gif")
    .then((response) => {
      setDogPicture(response.data)
    }).catch((error) => {
      let errorMenssage = '';
      if (error instanceof AxiosError) {
        errorMenssage = error.response?.data.message
        toast.error(errorMenssage);
      }
    })
  }

  return (
    <>
      <Header />
      <Container>
        <Content>
          <hr />
          <InputBlock>
          <button onClick={()=> handleSubmit()}>REFRESH</button>
          </InputBlock>
            
        </Content>

        { dogPicture == '' ? 'Campo vazio ou resultado não encontrado...' : <img src={`https://random.dog/${dogPicture}`} width="600" height="600"/>}
      </Container>
    </>
  );
}