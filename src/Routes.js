import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home'
import {Sobrenos} from './pages/SobreNos/Sobrenos'
import {Perfil} from './pages/Perfil/Perfil'
import {Requisicao} from "./pages/Requisiçao/Requisiçao"
import { Reciclagem } from './pages/Reciclagem/Reciclagem';
import { Recuperacao } from './pages/Recuperacao/Recuperacao';

import React from 'react'
import { Login } from './pages/Login/Login';
import { Cadastro } from './pages/Cadastro/Cadastro';
import { Header } from './components/Header/Header';
import Footer from './components/footer/Footer';
import Provider from './contexts/Provider';
function Routes() {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Provider>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/sobrenos' component={Sobrenos} />
                    <Route path='/perfil' component={Perfil} />
                    <Route path="/requisicao" component={Requisicao}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/cadastro" component={Cadastro}/>
                    <Route path="/reciclagem" component={Reciclagem}/>
                    <Route path="/recuperacao" component={Recuperacao}/>
                </Switch>
                </Provider>
            </BrowserRouter>
            <Footer/>
        </div>
    )
}

export default Routes