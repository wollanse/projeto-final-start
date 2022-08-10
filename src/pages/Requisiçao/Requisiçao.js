import React from "react"
import * as styles from "./RequisiçaoStyle.js"
import { MyButton } from "../../components/button/Button.js"
import { Header } from "../../components/Header/Header.js"
import Imgreq from "../../assets/imgReq.png"
import Footer from "../../components/footer/Footer"

export function Requisicao(){
    return (
        <section>
            <Header />
            <styles.Container>
            <styles.Left>
                <h1>Faça agora a sua <br/> requisição</h1>

                <p>Sabemos como é difícil encontrar pontos de coleta <br/>perto de você, por isso nosso objetivo é cuidar<br/>
                dela, para que todos possam reciclar resíduos de<br/> 
                maneira correta e consciente!</p>

                <form>
                    <input type={"text"} placeholder="Nome completo" />
                    <input type={"text"} placeholder="Ponto de referência" />
                    <textarea rows={10} cols={40}  placeholder="Materiais descartados" />
                </form>

                <MyButton width={"200px"} text={"Solicitar"} handle={() => alert("Foi solicitado")} color="#33B652" backcolor="green"/> 
            </styles.Left>
            <styles.Right>
                <h1>INSTRUÇÕES</h1>
                <ol>
                    <li>Separar o lixo reclicado em várias<br/>
                        sacolas diferentes antes da coleta.</li>
                    <li>Lavar bem as garrafas, caixas,<br/> 
                        potes e o que mais você estiver<br/>
                        reciclando.</li>
                    <li>Sempre ter alguém no dia da<br/> 
                        coleta ou manter ele fora da<br/>
                        residência.</li>
                    <li>Caso não saiba separar, todo os<br/> 
                        residuos em sua casa, leia a página<br/>
                        de Reciclagem. </li>
                </ol>
                <img className="imgreq" src={Imgreq} alt="ImgReq"/>
            </styles.Right>
        </styles.Container>
        <Footer />
        </section>
    )
}