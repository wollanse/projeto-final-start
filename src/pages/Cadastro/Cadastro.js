import * as S from "./Cadastrostyle"
import logo from "../../assets/logoprojeto.svg"
import { MyButton } from "../../components/button/Button"


export function Cadastro(){
    return(
            <S.MainContainer>
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
                    <MyButton text={"Criar"} width="150px" color="#33B652" backcolor="green" margin="30px"/>
                </S.formStyles>
            </S.MainContainer>
            
    )
}