import React from 'react';
import { render } from 'react-dom';
import Message from './Message.jsx'

export default class Example extends React.Component{

    state = {
        count: 0,
        text: '',
    };

    click = (event) => {
        this.setState({count:this.state.count+1});
    }

    change = (event) => {
        this.setState({
            text: event.target.value
        });
    }

    render(){
        return  <div>
                    <Message text={`Count click - ${this.state.count}`}/>
                    <button onClick={this.click}>+1</button>
                    <Message text={this.state.text} />
                    <input type="text" value={this.state.text} onChange={this.change}/>
                </div>;
    }
}