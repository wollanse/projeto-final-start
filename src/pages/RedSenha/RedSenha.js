import { Header } from "../../components/Header/Header"
import { MyButton } from "../../components/button/Button"
import Footer from "../../components/footer/Footer"
import * as S from "./RedSenhaStyle.js"
import logo from "../../assets/logoprojeto.svg"

export function RedSenha(){
    return(
        <section>
            <Header/>
            <S.Container>
                <S.FormStyles>
                        <img src={logo} alt='logo' />
                        <h1>Redefinir Senha</h1>
                        <p>Digite a Nova Senha.</p>
                        <form>
                            <input placeholder="Nova Senha" />
                            <input placeholder="Confirmar senha" />
                        </form>
                        <MyButton text={"Enviar"} width="150px" color="#33B652" backcolor="green"/>
                    </S.FormStyles>
            </S.Container>
            <Footer/>
        </section>
    )
}