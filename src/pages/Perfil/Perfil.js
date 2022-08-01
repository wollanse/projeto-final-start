import { MyButton } from "../../components/button/Button"
import { Header } from '../../components/Header/Header'
import Footer from "../../components/footer/Footer"
import * as S from "./PerfilStyle"
import logo from "../../assets/logoprojeto.svg"
 

export const Perfil = () => {
    return(
        <section>
            <Header />
            <S.Container>
                <img src={logo} alt='logo' />
                <h1>Informaçoes do usuario</h1>
                <S.FormStyle>
                <form>
                    <div>
                        <input type='text' placeholder="Nome"></input>
                        <input type='text' placeholder="CEP"></input>
                    </div>
                    <div>
                        <input type='text' placeholder="Endereço"></input>
                        <input type='text' placeholder="Telefone"></input>
                        <input type='text' placeholder="N°"></input>
                    </div>
                    <div>
                        <input type='e-mail' placeholder="E-mail"></input>
                        <input type='password' placeholder="Senha"></input>
                    </div>
                </form>
                <div className="button">
                    <div>
                    <MyButton text={"Alterar dados"} width="150px"/>
                    </div>
                    <div>
                    <MyButton text={"Deletar conta"} width="150px"/>
                    </div>
                </div>
                </S.FormStyle>
            </S.Container>
            <Footer />
        </section>
    )
}