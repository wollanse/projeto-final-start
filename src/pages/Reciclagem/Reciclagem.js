import { Container } from "./ReciclagemStyle"
import { RecVidro } from "../../components/RecVidro/RecVidro"
import { RecPlastico } from '../../components/Recplastico/RecPlastico'
import { RecPapel } from "../../components/RecPapel/RecPapel"
import { RecMetal } from "../../components/RecMetal/RecMetal"
export function Reciclagem(){
    return(
            <Container>
                <h1>Recicláveis</h1>
                    <RecVidro/>
                    <RecPlastico/> 
                    <RecPapel/>   
                    <RecMetal/> 
            </Container>
    )
}