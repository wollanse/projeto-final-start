import Imghome from '../../assets/imghome.png';
import {Container} from './HomeStyle.js'
import Hcomp from '../../components/homecomp/Hcomp.js'




function Home(){
    return(
    <Container>
            <div className='home'>
            <div className='textop'>
                <h1>Você recicla lixo?<br/>
                    Já parou para pensar como isso impacta o ambiente ao seu redor?</h1>
                <p>Reciclar é dar ao meio ambiente a oportunidade de viver um novo ciclo.
                 Ignorar a reciclagem pode<br/> 
                 trazer consequências graves, dentre elas:</p>
                <ul>
                    <li>Acumulação de lixo</li>
                    <li>Aumento de aterros sanitários</li>
                    <li>Impacto na produção de gases causadores do efeito estufa</li>
                    <li>Desaparecimento precoce de combustíveis fósseis</li>
                    <li>Diminuição de recursos naturais</li>
                </ul>
            </div>
            <div className='imgh'>
                <img src={Imghome} alt='imghome'/>
            </div>
            </div>
        <Hcomp />
    </Container>     
    )
}
export default Home