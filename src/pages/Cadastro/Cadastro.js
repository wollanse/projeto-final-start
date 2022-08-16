import React, { useState } from 'react';
import * as S from "./Cadastrostyle"
import logo from "../../assets/logoprojeto.svg"
import { MyButton } from "../../components/button/Button"
import { useHistory } from 'react-router-dom';
import { Api } from '../../service/Api';


const initialValue = {
    nome: '',
    cep: '',
    endereco: '',
    numero_casa: '',
    email: '',
    telefone: '',
    senha: '',
    confirmasenha: '',

  }
  
  

export function Cadastro(){
    const [values, setValues] = useState(initialValue);
    const history = useHistory();
  
    function onChange(ev) {
      const { name, value } = ev.target;
  
      setValues({ ...values, [name]: value });
    }
  
    function onSubmit(ev) {
      ev.preventDefault();
      if (values.senha === values.confirmasenha){
        console.log(values)
        Api.post("/usuario",{
        nome:values.nome,
        cep: values.cep,
        endereco: values.endereco,
        numero_casa: values.numero_casa,
        email: values.email,
        telefone: values.telefone,
        senha: values.senha,})
       .then((res) => {
         history.push('/login');
       }).catch(error => console.log(error))
      }else{
        console.log("perfil nao cadastrado")
      }
    }

    return(
            <S.MainContainer>
                <S.formStyles>
                    <img src={logo} alt='logo' />
                    <form onSubmit={onSubmit}>
                        <input id="nome" name="nome" type="text" onChange={onChange}  placeholder="Nome" />
                        <input id="cep" name="cep" type="number" onChange={onChange}  placeholder="CEP" />
                        <div className="endereco">
                            <input id="endereco" name="endereco" type="text" onChange={onChange}  placeholder="Endereço" className="adress"/>
                            <input id="numero_casa" name="numero_casa" type="text" onChange={onChange}  placeholder="numero_casa" className="numero" />    
                        </div>
                        <input id="email" name="email" type="email" onChange={onChange}  placeholder="E-mail" />
                        <input id="telefone" name="telefone" type="number" onChange={onChange}  placeholder="Telefone" />
                        <input id="senha" name="senha" type="passaword" onChange={onChange}  placeholder="Senha"/>
                        <input id="confirmasenha" name="confirmasenha" type="passaword" onChange={onChange}  placeholder="Confirma senha"/>
                    <MyButton type="submit" text={"Criar"} width="150px" color="#33B652" backcolor="green" margin="30px"/>
                    </form>                
                </S.formStyles>
            </S.MainContainer>
            
    )
}