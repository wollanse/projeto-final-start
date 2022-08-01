import { Container } from "./ReciclagemStyle"
import { Header } from "../../components/Header/Header"
import Footer from "../../components/footer/Footer"
import { RecVidro } from "../../components/RecVidro/RecVidro"
import { RecPlastico } from '../../components/Recplastico/RecPlastico'
import { RecPapel } from "../../components/RecPapel/RecPapel"
import { RecMetal } from "../../components/RecMetal/RecMetal"
export function Reciclagem(){
    return(

            <Container>
            <Header />
                <h1>Reciclaveis</h1>
                    <RecVidro/>
                    <RecPlastico/> 
                    <RecPapel/>   
                    <RecMetal/> 
            <Footer />  
            </Container>

    )
}