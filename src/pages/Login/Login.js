import React from "react"
import logo from '../../assets/logoprojeto.svg'
import * as S from "./LoginStyle"
import { Link } from "react-router-dom"
import { Header } from "../../components/Header/Header"
import { MyButton } from "../../components/button/Button"
import Footer from "../../components/footer/Footer"

export function login(){
    return (
        <S.MainContainer>
            <Header />
                <S.formStyles>
                    <img src={logo} alt='logo' />
                    <h1>Bem-vindo</h1>
                    <form>
                        <input placeholder="E-mail" />
                        <input placeholder="Senha" />
                    </form>
                    <div>
                        <a href=''>Esqueceu a senha? Recupere</a>
                        <a href='../Cadastro/Cadastro.js'>Não tem conta? Cadastre-se</a>
                    </div>
                    <div>
                    <input type='checkbox' id='check'/>
                    <label for="check">lembre-se de mim</label>
                    </div>
                    <MyButton text={"Login"} width="150px"/>
                </S.formStyles>
            <Footer/>
        </S.MainContainer>
    )
}