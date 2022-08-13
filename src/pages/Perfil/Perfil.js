import { MyButton } from "../../components/button/Button"
import * as S from "./PerfilStyle"
import logo from "../../assets/logoprojeto.svg"
 

export const Perfil = () => {
    return(
        <section>

            <S.Container>
                <img src={logo} alt='logo' />
                <h1>Informações do usuário</h1>
                <S.FormStyle>
                <form>
                        <input type='text' placeholder="Nome"></input>
                        <input type='text' placeholder="CEP"></input>
                        <input type='text' placeholder="Endereço"></input>
                        <input type='text' placeholder="N°"></input>
                        <input type='text' placeholder="Telefone"></input>
                        <input type='e-mail' placeholder="E-mail"></input>
                        <input type='password' placeholder="Senha"></input>
                </form>
                <div className="button">
                    <div>
                    <MyButton text={"Alterar dados"} width="150px" color="#33B652" backcolor="green"/>
                    </div>
                    <div>
                    <MyButton text={"Deletar conta"} width="150px" color="#FF4040" backcolor="red"/>
                    </div>
                </div>
                </S.FormStyle>
            </S.Container>

        </section>
    )
}