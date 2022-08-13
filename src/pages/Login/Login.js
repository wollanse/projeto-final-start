import React from "react"
import logo from '../../assets/logoprojeto.svg'
import * as S from "./LoginStyle"
import { MyButton } from "../../components/button/Button"


export function Login(){
    return (
        <S.MainContainer>
                <S.FormStyles>
                    <img src={logo} alt='logo' />
                    <h1>Bem-vindo</h1>
                    <form>
                        <input placeholder="E-mail" />
                        <input placeholder="Senha" />
                    </form>
                    <div>
                        <a href='../Recuperacao/Recuperacao.js'>Esqueceu a senha? Recupere</a>
                        <a href='../Cadastro/Cadastro.js'>Não tem conta? Cadastre-se</a>
                    </div>
                    <div>
                    <input type='checkbox' id='check'/>
                    <label for="check">lembre-se de mim</label>
                    </div>
                    <MyButton text={"Login"} width="150px" height="60px" color="#33B652" backcolor="green"/>
                </S.FormStyles>
        </S.MainContainer>
    )
}