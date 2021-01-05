import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import '../styles/Router.css';

import Messages from './pages/Messages';
import Profile from './pages/Profile';

export default class Router extends React.Component{
    
    render () {        
        return <MuiThemeProvider>
                    <main className={'main'}>
                        <BrowserRouter>                                                       
                            <Switch>
                                <Route exact path="/" component={Messages} />
                                <Route exact path="/chat/:chatId" render={obj => <Messages chatId={Number(obj.match.params.chatId)} /> } />  
                                <Route exact path="/profile" component={Profile} />                                  
                            </Switch>                             
                        </BrowserRouter> 
                    </main>
                </MuiThemeProvider>; 
    }
}