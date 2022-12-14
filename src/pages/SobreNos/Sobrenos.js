import { Container } from "./SobrenosStyle"
import wol from '../../assets/wol.png'
import eri from '../../assets/eri.png'
import gab from "../../assets/gab.png"
import linked from '../../assets/linkedin.png'
import git from '../../assets/GitHUb.png'



export const Sobrenos = () => {
    return(
        <section>
        <Container>
            <div className="group">
            <div>
                <img className="img1" src={wol} alt="Wollanse"/>
                <p>Wollanse Wallach</p>
                <div className="link">
                <a href="https://www.linkedin.com/in/wollanse-wallach-b58b5a233/" target="blank">
                    <img className="img2" src={linked} alt='linkedin'/>  
                </a>
                <a href="https://github.com/wollanse" target="blank">
                    <img className="img2" src={git} alt='git'/>  
                </a>
                </div>
            </div>
            <div>
                <img className="img1" src={eri} alt="Erick"/>
                <p>Erick Nejaim</p>
                <div className="link">
                <a href="https://www.linkedin.com/in/erick-nejaim-742931226/" target="blank">
                    <img className="img2" src={linked} alt='linkedin'/>  
                </a>
                <a href="https://github.com/ErickNejaim" target="blank">
                    <img className="img2" src={git} alt='git' />  
                </a>
                </div>
            </div>
            
            <div>
                <img className="img1" src={gab} alt="Gabriel"/>
                <p>Gabriel Diniz</p>
                <div className="link">
                <a href="https://www.linkedin.com/in/gabriel-diniz-578964243/" target="blank">
                    <img className="img2" src={linked} alt='linkedin'/>  
                </a>
                <a href="https://github.com/GabrielDinizRV" target="blank">
                    <img className="img2" src={git} alt='git' />  
                </a>
                </div>
            </div>
            </div>
            <div className="text">
                <h1>O que motivou a cria????o do ColetaTech?</h1>
                <p1>Nossa inspira????o vem de nossa realidade, desde 
                    as praias at?? as ruas,<br/> cobertas de lixo... N??s 
                    temos uma cidade linda, infelizmente ?? dificil de 
                    <br/>
                    perceber com toda polui????o, n??s queremos fazer
                    um mundo melhor e <br/>limpo para se viver.</p1>
            </div>
        </Container>
        </section>

    )
}