import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home'
import {Sobrenos} from './pages/SobreNos/Sobrenos'
import {Perfil} from './pages/Perfil/Perfil'
import {Requisicao} from "./pages/Requisiçao/Requisiçao"
import { Reciclagem } from './pages/Reciclagem/Reciclagem';
import { Recuperacao } from './pages/Recuperacao/Recuperacao';
import { RedSenha } from './pages/RedSenha/RedSenha';

import React from 'react'
import { login } from './pages/Login/Login';
import { Cadastro } from './pages/Cadastro/Cadastro';

function Routes() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/sobrenos' component={Sobrenos} />
                    <Route path='/perfil' component={Perfil} />
                    <Route path="/requisicao" component={Requisicao}/>
                    <Route path="/login" component={login}/>
                    <Route path="/cadastro" component={Cadastro}/>
                    <Route path="/reciclagem" component={Reciclagem}/>
                    <Route path="/recuperacao" component={Recuperacao}/>
                    <Route path="/redsenha" component={RedSenha}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes