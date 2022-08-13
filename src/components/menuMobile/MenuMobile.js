import { Container } from './MenuMobileStyle.js';
import { IoClose } from 'react-icons/io5';

export function MenuMobile({ menuIsVisible, setMenuIsVisible }){
  return (
    <Container isVisible={menuIsVisible}>
      <IoClose size={45} onClick={() => setMenuIsVisible(false)}/>
      <nav>
        <a href="/">Home</a>
        <a href="requisicao">Requisição</a>
        <a href="/sobrenos">Sobre nós</a>
        <a href="/reciclagem">Reciclagem</a>
        <a href="/perfil">Perfil</a>
        <a href="/login">Login</a>
        <a href="/cadastro">Cadastro</a>
      </nav>
    </Container>
  )
}