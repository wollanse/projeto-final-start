import * as S from "./Cadastrostyle"
import logo from "../../assets/logoprojeto.svg"
import {Header} from "../../components/Header/Header"
import { MyButton } from "../../components/button/Button"
import Footer from "../../components/footer/Footer"

export function Cadastro(){
    return(
            <S.MainContainer>
                <Header />
                <S.formStyles>
                    <img src={logo} alt='logo' />
                    <form>
                        <input placeholder="Nome" />
                        <input placeholder="CEP" />
                        <div className="endereco">
                            <input placeholder="Endereço" className="adress"/>
                            <input placeholder="N°" className="numero" />    
                        </div>
                        <input placeholder="E-mail" />
                        <input placeholder="Telefone" />
                        <input placeholder="Senha"/>
                        <input placeholder="Confirma senha"/>
                    </form>
                    <MyButton text={"Criar"} width="150px" />
                </S.formStyles>
                <Footer/>
            </S.MainContainer>
            
    )
}