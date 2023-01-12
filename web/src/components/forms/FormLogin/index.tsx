import React, { useState, FormEvent, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import api from "../../../services/api";
import { Container, InputBlock } from './styles';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';


export function FormLogin() {
  const goBack = useNavigate();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    await api.post('auth/signin', { username, password })
      .then((response) => {
        goBack('/home');
      }).catch((error) => {
        let errorMenssage = '';
        if (error instanceof AxiosError) {
          errorMenssage = error.response?.data.message
          toast.error(errorMenssage);
        }
      })
  }

  return (
    <Container >
      <form onSubmit={handleSubmit}>
        <hr />
        <InputBlock>
          <label htmlFor="username">USERNAME</label>
          <input id="username"
            value={username}
            onChange={event => setUserName(event.target.value)}
          />
        </InputBlock>
        <InputBlock>
          <label htmlFor="password">PASSWORD</label>
          <input id="password"
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </InputBlock>
        <button type="submit" >ACESSAR CONTA</button>
      </form>
    </Container >
  );
}