import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import '../styles/Layout.css';

import MessageList from './MessageList';
import Header from './Header';
import ChatList from './ChatList';

export default class Layout extends React.Component{
    
    render () {        
        return <MuiThemeProvider>
                    <main className={'main'}>
                        <Header text={'Чат'} />
                        <div className={'container_chat'}>
                            <ChatList chats={['Чат 1', 'Чат 2', 'Чат3']} />
                            <MessageList />
                        </div>   
                    </main>
                </MuiThemeProvider>; 
    }
}