import React from 'react';

import Message from './Message';
import SendMessage from './SendMessage';

import '../styles/MessageList.css';


 export default class MessageList extends React.Component{
    constructor (props){
        super (props);
        this.state = {
            messages:[]
            
        };
    }

    static defaultProps ={
        messages:[]
    };

    componentDidUpdate(){
        if (this.state.messages[this.state.messages.length - 1].author !=='robot' ) { 
            setTimeout(() =>
            this.setState(
            { messages: [ ...this.state.messages, {message:'Не приставай ко мне, я робот!', author: 'robot'}] }),
            1000);
            }
            
    };
    
    send = objMsg => {
        this.setState({messages: [...this.state.messages, objMsg]})
    };

    render () {
        const Messages = this.state.messages.map(({message, author},index) => <Message message={ message } author={ author } key={index.toString()} />);

        return <div className={'message_list'}>
                    <div className={'messages'}>
                        {Messages}
                    </div>  
                    <SendMessage send = {this.send} />
                </div>;    
    }
 };