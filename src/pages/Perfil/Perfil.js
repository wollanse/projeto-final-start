import { MyButton } from "../../components/button/Button"
import * as S from "./PerfilStyle"
import logo from "../../assets/logoprojeto.svg"
import { useState } from "react"
import { Modal } from "../../components/modal/Modal"

export const Perfil = () => {
    const [isModalOpen,setIsModalOpen] = useState (false);
    function abrirModal (e){
        e.preventDefault();
        setIsModalOpen(true)
        console.log(setIsModalOpen)
    }
    function fecharModal (e){
        e.preventDefault();
        setIsModalOpen(false)
        console.log(setIsModalOpen)
    }
    return(
        <>
        {isModalOpen ?(
            <Modal fecharModal = {fecharModal}/>
        ):null}
        <section>
            <S.Container>
                <img src={logo} alt='logo' />
                <h1>Informações do usuário</h1>
                <S.FormStyle>
                <form>
                        <input type='text' placeholder="Nome"></input>
                        <input type='text' placeholder="CEP"></input>
                        <input type='text' placeholder="Endereço"></input>
                        <input type='text' placeholder="Numero_casa"></input>
                        <input type='text' placeholder="Telefone"></input>
                        <input type='e-mail' placeholder="E-mail"></input>
                        <input type='password' placeholder="Senha"></input>
                </form>
                <div className="button">
                    <div>
                    <MyButton text={"Alterar dados"} width="110px" color="#33B652" backcolor="green"/>
                    </div>
                    <div>
                    <MyButton abrirModal = {abrirModal}  text={"Deletar conta"} width="110px" color="#FF4040" backcolor="red"/>
                    </div>
                </div>
                </S.FormStyle>
            </S.Container>

        </section>
        </>
    )
}