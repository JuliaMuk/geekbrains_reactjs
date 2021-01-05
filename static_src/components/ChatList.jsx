import React from 'react';
import {Link} from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import PropTypes from 'prop-types';

import AddChat from './AddChat'

import '../styles/ChatList.css';

export default class Header extends React.Component{
    state = {
        chats: ['Чат 1', 'Чат 2', 'Чат 3']
    }    
    
    static proptypes = {
        activeChat: PropTypes.number
    };

    add = chat => {
        this.setState({chats: [...this.state.chats, chat]})
    };

    render () {
        return <div className={'chat_list'}>
            <List component = "nav" aria-label = "main mailbox folders">   
                {this.state.chats.map((number,id) =>
                    <ListItem component={Link} to = {'/chat/'+(id+1)}  selected = {id === (this.props.activeChat)}>
                        <ListItemText primary = {number} />
                    </ListItem>
                )} 
            </List>
            <AddChat add = {this.add} activeChat = {this.props.activeChat} />
        </div>;
    }
}