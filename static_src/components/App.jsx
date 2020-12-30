import React from 'react';

import Message from './Message.jsx';
import MessageList from './MessageList';
import Example from './Example.jsx';


export default class App extends React.Component{
    constructor (props){
        super (props);
        this.state = {
            text: 'Some text from state',
            timeout: null,
            messages:['Hello 1','Hello 2','Hello 3'],
            interval: null
        };
    }

    componentDidMount(){
        console.log('componentDidMount');
        const timeout =  setTimeout(
            () => {
              //  this.setState({text: this.state.text});
            },
            2000
        );
       /* const interval = setInterval(
            () => {
                this.setState({messages: [...this.state.messages, 'How are you?']});
                setTimeout(
                    () => {
                        this.setState({messages: [...this.state.messages, 'I am robot']})
                    },
                    2000
                );
            },
            2000
        );*/
        this.setState({timeout});
      /*  this.setState({interval});*/
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
        if (this.state.messages.length % 2 === 1) {  // Остаток от деления на 2
            setTimeout(() =>
            this.setState(
                { messages: [ ...this.state.messages, 'Не приставай ко мне, я робот!' ] }),
            1000);
        }
    }
 
    

    componentWillUnmount(){
       /* clearTimeout(this.state.timeout);
        this.setState({timeout:null});
        clearInterval(this.state.interval);
        this.setState({interval:null});*/
    };

    click = (event) => {
        this.setState({messages: [...this.state.messages, this.state.text]});
    }

    change = (event) => {
        this.setState({
            text: event.target.value
        });
    }
    
    render (){
        console.log('render');
        return <main>
            <MessageList messages={this.state.messages}/>
        </main>;
    }
};