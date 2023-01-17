import React, { useState, FormEvent, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Checkbox from '@material-ui/core/Checkbox';
import api from "../../../services/api";
import { Container, InputBlock, Content } from './styles';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { FormControlLabel } from '@material-ui/core';
import { getItem, setItem } from "../../../utils/localstorage"


export function FormLogin() {
  const goBack = useNavigate();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

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

  function rememberMe(event: React.ChangeEvent<HTMLInputElement>) {
    setIsChecked(event.target.checked)
    setItem('remember',event.target.checked ? 'true' : 'false' )
  }

  useEffect(() => {
  
    if (getItem('remember') == 'true') {
      goBack('/home');
    }

  });

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

        <FormControlLabel control={<Checkbox checked={isChecked} onChange={rememberMe} />} label="Lembrar de mim" />

        <button type="submit" >ACESSAR CONTA</button>
      </form>
    </Container >
  );
}