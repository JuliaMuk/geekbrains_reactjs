import React from 'react';
import ReactDOM from 'react-dom';

const MessageComponent = (props) => <div>{props.value}</div>;
const MessageField = (props) => {
  return props.messages.map(message => <MessageComponent key={message} value={message} />);
};

class App extends React.Component {
    constructor(props) {
      super(props);
      this.addMessage = this.addMessage.bind(this);
      this.state = {
        messages:[],
        count: 0
      };
    }
  
    addMessage(){     
      this.setState({
        count: this.state.count +=1,
        messages: this.state.messages.concat('Сообщение '+this.state.count),
      })
      /* console.log(this.state.messages);*/
    }

    render() {
      return (
        <div>          
          <MessageField messages={ this.state.messages } />
          <button onClick={this.addMessage}>
            Отправить
          </button>
        </div>
      );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)









