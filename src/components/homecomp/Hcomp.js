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
                mais limpas e bonitas.</p> 
        </div>

        <div>
            <img className='img2' src={Ellipse} alt='Ellipse'/>
        </div>
        
        <div className='text'><nobr>Acúmulo de lixo</nobr></div>

        <div className='text'><nobr>Reciclagem</nobr></div>

        <div><img className='img2' src={Ellipse} alt='Ellipse'/></div>

        <div>
            <img className='img1' src={Group2} alt='Group2'/>
                <p>“O lixo de um é o tesouro dos
                    outros”,<br/> plastico, metal e outros
                     podem ser reciclados para
                     materia prima.</p>
        </div>
        <div>
        <img className='img1' src={Group3} alt='Group3'/>
                <p>Aquecimento global é um problema serio 
                    das ultimas decadas.</p> 
        </div>

        <div><img className='img2' src={Ellipse} alt='Ellipse'/></div>

        <div className='text'><nobr>Aquecimento global </nobr></div>

        <div className='text'><nobr>Animais</nobr></div>

        <div><img className='img2' src={Ellipse} alt='Ellipse'/></div>

        <div>
        <img className='img1' src={Group4} alt='Group4'/>
                <p>animais são mortos por conta 
                do excesso de lixo, invadindo
                seus lares..</p> 
        </div>
        </Container>
        
    )
}
export default Hcomp