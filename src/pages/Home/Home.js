import Imghome from '../../assets/imghome.png';
import {Container} from './HomeStyle.js'
import Hcomp from '../../components/homecomp/Hcomp.js'




function Home(){
    return(
    <Container>
            <div className='home'>
            <div className='textop'>
                <h1>Você recicla lixo?<br/>
                    O que isso te impacta?</h1>
                <p>Reciclar é um meio de tomar atitudes positivas que<br/> 
                beneficiam o ambiente, porém, ignorar a reciclagem<br/> 
                pode trazer consequências muito graves, dentre elas:</p>
                <ul>
                    <li>As pilhas de lixo se acumulam</li>
                    <li>Os aterros aumentam em número</li>
                    <li>Os gases de efeito estufa aumentam</li>
                    <li>Combustíveis fósseis desaparecem mais cedo</li>
                    <li>Os recursos naturais diminuem</li>
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