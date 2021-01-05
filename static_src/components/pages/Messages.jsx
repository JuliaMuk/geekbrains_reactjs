import React from 'react';
import PropTypes from 'prop-types';

import MessageList from '../MessageList';
import Header from '../Header';
import ChatList from '../ChatList';

import '../../styles/Messages.css';

export default class Messages extends React.Component{
    state = {
        messages: []      
    };

    static propTypes = {
        chatId:PropTypes.number
    };

    static defaultProps = {
        chatId: 1
    };

    send = objMsg => {
        this.setState({messages: [...this.state.messages, objMsg]})
    };

    render() {
        return  <>      
            <Header text={'Чаты'} />
            <div className={'container_chat'}>
                <ChatList activeChat = {this.props.chatId-1} />                  
                <MessageList messages = {this.state.messages} activeChat = {this.props.chatId} />     
            </div>      
        </>;
    };
}