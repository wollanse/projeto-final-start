import React from 'react';
import Logo from '../../assets/Logo.png';
import { Container } from './HeaderStyle.js'
import { Link } from 'react-router-dom'
import { MenuMobile } from '../menuMobile/MenuMobile';
import { useEffect, useState } from 'react';
import { CgMenu } from "react-icons/cg"


export function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  return (
    <Container>
      <div className='logo'>
        <Link to='/'>
          <img src={Logo} alt="logo do site" />
        </Link>
      </div>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <CgMenu onClick={() => setMenuIsVisible(true)} />
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
