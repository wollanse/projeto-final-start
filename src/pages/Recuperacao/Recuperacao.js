import React from "react"
import { Header } from "../../components/Header/Header"
import * as S from "./RecuperacaoStyle"
import Footer from "../../components/footer/Footer"
import logo from "../../assets/logoprojeto.svg"
import { MyButton } from "../../components/button/Button"


export function Recuperacao(){
    return(
        <section>
            <Header/>
            <S.Container>
                <S.FormStyles>
                        <img src={logo} alt='logo' />
                        <h1>Recuperação</h1>
                        <p>Um E-mail de confirmação sera enviado.</p>
                        <form>
                            <input placeholder="E-mail" />
                        </form>
                        <MyButton text={"Enviar"} width="150px" color="#33B652" backcolor="green"/>
                    </S.FormStyles>
            </S.Container>
            <Footer/>
        </section>
    )
}