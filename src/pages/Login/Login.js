import React, { useState, useContext } from "react"
import logo from '../../assets/logoprojeto.svg'
import * as S from "./LoginStyle"
import { useHistory } from 'react-router-dom';
import { MyButton } from "../../components/button/Button"
import Contexts from "../../contexts/Context";
import { Api } from "../../service/Api";
function initialState() {
    return { email: '', senha: '' };
  }
  


export function Login(){
    const [values, setValues] = useState(initialState);
    const { setToken } = useContext(Contexts);
    const history = useHistory();

    function onChange(event) {
      const { value, name } = event.target;
  
      setValues({
        ...values,
        [name]: value
      });
    }
  
    function onSubmit(event) {
      event.preventDefault();
      let token = ""
      Api.post("/login", {
        email: values.email,
        senha: values.senha,
      })
      .then((res) => {
        console.log(res)
        token = res.data.token
        history.push('/');
      }).catch(err => alert ("login invalido"))
  
      if (token) {
        setToken(token);
        return history.push('/');
      }
  
      setValues(initialState);
    }
    
        return (
            <S.MainContainer>
                    <S.FormStyles>
                        <img src={logo} alt='logo' />
                        <h1>Bem-vindo</h1>
                        <form onSubmit={onSubmit}>
                            <input type="email" name="email" id= "email"onChange={onChange}
                            value={values.email} placeholder="E-mail" />
                            <input type="password" name="senha" id="senha" onChange={onChange} 
                            value={values.senha} placeholder="Senha" />
                        
                        <div>
                            <a href='../Recuperacao/Recuperacao.js'>Esqueceu a senha? Recupere</a>
                            <a href='../Cadastro/Cadastro.js'>Não tem conta? Cadastre-se</a>
                        </div>
                        <br/>
                        <MyButton type="submit" text={"Login"} width="150px" height="60px" color="#33B652" backcolor="green"/>
                        </form>                
                    </S.FormStyles>
            </S.MainContainer>
        )
    }