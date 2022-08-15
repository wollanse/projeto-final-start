import React from 'react';
import { Container } from './HcompStyle.js'
import Ellipse from '../../assets/Ellipse.png'
import Group1 from '../../assets/Group1.png'
import Group2 from '../../assets/Group2.png'
import Group3 from '../../assets/Group3.png'
import Group4 from '../../assets/Group4.png'
function Hcomp(){
    return(
        <Container>
        <div>
            <img className='img1' src={Group1} alt='Group1'/>
                <p>Nos ajude a manter as ruas<br/>
                limpas e bonitas.</p> 
        </div>

        <div>
            <img className='img2' src={Ellipse} alt='Ellipse'/>
        </div>
        
        <div className='text negrito'><nobr>Acúmulo de lixo</nobr></div>

        <div className='text negrito'><nobr>Reciclagem</nobr></div>

        <div><img className='img2' src={Ellipse} alt='Ellipse'/></div>

        <div>
            <img className='img1' src={Group2} alt='Group2'/>
                <p>“O lixo de um é o tesouro de
                    outros”,<br/> plástico, metal e outros
                     podem ser reciclados tornando-se
                     matéria prima.</p>
        </div>
        <div>
        <img className='img1' src={Group3} alt='Group3'/>
                <p>Aquecimento Global é um dos maiores problema 
                    das últimas décadas.</p> 
        </div>

        <div><img className='img2' src={Ellipse} alt='Ellipse'/></div>

        <div className='text negrito'><nobr>Aquecimento Global</nobr></div>

        <div className='text negrito'><nobr>Destruição do Bioma</nobr></div>

        <div><img className='img2' src={Ellipse} alt='Ellipse'/></div>

        <div>
        <img className='img1' src={Group4} alt='Group4'/>
                <p>Extinção animal acelerada de toda a cadeia animal e vegetal pelo excesso de poluição.</p> 
        </div>
        </Container>
        
    )
}
export default Hcomp