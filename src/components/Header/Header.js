import React from 'react';
import Logo from '../../assets/Logo.png';
import {Container} from './HeaderStyle.js'
import { Link } from 'react-router-dom'

export function Header(){
    return(
        <Container>
            <div className='logo'>
                <Link to='/'>
                  <img src={Logo} alt="logo do site"/>
                </Link>
            </div>
          <header>
            <button>
              <Link to='/sobrenos'>Sobre nós</Link>
            </button>
            <button>
              <Link to='/reciclagem'>Reciclagem</Link>
            </button>
            <button>
              <Link to='/requisicao'>Requisição</Link>
            </button>
            <button>
              <Link to='/perfil'>Perfil</Link>
            </button>
          </header>
        <section id="logcad">
          <button>
            <Link to='/login' >Login</Link>
          </button>
          <button>
            <Link to='/cadastro'>Cadastre-se</Link>
          </button>
        </section>
        </Container>
    )      
}
