import React from 'react';
import Message from './Message';

export default class MessageField extends React.Component {
   state = {
       messages: [
           {name:'', text:''},            
        ],        
        name: '',
        text:''
   };
   
   componentDidUpdate() {
        if (this.state.messages.length % 2 === 0) {  
            setTimeout(() =>
            this.setState({
                messages: [...this.state.messages, {name: 'robot', text: 'Привет, '+ this.state.messages[this.state.messages.length-1].name +' я робот'}]
            }),
            1000);
        }
    }

   click = () => {
       this.setState({  
          messages: [...this.state.messages, {name: this.state.name, text: this.state.text}]
        });
   };

    change_name = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    change_text = (event) => {
        this.setState({
            text: event.target.value
        })
    }

   render() {
        console.log('render');
        console.log(this.state.messages[2]);
        const messageElements = this.state.messages.map((data, id) => (<>
            <Message key={ `name_$id`} text={ data.name } /> 
            <Message key={ `message_$id`} text={ data.text } /></>));
          
        return <div>
            {messageElements}
            <input value={this.state.name} onChange={this.change_name}/><br/>
            <textarea value={this.state.text} onChange={this.change_text} cols="30" rows="10" /><br/>
            <button onClick={this.click}>Отправить сообщение</button>
        </div>
   }
}
