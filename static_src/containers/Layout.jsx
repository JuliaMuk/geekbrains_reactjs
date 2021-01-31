import React from 'react';
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import MessageField from './MessageField';
import ChatList from './ChatList';
import Header from './Header';
import { sendMessage } from "../actions/messageActions";
import '../styles/layout.css';



class Layout extends React.Component {
   static propTypes = {
       chatId: PropTypes.number,
       sendMessage: PropTypes.func.isRequired,
       messages:PropTypes.object
   };


 

   static defaultProps = {
       chatId: 1,
   };

  /* state = {
       messages: {
           1: { text: "Привет!", sender: 'bot' },
           2: { text: "Здравствуйте!", sender: 'bot' },
       },
   };*/

   componentDidUpdate(prevProps, prevState) {
      /* const { messages } = this.state;
       if (Object.keys(prevState.messages).length < Object.keys(messages).length &&
           Object.values(messages)[Object.values(messages).length - 1].sender === 'me') {
           setTimeout(() =>
               this.sendMessage('Не приставай ко мне, я робот!', 'bot'), 1000);
       }*/
   }




   render() {
       return (
           <div className="layout">
               <Header chatId={ this.props.chatId } />
               <div className="layout-canvas">
                   <div className="layout-left-side">
                       <ChatList />
                   </div>
                   <div className="layout-right-side">
                       <MessageField
                           chatId={ this.props.chatId }
                           messages={ this.props.messages }
                           sendMessage={ this.props.sendMessage }
                       />
                   </div>
               </div>
           </div>
       )
   }
}

const mapStateToProps = ({ messageReducer }) => ({
    messages: messageReducer.messages,
 });

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);